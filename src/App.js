import "./App.css";
import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");

  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const token = urlParams.get("token");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send a request to the server to reset the password
    const response = await fetch(
      `https://fierce-tick-overalls.cyclic.app/resetPassword?userId=${userId}&token=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          password: password,
        }),
      }
    );

    // Handle the response from the server
    const data = await response.json();
    console.log(data);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="App">
      <h1>Set New Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password...."
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <br />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default App;
