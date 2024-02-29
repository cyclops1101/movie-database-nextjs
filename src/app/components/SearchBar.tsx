import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-screen max-w-3x1 mb-20"
    >
      <input
        type="text"
        className="text-black border border-gray-300 rounded-1 py-4 px-2 w-full focus:ouline-none focus:border-blue-500 mx-5"
        placeholder="Search for a movie"
        value={query}
        onChange={handleSearch}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4
      rounded-full ml-4"
      >
        Submit
      </button>
    </form>
  );
};

export default SearchBar;
