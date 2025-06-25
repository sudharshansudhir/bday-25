import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const S2 = () => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  return (
    <div className="flex flex-col justify-center items-center text-center p-10 bg-zinc-900 bg-cover bg-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">🎁 Surprise 2</h1>

      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <button
          onClick={handlePlay}
          className="bg-green-600 px-6 py-3 rounded-lg text-white hover:bg-green-700 transition"
        >
          🔊 Play Audio
        </button>

        <Link
          to="/"
          className="bg-green-600 px-6 py-3 rounded-lg text-white hover:bg-green-700 transition"
        >
          Go Back
        </Link>
        <Link
                  to="/s3"
                  className="bg-purple-600 px-6 py-3 rounded-lg text-white hover:bg-purple-700 transition"
                >
                  Surprise 3
                </Link>
      </div>

      <audio ref={audioRef} src="/appa_audio.mp3" />

      <h4 className="mt-10 md:text-3xl text-[20px]">
        WEAR HEADPHONES FOR BETTER EXPERIENCE
      </h4>
    </div>
  );
};

export default S2;