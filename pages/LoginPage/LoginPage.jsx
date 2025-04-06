import "./loginPage.css"; // Importing CSS for styling
import { useState, useContext } from "react"; // React hooks for state management
import { AuthContext } from "../../components/AuthContext/AuthContext"; // Context for authentication
import { useNavigate } from "react-router-dom"; // Hook for navigation
import axios from "axios"; // For making API requests

const LoginPage = () => {
  const [name, setName] = useState(""); // State for storing the entered email
  const [password, setPassword] = useState(""); // State for storing the entered password
  const [error, setError] = useState(null); // State for managing error messages
  const { login } = useContext(AuthContext); // Access the login function from AuthContext
  const navigate = useNavigate(); // Hook for navigating users to another page

  // Function to navigate back to the previous page
  const handleGOBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Function to handle login
  const handleLogin = async () => {
    try {
      // Requesting user data from the API
      const response = await axios.get("https://api.escuelajs.co/api/v1/users");

      // Checking if the entered email exists in the API response
      const user = response.data.find((user) => user.email === name);

      if (user) {
        // If the user exists, check the password
        if (user.password === password) {
          login(user.name); // Log in the user
          navigate("/"); // Navigate to the home page
        } else {
          setError("Incorrect password. Please try again."); // Error for incorrect password
        }
      } else {
        setError("User not found. Please check your email."); // Error for user not found
      }
    } catch (err) {
      console.error(err); // Log the error to the console
      setError("An error occurred. Please try again."); // General error message
    }
  };

  return (
    <div className="login-container">
      <button className="back-button" onClick={handleGOBack}>Back</button> {/* Button to go back */}
      <h1 className="login-title">Login</h1> {/* Page title */}
      <form className="login-form">
        {/* Input for email */}
        <input
          type="email"
          className="login-input login-email"
          placeholder="Enter your email"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update email state
        />
        {/* Input for password */}
        <input
          type="password"
          className="login-input login-password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        {/* Login button */}
        <button
          className="login-button"
          type="button" // Prevent form submission
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
      {/* Display error message if any */}
      {error && <p className="login-error">{error}</p>}
    </div>
  );
};

export default LoginPage; // Export the LoginPage component