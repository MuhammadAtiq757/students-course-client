import React from 'react';

const MyClasses = ({ classItem }) => {
    return (
        <tr>
            <td><img className='w-20 rounded-xl' src={classItem.image}/></td>
            <td>{classItem.className}</td>
            <td>{classItem.instructorName}</td>
            <td>{classItem.seat}</td>
            <td>{classItem.price}</td>
        </tr>
    );
};

export default MyClasses;