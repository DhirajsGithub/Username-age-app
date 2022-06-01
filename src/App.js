import React, { Fragment, useState } from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';


function App() {

  const [usersList, setUsersList] = useState([])
  const addUserHandlerr = (uName, age)=>{
    console.log(uName, age)
    setUsersList((preUsers)=>{
      return [
        ...preUsers, {name : uName, age: age, id: Math.random().toString()}
      ]
    })
  }
  return (
    <Fragment>
      <AddUser onAddUsers={addUserHandlerr}  />
      <UserList users = {usersList} />
    </Fragment>
  );
}

export default App;
