import React, { useState } from "react";
import Login from "./components/login/Login";

const App = () => {
  const [isNew, setIsNew] = useState(true);

  const isNewUser = () => {
    if (isNew) {
      setIsNew(false);
      console.log(isNew);
    } else {
      setIsNew(true);
      console.log(isNew);
    }
  };

  return (
    <div>
      {isNew ? (
        <Login title="Sign In" btn="Sign Up" isNewUser={isNewUser} />
      ) : (
        <Login title="Sign Up" btn="Sign In" isNewUser={isNewUser} />
      )}
    </div>
  );
};

export default App;
