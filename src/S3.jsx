import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const S3 = () => {
  const videoRef = useRef(null)

  const handlePlay = () => {
    videoRef.current.play()
  }

  return (
    <div className="text-center p-10 bg-zinc-900 min-h-screen text-white flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold mb-6">🎥 Surprise 3</h1>

      <button
        onClick={handlePlay}
        className="bg-purple-600 px-6 py-3 rounded-lg text-white hover:bg-purple-700 transition"
      >
        ▶️ Play Video
      </button>

      <video
        ref={videoRef}
        src="/sri_g.mp4"
        className="rounded-lg w-full max-w-md"
        controls
      />

      <h4 className="mt-4 md:text-2xl text-lg">WEAR HEADPHONES FOR BETTER EXPERIENCE</h4>

      <Link
        className="mt-6 bg-purple-600 px-6 py-3 rounded-lg text-white hover:bg-purple-700 transition"
        to="/"
      >
        ⬅️ Go Back
      </Link>
      <Link
                to="/s4"
                className="bg-red-600 px-6 py-3 rounded-lg text-white hover:bg-red-700 transition"
              >
                Surprise 4
              </Link>
    </div>
  )
}

export default S3
