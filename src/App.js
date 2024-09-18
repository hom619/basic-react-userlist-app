import { useState } from "react";
import "./App.css";
import { UserForm } from "./Component/UserForm";
import { UserTable } from "./Component/UserTable";

function App() {
  const [userlist, setUserlist] = useState([]);
  const addUser = (userObj) => {
    setUserlist([...userlist, userObj]);
  };
  return (
    <div>
      <UserForm addUser={addUser} />
      <UserTable userlist={userlist} />
    </div>
  );
}

export default App;
