import { useState } from "react";

const Header = ({ onSearch }) => {
  const [textSearch, setTextSearch] = useState([]);

  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
          className="p-2 text-black rounded-md"
        />
        <button
          className="p-2 text-white bg-red-600 rounded-md"
          onClick={() => onSearch(textSearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
