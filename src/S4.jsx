import React from 'react'
import { Link } from 'react-router-dom';

const S4 = () => {
    const [stopScroll, setStopScroll] = React.useState(false);
    const cardData = [
  { title: "Happy Bday Ammu", image: "/IMG_20240626_000628.jpg" },
  { title: "Happy Bday Ammu", image: "/IMG_20241124_013729_422.jpg" },
  { title: "Happy Bday Ammu", image: "/IMG_20241124_013732_835.jpg" },
  { title: "Happy Bday Ammu", image: "/IMG_20241124_013734_436.jpg" },
  { title: "Happy Bday Ammu", image: "/IMG_20241124_013741_136.jpg" },
  { title: "Happy Bday Ammu", image: "/IMG_20241124_013744_583.jpg" },
  { title: "Happy Bday Ammu", image: "/IMG_20241124_013750_267.jpg" },
  { title: "Happy Bday Ammu", image: "/IMG-20240912-WA0022.jpg" },
  { title: "Happy Bday Ammu", image: "/IMG-20240912-WA0023.jpg" },
  { title: "Happy Bday Ammu", image: "/IMG-20250118-WA0038.jpg" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122153.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122206.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122214.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122222.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122237.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122246.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122302.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122321.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122446.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122706.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122715.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122747.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122821.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 122946.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123006.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123021.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123038.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123044.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123103.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123143.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123205.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123219.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123224.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123237.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123248.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123313.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123320.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123328.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123334.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123346.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123431.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123518.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123531.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123539.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123602.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123628.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123656.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123813.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123834.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123846.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123907.png" },
  { title: "Happy Bday Ammu", image: "/Screenshot 2025-05-01 123928.png" },
];


    return (
        <div className=' bg-zinc-900'>
            <div className='text-center mb-10 pt-10 md:pt-30 text-white md:text-3xl text-[20px]'>
                <h2>Happiest Birthday Ammu🥳💎🎀</h2>
            </div>
            <div className='ml-30 md:mx-150'>
            <Link
        className="md:m-10 bg-green-600 px-6 py-3 rounded-lg text-white hover:bg-green-700 transition" to="/"
      >
        Go Back
      </Link></div>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div className="overflow-hidden flex justify-center items-center min-h-screen  w-full relative max-w-6xl mx-auto" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none " />
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 2500 + "ms" }}>
                    <div className="flex">
                        {[...cardData, ...cardData].map((card, index) => (
                            <div key={index} className="w-56 mx-4 h-[20rem] relative group hover:scale-110  duration-300">
                                <img src={card.image} alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0   duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                                    {/* <p className="text-white text-lg font-semibold text-center">{card.title}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none " />
            </div>
        </div>
    );
};

export default S4