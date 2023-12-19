import React, { useEffect, useState } from 'react';

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://school-academy-server-muhammadatiq757.vercel.app/popular')
        .then(response => response.json())
        .then(jsonData => setInstructor(jsonData))
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    fetchData();
  }, []);

  const handleClickShowMore = () => {
    setShowAll(true);
  };

  const displayedInstructors = showAll ? instructor : instructor.slice(0, 9);

  return (
    <>
      <div className='grid md:grid-cols-3 mx-6 p-6 mx-auto'>
        {displayedInstructors.map(da => (
          <div key={da._id}>
            <div className="card w-80 bg-base-100 shadow-xl mt-4">
              <figure><img src={da.insImg} className='rounded h-80' alt="Shoes" /></figure>
              <div className="card-body h-52">
                <h2 className="card-title">Instructor: {da.instructorName}</h2>
                <h2 className="card-title">Email: {da.instructorEmail}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-4">
          <button
            className="btn btn-primary m-4"
            onClick={handleClickShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default Instructor;
