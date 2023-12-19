import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const OurTeacher = () => {
    return (
        <div className='mt-24 container mx-auto'>
             <div className='text-center mb-16'>
                <h1 className='text-4xl font-semibold mb-2'>OUR TEACHER</h1>
                <p>Our preschool program has six dedicated Teachers</p>
             </div>

<div className='grid md:grid-cols-3 gap-4'>
<div className="card w-80 bg-base-200 shadow-xl">
  <figure><img src="https://i.ibb.co/74gJkvw/141791e52c8b60893c1f8874460f1ef5.jpg" alt="teacher" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     MMuhammad Nafi
      
    </h2>
    <p>Professor, university of America</p>
    <div className="card-actions justify-center mt-4 gap-4">
    <FaSquareFacebook className='rounded-lg text-blue-700' />
    <FaTwitter className='rounded-lg text-blue-700' />
    <FaInstagramSquare className='rounded-lg text-blue-700' />
      
    </div>
  </div>
</div>
<div className="card w-80 bg-base-200 shadow-xl">
  <figure><img src="https://i.ibb.co/pP2dP3v/how-much-could-a-masters-degree.jpg" alt="teacher" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     MMuhammad Nafi
      
    </h2>
    <p>Professor, university of America</p>
    <div className="card-actions justify-center mt-4 gap-4">
    <FaSquareFacebook className='rounded-lg text-blue-700' />
    <FaTwitter className='rounded-lg text-blue-700' />
    <FaInstagramSquare className='rounded-lg text-blue-700' />
      
    </div>
  </div>
</div>
<div className="card w-80 bg-base-200 shadow-xl">
  <figure><img src="https://i.ibb.co/bF29cW5/images.jpg" alt="teacher" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     MMuhammad Nafi
      
    </h2>
    <p>Professor, university of America</p>
    <div className="card-actions justify-center mt-4 gap-4">
    <FaSquareFacebook className='rounded-lg text-blue-700' />
    <FaTwitter className='rounded-lg text-blue-700' />
    <FaInstagramSquare className='rounded-lg text-blue-700' />
      
    </div>
  </div>
</div>
</div> 
        </div>
    );
};

export default OurTeacher;