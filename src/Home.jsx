import React from 'react'
import Body from './Components/Body';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

const Home = () => {
  return <div className=" bg-black w-screen h-screen text-white flex flex-col justify-between lg:min-h-screen">
    <Nav />
    <Body />
    <Footer/>
  </div>;
}

export default Home