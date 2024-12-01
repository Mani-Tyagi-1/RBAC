const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const register = async (req, res) => {

    try {
        const { username, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
          username,
          password: hashedPassword,
          role,
        });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Something malicious happened" });

    }

    
}

const login = async (req,res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
          return res
            .status(401)
            .json({ message: `User ${username} not found` });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
          { id: user._id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        res.status(200).json({ message: `User ${username} logged in successfully `, token: `${token}` });
    }
    catch (error) {
         res.status(500).json({ message: "Something malicious happened" });
    }
}

module.exports = {
    register,
    login,
}