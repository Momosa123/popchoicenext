import Image from "next/image";
import React from "react";
type MovieComponentProps = {
  movieImage: string;
  title: string;
  genres: string;
};
const MovieComponent = ({ movieImage, title, genres }: MovieComponentProps) => {
  return (
    <div>
      <Image src={movieImage} width={100} height={100} alt="" />
      <p className="title">{title}</p>
      <p>{genres}</p>
    </div>
  );
};
export default MovieComponent;
