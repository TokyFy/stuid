'use client';

import { useState, useEffect } from 'react';
import {
  FaHome,
  FaSearch,
  FaBook,
  FaPlay,
  FaStepForward,
  FaStepBackward,
  FaHeart,
  FaVolumeUp,
  FaUserCircle,
  FaBars,
} from 'react-icons/fa';

export default function Home() {
  const [navVisible, setNavVisible] = useState(true);
  const [songEnded, setSongEnded] = useState(false);
  const [mood, setMood] = useState("happu");
  const [isSinging, setIsSinging] = useState(false);

  useEffect(() => {
    if (isSinging) {
     console.log("dsad");
    }
    return () => clearTimeout(10);
  }, [isSinging]);

  return (
    <main className="bg-black text-white w-[390px] h-[844px] mx-auto flex flex-col justify-between relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <button onClick={() => setNavVisible(!navVisible)}>
          <FaBars size={24} />
        </button>
        <FaUserCircle size={28} />
      </div>

      {/* Mood Section */}
      <div className="text-center p-6">
        {!isSinging ? (
          <>
            <p className="text-red-400 text-lg font-semibold mb-3">Spotify n’est pas d’humeur.</p>
            <p className="text-zinc-300 mb-4">"J’en peux plus... J’ai besoin qu’on me chante une chanson."</p>
            <p className="mb-2 text-sm text-zinc-400">Aujourd’hui, il veut entendre :</p>
            <div className="bg-white/10 p-4 rounded-lg shadow-inner mb-4">
              <p className="text-lg font-semibold mb-1">🎵 "Fix You" — Coldplay</p>
              <p className="text-sm text-gray-300">Parce que même un téléphone peut avoir besoin d’être réparé...</p>
            </div>
            <button
              onClick={() => setIsSinging(true)}
              className="bg-pink-600 px-6 py-2 rounded-full font-bold text-white hover:bg-pink-700 transition"
            >
              Je vais te la chanter 💕
            </button>
          </>
        ) : !songEnded ? (
          <>
            <p className="text-green-400 text-lg font-semibold mb-2">🎤 Tu chantes...</p>
            <p className="text-gray-300 text-sm">Le téléphone écoute attentivement 🎶</p>
          </>
        ) : mood === 'happy' ? (
          <h2 className="text-green-400 text-xl font-semibold">Merci... Je me sens un peu mieux.</h2>
        ) : (
          <h2 className="text-red-400 text-xl font-semibold">Mouais... t'aurais pu faire mieux.</h2>
        )}
      </div>

      {/* Player controls */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="flex items-center justify-center gap-4">
          <FaStepBackward size={20} />
          <div className="bg-white text-black p-2 rounded-full">
            <FaPlay size={24} />
          </div>
          <FaStepForward size={20} />
        </div>
        <div className="w-3/4 h-1 bg-gray-600 rounded-full mt-2">
          <div className="w-2/5 h-full bg-green-400 rounded-full"></div>
        </div>
      </div>

      {/* Navigation */}
      {navVisible && (
        <nav className="flex justify-around items-center bg-black p-4 border-t border-gray-800">
          <div className="flex flex-col items-center text-sm">
            <FaHome size={20} />
            <span>Accueil</span>
          </div>
          <div className="flex flex-col items-center text-sm">
            <FaSearch size={20} />
            <span>Rechercher</span>
          </div>
          <div className="flex flex-col items-center text-sm">
            <FaBook size={20} />
            <span>Bibliothèque</span>
          </div>
        </nav>
      )}
    </main>
  );
}



// import React from 'react';
// import {
//   FaHome,
//   FaSearch,
//   FaBook,
//   FaPlay,
//   FaStepForward,
//   FaStepBackward,
//   FaHeart,
//   FaVolumeUp,
//   FaUserCircle,
// } from 'react-icons/fa';

// export default function Home() {
//   return (
//     <main className="flex h-screen bg-black text-white font-sans">
//       {/* Sidebar */}
//       <aside className="w-60 bg-gray-900 p-4 flex flex-col gap-6">
//         <div className="text-green-500 text-2xl font-bold">Spotify</div>

//         <nav className="flex flex-col gap-4 text-gray-300">
//           <a className="flex items-center gap-3 hover:text-white cursor-pointer">
//             <FaHome /> <span>Accueil</span>
//           </a>
//           <a className="flex items-center gap-3 hover:text-white cursor-pointer">
//             <FaSearch /> <span>Rechercher</span>
//           </a>
//           <a className="flex items-center gap-3 hover:text-white cursor-pointer">
//             <FaBook /> <span>Bibliothèque</span>
//           </a>
//         </nav>

//         <div className="border-t border-gray-700 pt-4 flex-1 overflow-auto">
//           <div className="text-gray-400 text-sm font-bold mb-2">Playlists</div>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li className="hover:text-white cursor-pointer">🎵 Mes Mix</li>
//             <li className="hover:text-white cursor-pointer">🔥 Découvertes</li>
//             <li className="hover:text-white cursor-pointer">🎧 Travail</li>
//             <li className="hover:text-white cursor-pointer">🌙 Chill</li>
//           </ul>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <section className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black to-gray-900 sticky top-0 z-10">
//           <div className="flex gap-2">
//             <button className="bg-black/30 p-2 rounded-full">&larr;</button>
//             <button className="bg-black/30 p-2 rounded-full">&rarr;</button>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="bg-white/10 text-white px-4 py-1 rounded-full text-sm cursor-pointer hover:bg-white/20">
//               Explorer Premium
//             </div>
//             <FaUserCircle className="text-2xl text-white" />
//           </div>
//         </header>

//         {/* Mood Message Instead of Song List */}
//         <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center bg-gradient-to-b from-gray-900 to-black">
//           <p className="text-xl font-bold mb-4 text-red-400">Spotify n’est pas d’humeur.</p>
//           <p className="mb-6 text-zinc-300 max-w-md">
//             "J’en peux plus... On me fait tout faire. J’ai besoin qu’on prenne soin de moi pour une fois."
//           </p>
//           <p className="mb-2 text-sm text-zinc-400">Aujourd’hui, il veut entendre :</p>

//           <div className="bg-white/5 hover:bg-white/10 p-6 rounded-lg shadow-inner w-full max-w-sm">
//             <p className="text-lg font-semibold mb-2">🎵 "Fix You" — Coldplay</p>
//             <p className="text-sm text-gray-300">
//               Parce que même un téléphone peut avoir besoin d’être réparé...
//             </p>
//           </div>

//           <button className="mt-6 bg-pink-600 px-6 py-2 rounded-full font-bold text-white hover:bg-pink-700 transition">
//             Je vais te la chanter 💕
//           </button>
//         </div>

//         {/* Player Bar */}
//         <footer className="h-24 bg-gray-800 px-6 py-2 flex items-center justify-between text-sm border-t border-gray-700">
//           {/* Left: Song Info */}
//           <div className="flex items-center gap-4 w-1/3">
//             <div className="w-12 h-12 bg-gray-600 rounded"></div>
//             <div>
//               <div className="font-semibold">Fix You</div>
//               <div className="text-gray-400 text-xs">Coldplay</div>
//             </div>
//             <FaHeart className="text-gray-400 hover:text-white cursor-pointer" />
//           </div>

//           {/* Center: Controls */}
//           <div className="flex flex-col items-center gap-2 w-1/3">
//             <div className="flex gap-4 items-center">
//               <FaStepBackward className="cursor-pointer" />
//               <div className="bg-white text-black p-2 rounded-full">
//                 <FaPlay />
//               </div>
//               <FaStepForward className="cursor-pointer" />
//             </div>
//             <div className="w-full h-1 bg-gray-600 rounded overflow-hidden">
//               <div className="w-1/3 h-full bg-white"></div>
//             </div>
//           </div>

//           {/* Right: Volume */}
//           <div className="flex items-center gap-2 w-1/3 justify-end">
//             <FaVolumeUp />
//             <div className="w-24 h-1 bg-gray-600 rounded overflow-hidden">
//               <div className="w-2/3 h-full bg-white"></div>
//             </div>
//           </div>
//         </footer>
//       </section>
//     </main>
//   );
// }



// import React from 'react';
// import { FaHome, FaSearch, FaBook, FaPlay, FaStepForward, FaStepBackward, FaHeart, FaVolumeUp, FaUserCircle } from 'react-icons/fa';

// export default function Home() {
//   return (
//     <main className="flex h-screen bg-black text-white font-sans">
//       {/* Sidebar */}
//       <aside className="w-60 bg-gray-900 p-4 flex flex-col gap-6">
//         <div className="text-green-500 text-2xl font-bold">Spotify</div>

//         <nav className="flex flex-col gap-4 text-gray-300">
//           <a className="flex items-center gap-3 hover:text-white cursor-pointer">
//             <FaHome /> <span>Accueil</span>
//           </a>
//           <a className="flex items-center gap-3 hover:text-white cursor-pointer">
//             <FaSearch /> <span>Rechercher</span>
//           </a>
//           <a className="flex items-center gap-3 hover:text-white cursor-pointer">
//             <FaBook /> <span>Bibliothèque</span>
//           </a>
//         </nav>

//         <div className="border-t border-gray-700 pt-4 flex-1 overflow-auto">
//           <div className="text-gray-400 text-sm font-bold mb-2">Playlists</div>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li className="hover:text-white cursor-pointer">🎵 Mes Mix</li>
//             <li className="hover:text-white cursor-pointer">🔥 Découvertes</li>
//             <li className="hover:text-white cursor-pointer">🎧 Travail</li>
//             <li className="hover:text-white cursor-pointer">🌙 Chill</li>
//           </ul>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <section className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black to-gray-900 sticky top-0 z-10">
//           <div className="flex gap-2">
//             <button className="bg-black/30 p-2 rounded-full">&larr;</button>
//             <button className="bg-black/30 p-2 rounded-full">&rarr;</button>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="bg-white/10 text-white px-4 py-1 rounded-full text-sm cursor-pointer hover:bg-white/20">Explorer Premium</div>
//             <FaUserCircle className="text-2xl text-white" />
//           </div>
//         </header>

//         {/* Content Area */}
//         <div className="flex-1 overflow-y-auto px-6 py-4 bg-gradient-to-b from-gray-900 to-black">
//           <h2 className="text-xl font-bold mb-4">Récemment joué</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {[...Array(5)].map((_, i) => (
//               <div key={i} className="bg-white/5 hover:bg-white/10 p-4 rounded-lg">
//                 <div className="bg-gray-700 h-40 rounded mb-2"></div>
//                 <div className="font-semibold text-sm">Titre #{i + 1}</div>
//                 <div className="text-xs text-gray-400">Artiste</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Player Bar */}
//         <footer className="h-24 bg-gray-800 px-6 py-2 flex items-center justify-between text-sm border-t border-gray-700">
//           {/* Left: Song Info */}
//           <div className="flex items-center gap-4 w-1/3">
//             <div className="w-12 h-12 bg-gray-600 rounded"></div>
//             <div>
//               <div className="font-semibold">Titre</div>
//               <div className="text-gray-400 text-xs">Artiste</div>
//             </div>
//             <FaHeart className="text-gray-400 hover:text-white cursor-pointer" />
//           </div>

//           {/* Center: Controls */}
//           <div className="flex flex-col items-center gap-2 w-1/3">
//             <div className="flex gap-4 items-center">
//               <FaStepBackward className="cursor-pointer" />
//               <div className="bg-white text-black p-2 rounded-full">
//                 <FaPlay />
//               </div>
//               <FaStepForward className="cursor-pointer" />
//             </div>
//             <div className="w-full h-1 bg-gray-600 rounded overflow-hidden">
//               <div className="w-1/3 h-full bg-white"></div>
//             </div>
//           </div>

//           {/* Right: Volume */}
//           <div className="flex items-center gap-2 w-1/3 justify-end">
//             <FaVolumeUp />
//             <div className="w-24 h-1 bg-gray-600 rounded overflow-hidden">
//               <div className="w-2/3 h-full bg-white"></div>
//             </div>
//           </div>
//         </footer>
//       </section>
//     </main>
//   );
// }

// import React from 'react';
// import { FaHome, FaSearch, FaBook, FaPlay, FaStepForward, FaStepBackward, FaHeart, FaVolumeUp, FaUserCircle } from 'react-icons/fa';

// export default function Home() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-neutral-900">
//       <main className="w-[390px] h-[844px] bg-black text-white font-sans flex flex-col overflow-hidden rounded-xl shadow-2xl">
//         <div className="flex flex-1">
//           {/* Sidebar */}
//           <aside className="w-24 bg-gray-900 p-3 flex flex-col gap-6">
//             <div className="text-green-500 text-xl font-bold">S</div>

//             <nav className="flex flex-col gap-4 text-gray-300 text-sm">
//               <a className="flex flex-col items-center gap-1 hover:text-white cursor-pointer">
//                 <FaHome className="text-lg" />
//                 <span>Accueil</span>
//               </a>
//               <a className="flex flex-col items-center gap-1 hover:text-white cursor-pointer">
//                 <FaSearch className="text-lg" />
//                 <span>Recherche</span>
//               </a>
//               <a className="flex flex-col items-center gap-1 hover:text-white cursor-pointer">
//                 <FaBook className="text-lg" />
//                 <span>Bibli</span>
//               </a>
//             </nav>
//           </aside>

//           {/* Main Content */}
//           <section className="flex-1 flex flex-col">
//             {/* Navbar */}
//             <header className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black to-gray-900 sticky top-0 z-10">
//               <div className="flex gap-2">
//                 <button className="bg-black/30 p-2 rounded-full text-xs">&larr;</button>
//                 <button className="bg-black/30 p-2 rounded-full text-xs">&rarr;</button>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="bg-white/10 text-white px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-white/20">Premium</div>
//                 <FaUserCircle className="text-xl text-white" />
//               </div>
//             </header>

//             {/* Content Area */}
//             <div className="flex-1 overflow-y-auto px-4 py-3 bg-gradient-to-b from-gray-900 to-black">
//               <h2 className="text-lg font-bold mb-3">Récemment joué</h2>
//               <div className="grid grid-cols-2 gap-3">
//                 {[...Array(6)].map((_, i) => (
//                   <div key={i} className="bg-white/5 hover:bg-white/10 p-3 rounded-lg">
//                     <div className="bg-gray-700 h-28 rounded mb-2"></div>
//                     <div className="font-semibold text-xs">Titre #{i + 1}</div>
//                     <div className="text-[10px] text-gray-400">Artiste</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Player Bar */}
//             <footer className="h-20 bg-gray-800 px-4 py-2 flex items-center justify-between text-xs border-t border-gray-700">
//               {/* Left: Song Info */}
//               <div className="flex items-center gap-3 w-1/3">
//                 <div className="w-10 h-10 bg-gray-600 rounded"></div>
//                 <div>
//                   <div className="font-semibold text-xs">Titre</div>
//                   <div className="text-gray-400 text-[10px]">Artiste</div>
//                 </div>
//                 <FaHeart className="text-gray-400 hover:text-white cursor-pointer text-sm" />
//               </div>

//               {/* Center: Controls */}
//               <div className="flex flex-col items-center gap-1 w-1/3">
//                 <div className="flex gap-3 items-center">
//                   <FaStepBackward className="cursor-pointer text-sm" />
//                   <div className="bg-white text-black p-2 rounded-full text-sm">
//                     <FaPlay />
//                   </div>
//                   <FaStepForward className="cursor-pointer text-sm" />
//                 </div>
//                 <div className="w-full h-1 bg-gray-600 rounded overflow-hidden">
//                   <div className="w-1/3 h-full bg-white"></div>
//                 </div>
//               </div>

//               {/* Right: Volume */}
//               <div className="flex items-center gap-2 w-1/3 justify-end">
//                 <FaVolumeUp className="text-sm" />
//                 <div className="w-16 h-1 bg-gray-600 rounded overflow-hidden">
//                   <div className="w-2/3 h-full bg-white"></div>
//                 </div>
//               </div>
//             </footer>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }
