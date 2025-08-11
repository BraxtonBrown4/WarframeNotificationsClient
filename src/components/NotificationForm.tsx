import { useState } from "react";

export const NotificationForm = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSubmit = () => {
    if (!loggedIn) {
      window.location.href = "/.auth/login/aad"
    }

    setLoggedIn(false)
  }

  return (
    <div>
      <h2>Form</h2>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
