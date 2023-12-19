import React, { useEffect, useState } from 'react';
import Class from './class';
import './classes.css';

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
    <div className='test m-8 grid md:grid-cols-2 gap-8 p-8'>
      {data.slice(0, showAll ? data.length : 6).map(da => {
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
      {!showAll && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Classes;
