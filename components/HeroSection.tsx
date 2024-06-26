import Image from "next/image";
import FormComponent from "./FormComponent";

const HeroSection = () => {
  return (
    <div className="pt-24 pb-20 px-7 relative  bg-gradient-to-r from-blue-500 to-cyan-500  	">
      <Image
        src="/assets/images/hero-1.jpg"
        className="mix-blend-overlay object-cover"
        fill={true}
        alt=""
      />
      <h1 className="mb-10">
        <span className="text-4xl	 font-extrabold block ">
          Welcome to PopChoice,
        </span>
        <span className="text-xl font-bold 		">
          Now no need to browse Netflix for hours to find something to watch
        </span>
      </h1>
      <FormComponent />
    </div>
  );
};
export default HeroSection;
