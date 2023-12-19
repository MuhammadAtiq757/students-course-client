import React from 'react';
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const GetTouch = () => {
    return (
        <div className='mt-24 mb-20 container mx-auto'>
            
<div className='text-center'>
<h1 className='text-4xl font-semibold mb-4'>Get In Touch</h1>
<p>Uaerat litora, taciti quaerat dolor ligula laoreet omnis aut scelerisque ex fuga platea eveniet pulvinar praesent <br />
molestiae maiores, quidem cumque!</p>
</div>



<div className='grid md:grid-cols-4 mt-16'>

<div className='text-center'>
<FaSquarePhoneFlip className='text-5xl mx-auto mb-4 text-blue-700' />
<h4 className='text-2xl font-semibold mb-4'>Telephone No.</h4>
<p>Phone 1: 0(1234) 567 89012 <br />
Phone 2: 0(987) 567 890</p>
</div>
<div className='text-center'>
<FaLocationDot className='text-5xl mx-auto mb-4 text-blue-700'  />
<h4 className='text-2xl font-semibold mb-4'>Address Street</h4>
<p>Address : No 40 Baria Sreet 133/2 <br />
NewYork City, NY, United States.</p>
</div>
<div className='text-center'>
<BsFillPhoneFill className='text-5xl mx-auto mb-4 text-blue-700' />
<h4 className='text-2xl font-semibold mb-4'>Phone Number</h4>
<p>Phone 1: 0(1234) 567 89012<br />
Phone 2: 0(987) 567 890</p>
</div>
<div className='text-center'>
<MdEmail className='text-5xl mx-auto mb-4 text-blue-700'/>
<h4 className='text-2xl font-semibold mb-4'>Address email</h4>
<p>Phone 1: 0(1234) 567 89012 <br />
Phone 2: 0(987) 567 890</p>
</div>



</div>

        </div>
    );
};

export default GetTouch;