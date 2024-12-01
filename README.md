<h1 align="center" id="title">Role-Based Access Control (RBAC) System</h1>

<p id="description">This project is a full-stack Role-Based Access Control (RBAC) system which includes authentication authorization and role-based access management. The backend is built with Node.js Express and MongoDB while the frontend is built with React.</p>

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Authentication: Users can register and log in securely.
*   Authorization: Access is restricted based on user roles (e.g. Admin User).
*   Role-Based Access Control: Different user roles are assigned specific permissions.
*   Frontend: A React-based frontend allows users to interact with the system.

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the Repository</p>

```
git clone  **repository-url** 
```
<br/>
<h3>Backend Setup</h3>
<br/>
<p>1. Navigate to the backend folder:</p>

```
cd src
```

<p>2. Install dependencies:</p>

```
npm install
```

<p>3. Configure environment variables: Create a .env file in the src directory.</p>

```
PORT=5000 MONGO_URI=mongodb://localhost:27017/rbac JWT_SECRET=your-secret-key
```

<p>4. Start the backend server:</p>

```
npm start
```
<br/>
<h3>Frontend setup</h3>
<br/>
<p>1. Navigate to the frontend folder:</p>

```
cd rbac-frontend
```

<p>2. Install dependencies:</p>

```
npm install
```

<p>3. Start the React development server:</p>

```
npm start
```

<br/>
<h2>Development Notes</h2>
<br/>

* Password Security: Passwords are hashed using bcrypt.
* JWT Authentication: Tokens are generated using jsonwebtoken and validated using middleware.
* Role Middleware: Protects routes by ensuring users have appropriate roles.

<br/>
<h2>Common Issues</h2>
<br/>

* MongoDB Connection Error: Ensure MongoDB is running locally or update the connection string in .env.

* React CORS Error: Add the following CORS configuration in index.js (backend)
```
const cors = require("cors");
app.use(cors());
```
* Token Expiration: Ensure tokens are valid before making API requests.

<br/>
<h2>Contributors</h2>
Me: Developer of this amazing RBAC system!
