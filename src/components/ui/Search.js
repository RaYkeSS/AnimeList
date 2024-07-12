import { useState } from "react";
import { ReactComponent as SearchIcon } from "./Search.svg";

import data from "../../data/animeList.json";

export default function Search() {
  const [filtered, setFiltered] = useState(<></>);
  const [showMore, setShowMore] = useState(<></>);
  const [showFiltered, setShowFiltered] = useState("hidden");
  function filteredSearch(event) {
    setTimeout(() => {
      const wordToSearch = event.target.value;
      const regex = new RegExp(wordToSearch, "gi");
      if (!wordToSearch) {
        setShowFiltered("hidden");
        return;
      }
      const fil = data.filter((el) => {
        const title = el.title.toString();
        return title.match(regex);
      });
      if (fil.length === 0) {
        setShowMore(<></>);
        setFiltered(<></>);
        setShowFiltered("hidden");
        return;
      }
      if (fil.length > 10) {
        fil.length = 10;
        setShowMore(
          <li className="text-inherit p-2.5 shadow-my rounded bg-[rgba(18,_26,_37,_0.9)] flex gap-5 items-center justify-center w-full">
            <button>ShowMore</button>
          </li>
        );
      }
      setFiltered(
        fil.map((el) => {
          return (
            <li className="text-inherit p-2.5 shadow-my rounded bg-[rgba(18,_26,_37,_0.9)] flex gap-5 items-center mb-px">
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
    }, 300);
  }
  return (
    <div className="flex-1 relative">
      <label className="pl-7 text-white stroke-gray-300 block">
        <input
          className="bg-transparent placeholder-gray-300 outline-none text-inherit w-full"
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
          "absolute",
          "top-11",
          "w-full",
          "z-10",
          "max-h-96",
          "overflow-y-scroll",
          "rounded",
          "scrollbar-hide",
          "border-2",
          "border-[rgba(18,_26,_37,_1)]",
          "bg-[rgba(18,_26,_37,_1)]",
        ].join(" ")}
      >
        {filtered}
        {showMore}
      </ul>
    </div>
  );
}
