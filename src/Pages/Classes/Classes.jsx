import React, { useEffect, useState } from 'react';
import './classes.css';
import Class from './Class';

const Classes = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className='container mx-auto px-4 '>
      <div className='grid md:grid-cols-3 gap-4'>
      {data.slice(0, showAll ? data.length : 8).map(da => {
        if (da.availableSeats === 0) {
          return (
            <div key={da._id} style={{ backgroundColor: 'red' }}>
              <Class da={da} />
            </div>
          );
        } else {
          return (
            <div key={da._id} style={{ backgroundColor: 'white' }}>
              <Class da={da} />
            </div>
          );
        }
      })}
    
    </div>

    </div>
  );
};

export default Classes;
