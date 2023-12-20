import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
const News = () => {
    return (
        <div className='mt-28 container mx-auto'>
            
            <div className='text-center mb-16'>
                <h1 className='text-4xl font-semibold mb-2'>FOR STUDENT</h1>
                <p>Latest news & event of our Student</p>
             </div>


<div className='grid md:grid-cols-3 gap-2 pl-6 container mx-auto'>
<div className="card w-80 h-[400px] bg-base-100 shadow-xl">
  <figure><img className='h-[220px]' src="https://i.ibb.co/0Vb2v3S/2-870x400.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Publishing and graphic desi
      
    </h2>
    <p className='flex items-center gap-2'><FaCalendarAlt/> 6 Mar, 2023</p>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</p>
    <div className="card-actions ">
      <div className="badge text-blue-700">Read More...</div> 

    </div>
  </div>
</div>
<div className="card w-80 h-[400px] bg-base-100 shadow-xl">
  <figure><img className='h-[220px]' src="https://i.ibb.co/RzbqpgK/4-870x400.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    variation of the ordinary lor
      
    </h2>
    <p className='flex items-center gap-2'><FaCalendarAlt/> 6 Mar, 2023</p>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</p>
    <div className="card-actions ">
      <div className="badge text-blue-700">Read More...</div> 

    </div>
  </div>
</div>
<div className="card w-80 h-[400px] bg-base-100 shadow-xl">
  <figure><img className='h-[220px]' src="https://i.ibb.co/qCytjYQ/3-870x400.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Testing is a great thing
      
    </h2>
    <p className='flex items-center gap-2'><FaCalendarAlt/> 6 Mar, 2023</p>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</p>
    <div className="card-actions ">
      <div className="badge text-blue-700">Read More...</div> 

    </div>
  </div>
</div>
</div>



        </div>
    );
};

export default News;