import UserContext from './UserContext'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const UserState = (props) => {
    const [users, setUsers] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [updateToggle, setUpdateToggle] = useState(true);

    const updateAll = () => setUpdateToggle(!updateToggle)

    useEffect(() => {
        axios.get("/users")
            .then((response)=>{
            setUsers(response.data);
            })
            .catch((err)=>{
            console.log(err);
    }, [updateToggle]);

    axios.get('/transaction/history')
    .then((res2)=> {
      setTransactions(res2.data);
      })
    .catch(err => {
      console.log(err)
    });
    }, [updateToggle])

  return (
    <UserContext.Provider value={{users, transactions, updateAll}}>
                  {props.children}
    </UserContext.Provider>
  )
}

export default UserState