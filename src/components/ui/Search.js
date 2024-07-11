import { useState } from "react";
import { ReactComponent as SearchIcon } from "./Search.svg";

import data from "../../data/animeList.json";

export default function Search() {
  const [filtered, setFiltered] = useState(<></>);
  const [showFiltered, setShowFiltered] = useState("hidden");
  function filteredSearch(event) {
    const word = event.target.value;
    const regex = new RegExp(word, "gi");
    const fil = data.filter((el) => el.some((title) => title.includes(word)));
    setFiltered(
      fil.map((el) => {
        return (
          <li className="text-inherit p-2.5 shadow-my rounded bg-[rgba(18,_26,_37,_0.9)] flex gap-5 items-center">
            <img src={el.image_url} className="w-16" alt={el.title} />
            <div className="flex flex-col">
              <h2 className="text-inherit">{el.title}</h2>
              <div>{el.type}</div>
              <div>{el.score}</div>
            </div>
          </li>
        );
      })
    );
    setShowFiltered("block");
  }
  return (
    <div className="flex-1 relative">
      <label className="pl-7 text-white stroke-gray-300">
        <input
          className="bg-transparent placeholder-gray-300 outline-none text-inherit"
          placeholder="Search..."
          type="text"
          onChange={filteredSearch}
        ></input>
        <span className="absolute left-0 stroke-inherit">
          <SearchIcon />
        </span>
      </label>
      <ul
        className={[
          showFiltered,
          "text-red-400",
          "absolute",
          "top-11",
          "w-full",
        ].join(" ")}
      >
        {filtered}
      </ul>
    </div>
  );
}
