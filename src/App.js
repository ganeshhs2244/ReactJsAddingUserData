import React, { useState } from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const onAddUserHandler = (uname, uage) => {
    setUserList((prelist)=>{
        return [...prelist,{name:uname,age:uage,id:Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler}></AddUser>
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
