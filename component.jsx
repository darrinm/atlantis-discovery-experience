import React, { useState, useRef, useEffect } from 'react';

const AtlantisDiscovery = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="relative w-full h-full bg-black overflow-hidden min-h-[600px]">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="assets/2epO2rLITmZD_7gnRBM1p.mp4"
        loop
        muted
        autoPlay={isPlaying}
      />
      
      {/* Overlay Content */}
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-blue-800/40">
          <div className="absolute top-8 left-8 text-white">
            <h1 className="text-4xl font-bold mb-2 text-cyan-100 drop-shadow-lg">
              🌊 Atlantis Discovery
            </h1>
            <p className="text-lg text-cyan-200 drop-shadow-md max-w-md">
              Dive deep into the mysterious underwater realm and witness the legendary lost city come to life.
            </p>
          </div>
          
          {/* Bottom Info Panel */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">🏛️ Ancient Mysteries Unveiled</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">🏺</span>
                  <span>Ancient Artifacts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">🐠</span>
                  <span>Marine Life</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">💎</span>
                  <span>Crystal Formations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Control Buttons */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          onClick={togglePlay}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        
        <button
          onClick={toggleOverlay}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          title={showOverlay ? "Hide Info" : "Show Info"}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Floating Elements for Ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300 rounded-full opacity-40 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-50 animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default AtlantisDiscovery;