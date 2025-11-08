import React, { useState, useRef } from "react";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { IoPlay } from "react-icons/io5";

const VideoCarousel = () => {
  const videosApi = [
    { vdo: "/vdo1.mp4", title: "wow" },
    { vdo: "/vdo2.mp4", title: "just wow" },
    { vdo :"/vdo3.mp4",title: "amazing"},
     
  ];

  const [vol, setVol] = useState(true); 
  const [currentIndex, setCurrentIndex] = useState(0);  
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  
  const handleVol = () => {
    setVol((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

 
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

   
  const handlePrev = () => {
    if (videoRef.current) videoRef.current.pause();
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? videosApi.length - 1 : prev - 1));
  };

   
  const handleNext = () => {
    if (videoRef.current) videoRef.current.pause();
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev === videosApi.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`relative h-80 w-96 cursor-pointer overflow-hidden border-2 border-white/30 rounded-lg transition-transform duration-700 ease-in-out ${
          isPlaying ? "scale-125" : "scale-100"
        }`}
      >
        <video
          ref={videoRef}
          src={videosApi[currentIndex].vdo}
          loop
          muted={vol}
          onClick={handleVideoClick}
          playsInline
          className="object-cover w-full h-full"
        />

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button className="bg-white/70 p-2 rounded-full text-black">
              <IoPlay size={28} />
            </button>
          </div>
        )}

        <button
          onClick={handleVol}
          className="absolute top-2 right-2 z-10 cursor-pointer text-white bg-black/30 p-1 rounded-full"
        >
          {vol ? <VscMute size={24} /> : <VscUnmute size={24} />}
        </button>
      </div>

      {/* Pagination controls */}
      <div className="flex gap-4 mt-2">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-pink-700 text-white rounded hover:bg-gray-800"
        >
          purana dekhega
        </button>
        <span className="text-white font-semibold flex items-center justify-center">
          {currentIndex + 1} / {videosApi.length}
        </span>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-pink-700 text-white rounded hover:bg-gray-800"
        >
         Aur dekhega
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
