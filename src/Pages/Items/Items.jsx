import React from 'react';

const Items = () => {
    return (
        <div className='mt-28 h-[250px] md:w-full' style={{backgroundImage: 'url(https://i.ibb.co/DC8PMg8/raisedhandstoaskaquestion.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
<div className='grid md:grid-cols-4 gap-2 text-white justify-items-center pt-24'>
          
<div className='text-4xl font-semibold text-center'>
    <h1>
        20 <br /> Campus
    </h1>
</div>

<div className='text-4xl font-semibold text-center'>
    <h1>
        100 <br /> Teachers
    </h1>
</div>

<div className='text-4xl font-semibold text-center'>
    <h1>
        50 <br /> Course
    </h1>
</div>

<div className='text-4xl font-semibold text-center'>
    <h1>
        250<br /> Teaching Hours
    </h1>
</div>
</div>

      </div>
      



    );
};

export default Items;