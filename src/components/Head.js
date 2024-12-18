import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API, IMAGES } from "../utils/constants";
import { cacheResults } from "../utils/searchDataSlice";
// import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchDataCache = useSelector((store) => store.search);
  // console.log(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchDataCache[searchQuery]) {
        setShowSuggestions(searchDataCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API CALL- " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // setSearchQuery(json);
    // console.log(json[1]);
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col  shadow-lg m-2 p-5 ">
      <div className="flex col-span-2">
        <img
          onClick={() => toggleMenuHandler()}
          className=" h-8 mr-4 cursor-pointer"
          alt="Menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img className=" h-8 " alt="Logo" src={IMAGES.LOGO_LIGHT} />
        </a>
      </div>
      <div className="col-span-9 ml-40">
        <div>
          <input
            className="border border-black rounded-l-full px-4 h-8 w-1/2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <button className="border border-black rounded-r-full px-2 h-8 ml-1 bg-gray-300">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-4 rounded-xl w-[415px] shadow-lg border border-r-gray-200">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="p-1  hover:bg-slate-200 rounded-sm">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 ">
        <img
          className=" h-8 "
          alt="User_icon"
          src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
        />
      </div>
    </div>
  );
};

export default Head;
