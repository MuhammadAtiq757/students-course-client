import React from 'react';

const Banner = () => {
    return (
        <div>
            <div  className="hero min-h-screen h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/rsMcd8c/14-ORyw-TSe1b-IMo-Vshr-Ge-VWg.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold w-full">Education For Everyone.</h1>
      <p className='text-center mt-2 w-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis corrupti animi suscipit nam. Nobis tempore quisquam impedit id nulla veritatis?</p>
      <button className="btn mt-12 bg-white text-black hover:badge-outline hover:border-blue-700">Read More</button>
     
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;