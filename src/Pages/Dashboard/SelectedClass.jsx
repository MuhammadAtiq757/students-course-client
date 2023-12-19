import React, { useEffect, useState } from 'react';

const SelectedClass = () => {
  const [meet, setMeet] = useState([])
    const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch('https://school-academy-server-muhammadatiq757.vercel.app/selectedClassData')
        .then(response => response.json())
        .then(jsonData => setData(jsonData))
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    fetchData();
  }, []);

  const handleDelete = id =>{

    fetch(`https://school-academy-server-muhammadatiq757.vercel.app/deletedata/${id}`,{
      method: "delete"
  })
  .then(res => res.json())
  .then(data =>{
      console.log(data);
      if(data.deletedCount > 0){
          alert('Deleted Successful');
          // const remaining = mytoy.filter(toy => toy._id !==id);
          // setMytoy(remaining)
      }
  })
  }
    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Class Name</th>
        <th>instructor Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
     {
        data.map(info => <tr
        key={data._id}
        >
            <td>
            <img className='w-20' src={info .image}/>
            </td>
            <td>{info .name}</td>
            <td>{info .instructorName}</td>
            <td className=''>
               <button onClick={()=>handleDelete(info._id)} className='btn btn-xs btn-error mx-2'>Delete</button> 
               <button className='btn btn-xs btn-warning mx-2'>Pay</button> 

            </td>
          </tr>)
     }
    </tbody>
  </table>
</div>
    );
};

export default SelectedClass;