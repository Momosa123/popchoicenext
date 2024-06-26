const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="w-full rounded-xl py-5 text-3xl roboto-slab-bold text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
    >
      {text}
    </button>
  );
};
export default Button;
