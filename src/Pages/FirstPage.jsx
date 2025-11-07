import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const navigate = useNavigate();
  const [oopsVisible, setOopsVisible] = useState(false);
  const [hiVisible, setHiVisible] = useState(false);

  useEffect(() => {
    // Show "Oops!!" after 3 seconds
    const oopsTimer = setTimeout(() => {
      setOopsVisible(true);
    }, 3000);

    // Show "Hi Kashish" after 8 seconds (3 + 5)
    const hiTimer = setTimeout(() => {
      setHiVisible(true);
    }, 5000);

    return () => {
      clearTimeout(oopsTimer);
      clearTimeout(hiTimer);
    };
  }, []);

  return (
    <div className="cursive-font text-6xl text-center flex flex-col items-center justify-center mt-10 w-5xl text-pink-500 relative">
      {!oopsVisible && (
        <div className="text-4xl text-pink-500 text-center flex justify-center items-center mt-20">
          Is this Pinkeeeeeeeey ?👉👈
        </div>
      )}

      {oopsVisible && !hiVisible && (
        <button className="leading-snug text-pink-500">Oooooops!!🙊🙈</button>
      )}

      {hiVisible && (
        <div className="leading-snug">
          
          Hiiii Kashish
          <br/>
          <span className="text-4xl pl-2">(❁´◡`❁)</span>
           <h3 className='text-white opacity-50' >
            I have Something For u ...
           </h3>
           <p className='animate-bounce'>
            Happy Birthday
           </p>
           <img onClick={()=>{
                navigate('/second')
           }} 
           src="../messageBox.jpg" 
           alt="GiftBox" className=' h-40 animate-pulse cursor-pointer   transition-transform duration-700 ease-in-out hover:rotate-50  ' />

        </div>
      )}


      <div className="absolute -top-10 -right-10 -z-10 w-3xs cursor-pointer">
        <img
          src="https://i.pinimg.com/736x/05/60/a9/0560a9a9b86a804a41e32dc786475ccd.jpg"
          className="h-60 w-auto animate-[spin_10s_linear_infinite]  cursor-pointer"
        />
      </div>
    </div>
  );
};

export default FirstPage;
