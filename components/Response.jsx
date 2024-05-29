import Button from "./Button";

/* eslint-disable react/prop-types */
const Response = ({ aiResponse, setAiResponse }) => {
  const { movie, chat } = aiResponse;

  return (
    <div className="w-80  mx-auto">
      <h2 className="roboto-slab-bold text-3xl mb-5">
        {movie.title} ({movie.releaseYear})
      </h2>
      <p className="roboto-slab-regular mb-6">{chat}</p>
      <Button handleClick={() => setAiResponse({})} text="Go Again" />
    </div>
  );
};
export default Response;
