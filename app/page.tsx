import Image from "next/image";
import MovieComponent from "@/components/MovieComponent";
import HeroSection from "@/components/HeroSection";
import React from "react";
const App = () => {
  return (
    <div className="w-full p-28">
      {/* <Image className="logo" src="" alt="" /> */}
      <HeroSection />
      <MovieComponent
        title="Test"
        genres={"test"}
        movieImage="/assets/images/hero-1.jpg"
      />
    </div>
  );
};

export default App;
