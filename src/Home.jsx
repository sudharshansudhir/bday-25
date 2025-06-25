import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div><h3 className='md:text-3xl text-center font-bold bg-zinc-900 text-white bg-cover bg-center'>HBD AMMU🥳</h3>
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 min-h-screen bg-zinc-900 text-white bg-cover bg-center">
      
      
      <Link className="bg-pink-500 text-white px-6 py-3 rounded-lg" to="/s1">
        Surprise 1
      </Link>
      <Link className="bg-green-500 text-white px-6 py-3 rounded-lg" to="/s2">
        Surprise 2
      </Link>
      <Link className="bg-purple-600 text-white px-6 py-3 rounded-lg" to="/s3">
        Surprise 3
      </Link>
      <Link className="bg-red-600 text-white px-6 py-3 rounded-lg" to="/s4">
        Surprise 4
      </Link>
    </div>
  </div>);
};

export default Home;