

import React from 'react';
import Banner from '../Banner/Banner';
import OurTeacher from '../OurTeacher/OurTeacher';
import News from '../News/News';
import Items from '../Items/Items';
import GetTouch from '../GetTouch/GetTouch';


const Home = () => {
    return (
        <div>
          <Banner></Banner>  
          <OurTeacher></OurTeacher>
          <News></News>
          <Items></Items>
          <GetTouch></GetTouch>
         
        </div>
    );
};

export default Home;