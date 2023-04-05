import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

const Card = ({ result }) => {
  return (
    <div className="cursor-pointer p-3 hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 group m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={600}
          height={300}
          alt={`Movie poster for "${result.title}"`}
          className="sm:rounded-t-lg group-hover:opacity-80 transition duration-200"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="p-2">
          <p>{result.overview.substring(0, 45)}...</p>
          <h2 className="text-lg font-bold">{result.title || result.name}</h2>
          <p className="flex items-center">
            {result.first_air_date || result.release_date}
            <AiFillHeart className="text-red-500 ml-3 mr-1" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
