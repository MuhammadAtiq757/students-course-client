import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Allusers = () => {

   
    // const {data: users = [], refetch} = useQuery(['users'], async ()=>{
    //     const res = await fetch ('http://localhost:5000/users')
    //     return res.json();
    // })


    const [data, setData] = useState([]);
  
console.log(data);
    useEffect(() => {
  
      const fetchData = () => {
        fetch('https://school-academy-server-muhammadatiq757.vercel.app/users')
          .then(response => response.json())
          .then(jsonData => setData(jsonData))
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      };
  
      fetchData();
    }, []);
  
const handleMakeAdmin = user =>{
fetch(`https://school-academy-server-muhammadatiq757.vercel.app/users/admin/${user._id}`,{
method: 'PATCH'
})

.then(res => res.json())
.then(data => {
    if(data.modifiedCount)
  
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${user.name} is an Admin now!`,
        showConfirmButton: false,
        timer: 1500
      })
})

}
const handleMakeInstructor = user =>{
fetch(`https://school-academy-server-muhammadatiq757.vercel.app/users/instructor/${user._id}`,{
method: 'PATCH'
})

.then(res => res.json())
.then(data => {
    if(data.modifiedCount)
  
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${user.name} is an Admin now!`,
        showConfirmButton: false,
        timer: 1500
      })
})

}


    return (
     <div>

<div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Make Instructor</th>
        <th>Make Admin</th>
      </tr>
    </thead>
    <tbody>
   {
    data.map((user, index) =>  <tr>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role === 'instructor' ? 'instructor' : <button onClick={() => handleMakeInstructor(user)} className='btn btn-xs btn-outline btn-secondary'>Instructor</button>}</td>


        <td>{user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className='btn btn-xs btn-outline btn-secondary'>Admin</button>}</td>
      </tr>)
   }
     
    
 
    </tbody>
  </table>
</div>
     </div>
    );
};

export default Allusers;