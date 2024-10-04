import { useEffect, useMemo, useState } from "react";

const FilterUsers = () => {
    const [users, setUsers] = useState([ {id: 1, name:'Akshay'},
        {id: 2, name:'Dev'},
        {id: 3, name:'Pratiksha'},
        {id: 4, name:'Navdeep'}]);

    const [selectedUser, setSelectedUser] = useState("");

    // useEffect(() => {
    //    const resp = [
    //         {id: 1, name:'Akshay'},
    //         {id: 2, name:'Dev'},
    //         {id: 3, name:'Pratiksha'},
    //         {id: 4, name:'Navdeep'}
    //     ];
    //     setUsers(resp);
    //   }, []);
    

    const filteredUsers = useMemo(() => {
        return users?.filter((user) => 
           user.name.toLowerCase().includes(selectedUser.toLowerCase())
        );
      }, [selectedUser]);

      const userHandleChange = (event) => {
        setSelectedUser(event.target.value);
      } 

      console.log("re-render: ", users);
    
      return(
        <div>
            <h1>My Users</h1>
            <input type="text"  onChange={userHandleChange}/>
            <hr/>
            <div>
                <ul>
                    {filteredUsers?.map((user)=>{
                        return <li key={user.id}>{user?.name}</li>
                    })}
                </ul>
            </div>
        </div>
      )

}

export default FilterUsers;