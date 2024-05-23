import React from 'react';
import { useRouter } from 'next/router'; 

const Home = () => {
  const router = useRouter(); 

  const handleLogout = () => {
    router.push('/'); 
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzd2YXdjNzRnM2lvcTJ5MXIxNWF5dWlqZ2VnYXA4cDNtYnV4Ym0xNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sxwk9hGlsULcYm6hDX/giphy.gif")` }}>
      <div className="w-full max-w-md bg-pink-100 rounded-lg shadow-lg p-8 dark:bg-gray-800">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-pink-700 md:text-2xl dark:text-pink-300 mb-10">Welcome, Lovely User!</h1>
        <img src="https://img.freepik.com/free-vector/futuristic-technological-wallpaper_79603-1093.jpg?w=996&t=st=1716429661~exp=1716430261~hmac=b17d5933753d0359111e3a761ad488b500f8ee7935acbbf27832ed22fabf1d02" alt="Decorative Flowers" className="w-24 h-24 mb-6" />
        <button onClick={handleLogout} className="w-full bg-pink-600 hover:bg-pink-800 focus:outline-none 
          font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white mt-4">
          Logout
        </button>
      </div>
    </section>
  );
};

export default Home;
