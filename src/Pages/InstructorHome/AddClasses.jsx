import React, { useContext } from 'react';

import './AddClasses.css'
import { AuthContext } from '../../Providers/AuthProvider';


const AddClasses = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const image = form.classImage.value;
        const className = form.className.value;
        const instructorName = form.instructorName.value;
        const email = form.email.value;
        const price = form.price.value;
        const seat = form.seat.value;
        

        const adding ={

            className,
            image,
            instructorName,
            email,
            price,
            seat,
           

        }
        console.log(adding);
        
fetch('https://school-academy-server-muhammadatiq757.vercel.app/addclass',{
    method: 'POST',
    headers: {
        'content-type': 'application/json'

    },
    body: JSON.stringify(adding)
})
.then(res => res.json())
.then(data =>{
console.log(data);
        })
    }


   


    return (
        <div className='form-container bg-gray-100 w-full py-20'>
            <h1 className='text-center text-3xl font-bold m-8 '>Add New Course</h1>
         
<form onSubmit={handleBookService} className='form'>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-2/3 mx-auto mt-6">

    
    <div className="form-control">
        <label className="label">
            <span className="label-text">Course Name</span>
        </label>
        <input type="text" name="className" className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Course Image</span>
        </label>
        <input type="text" name="classImage"  className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Admin Name</span>
        </label>
        <input defaultValue={user.displayName} readOnly type="text"  name="instructorName" className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Admin Email</span>
        </label>
        <input type="email" defaultValue={user?.email} readOnly  name="email" className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Price</span>
        </label>
        <input type="number"  name="price" className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Available Seat</span>
        </label>
        <input type="text" name="seat" className="input input-bordered" />
    </div>
</div>

<div className="form-control mt-6 w-44 mx-auto">

    <input  type="submit" value="Add" className="btn bg-blue-700 text-white hover:bg-inherit hover:text-black hover:border-blue-700" />
</div>
</form>  
                        
        </div>
    );
};

export default AddClasses;