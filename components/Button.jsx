const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="w-full rounded-xl py-5 text-3xl roboto-slab-bold bg-greenButton text-black"
    >
      {text}
    </button>
  );
};
export default Button;
