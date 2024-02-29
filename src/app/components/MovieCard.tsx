interface MovieCardProps {
  title: string;
  overview: string;
  poster_path: string;
}

const MovieCard = ({ title, overview, poster_path }: MovieCardProps) => {
  const imageURL = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : "/images/Image_not_available.png";

  return (
    <div className="bg-white shadow rounded-lg p-6 flex flex-col">
      <div className="flex-shrink-0">
        <img className="w-full h-full" src={imageURL} alt={title} />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-indigo-600">{title}</p>
        <p className="mt-3 text-base text-gray-500">
          {overview.substring(0, 150)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
