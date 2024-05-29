import Image from "next/image";
import PopChoiceIcon from "@/assets/images/PopChoiceIcon.svg";

const Header = () => {
  return (
    <div className="mb-9">
      <Image className="mx-auto" src={PopChoiceIcon} alt="" />
      <h1 className="carter-one-regular text-center">PopChoice</h1>
    </div>
  );
};
export default Header;
