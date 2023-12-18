import React from 'react';

const Banner = () => {
    return (
        <div>
            <div  className="hero min-h-screen h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/9Gc4dtz/slide-5.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Travel and Adventure Campaign</h1>
      <div className='grid md:grid-cols-2 gap-4'>
      <button className="btn bg-green-600 hover:bg-green-700 border-none text-white w-full hover:text-black">Tour Guide</button>
      <button className="btn bg-white text-black hover:badge-outline hover:border-green-600">About Us</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;