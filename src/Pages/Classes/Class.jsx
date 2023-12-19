import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Class = ({ da }) => {
  const { user } = useContext(AuthContext);
  const { _id, instructorName, price, image } = da;
  console.log(da);

  if (da.role !== 'approved') {
    return null; // Don't render anything if the role is not approved
  }

  const cardColor = da.availableSeats === 0 ? 'bg-red' : 'bg-white';

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSelectClass = (da) => {
    if (user) {
      setIsButtonDisabled(true); // Disable the button when clicked

      fetch('https://school-academy-server-muhammadatiq757.vercel.app/selectedClassData', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(da),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            console.log(data);
          }
        });
    } else {
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }

    console.log('Class selected:', da.className);
  };

  return (
    <div className='mt-24 border-y-4'>
      <div className={`card w-100  w-md-80 shadow-xl mt-4 ${cardColor}`}>
        <figure>
          <img className='h-[250px] ' src={da.image} alt="course" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Class Name: {da.className}</h2>
          <p>Students: {da.students}</p>
          <p>Available Seats: {da.availableSeats}</p>
          <button
            className='btn btn-outline hover:bg-blue-700'
            onClick={() => handleSelectClass(da)}
            disabled={isButtonDisabled} // Disable the button based on the state
          >
            Apply Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default Class;
