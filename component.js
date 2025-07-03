// <stdin>
import React, { useState, useRef, useEffect } from "https://esm.sh/react@18.2.0";
var AtlantisDiscovery = () => {
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
  return /* @__PURE__ */ React.createElement("div", { className: "relative w-full h-full bg-black overflow-hidden min-h-[600px]" }, /* @__PURE__ */ React.createElement(
    "video",
    {
      ref: videoRef,
      className: "absolute inset-0 w-full h-full object-cover",
      src: "assets/2epO2rLITmZD_7gnRBM1p.mp4",
      loop: true,
      muted: true,
      autoPlay: isPlaying
    }
  ), showOverlay && /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-blue-800/40" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-8 left-8 text-white" }, /* @__PURE__ */ React.createElement("h1", { className: "text-4xl font-bold mb-2 text-cyan-100 drop-shadow-lg" }, "\u{1F30A} Atlantis Discovery"), /* @__PURE__ */ React.createElement("p", { className: "text-lg text-cyan-200 drop-shadow-md max-w-md" }, "Dive deep into the mysterious underwater realm and witness the legendary lost city come to life.")), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-8 left-8 right-8" }, /* @__PURE__ */ React.createElement("div", { className: "bg-black/60 backdrop-blur-sm rounded-lg p-6 text-white" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-semibold mb-3 text-cyan-300" }, "\u{1F3DB}\uFE0F Ancient Mysteries Unveiled"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-cyan-400" }, "\u{1F3FA}"), /* @__PURE__ */ React.createElement("span", null, "Ancient Artifacts")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-cyan-400" }, "\u{1F420}"), /* @__PURE__ */ React.createElement("span", null, "Marine Life")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-cyan-400" }, "\u{1F48E}"), /* @__PURE__ */ React.createElement("span", null, "Crystal Formations")))))), /* @__PURE__ */ React.createElement("div", { className: "absolute top-4 right-4 flex space-x-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: togglePlay,
      className: "bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm",
      title: isPlaying ? "Pause" : "Play"
    },
    isPlaying ? /* @__PURE__ */ React.createElement("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20" }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z", clipRule: "evenodd" })) : /* @__PURE__ */ React.createElement("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20" }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z", clipRule: "evenodd" }))
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggleOverlay,
      className: "bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm",
      title: showOverlay ? "Hide Info" : "Show Info"
    },
    /* @__PURE__ */ React.createElement("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20" }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }))
  )), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 pointer-events-none" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse" }), /* @__PURE__ */ React.createElement("div", { className: "absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300 rounded-full opacity-40 animate-pulse delay-500" }), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-50 animate-pulse delay-1000" })));
};
var stdin_default = AtlantisDiscovery;
export {
  stdin_default as default
};
