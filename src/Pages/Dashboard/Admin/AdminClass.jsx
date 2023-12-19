import React, { useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

const modifiedCount = 1;

const AdminClass = ({ classItem }) => {
  const modalRef = useRef(null); // Create a reference to the modal element

  const handleOpenModal = () => {
    modalRef.current.showModal(); // Open the modal using ref and showModal() method
  };
  console.log(classItem);

  const [showModal, setShowModal] = useState(false)

  const handleApprove = (classItem) => {
    axios
      .patch(`https://school-academy-server-muhammadatiq757.vercel.app/users/approve/${classItem._id}`)
      .then(response => {
        console.log(response.data);
        window.alert('Approve successfully'); // Show alert message
        // Handle the response data as needed
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };


  return (
    <>

      <tr>
        <td><img src={classItem.image} alt="" /></td>
        <td>{classItem.name}</td>
        <td>{classItem.instructorName}</td>
        <td>{classItem.instructorEmail}</td>
        <td>{classItem.availableSeats}</td>
        <td>{classItem.price}</td>
        <td>

        </td>
        <td>
          <button
            onClick={() => handleApprove(classItem)}
            className={`btn btn-xs ${modifiedCount === 1 ? 'btn-green' : ''}`}
          >
            Approve
          </button>
          <button className='btn btn-xs'>Deny</button>
          <button onClick={handleOpenModal} className='btn btn-xs'>Feedback</button>
        </td>
      </tr>

      <Modal
        modalRef={modalRef}
      ></Modal>

    </>
  );
};

export default AdminClass;
