import React, { useEffect, useState } from 'react';
import AdminClass from './AdminClass';

const AdminClasses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://school-academy-server-muhammadatiq757.vercel.app/popular')
        .then(response => response.json())
        .then(jsonData => setData(jsonData))
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(classItem => (
              <AdminClass key={classItem._id} classItem={classItem} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminClasses;
