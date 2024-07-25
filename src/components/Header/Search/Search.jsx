import { useState } from "react";
import { ReactComponent as SearchIcon } from "./Search.svg";
import { Link } from "react-router-dom";

import { DATA_ROOT } from "../../../utils";

export default function Search() {
  const styles = {
    divWrapper: "flex-1 relative text-lightBg dark:text-white",
    label:
      "pl-8 py-1 stroke-gray-300 block rounded-xl bg-lightPrimary dark:bg-scndBg/90",
    input: "bg-transparent placeholder-lightBg outline-none w-full",
    span: "absolute left-1 stroke-white",
    ulList:
      "absolute top-11 w-full z-10 max-h-96 overflow-y-scroll rounded scrollbar-hide bg-lightPrimary dark:bg-scndBg/90",
    li: "text-inherit p-2.5 shadow-my rounded bg-lightPrimary dark:bg-scndBg/90",
    link: "flex gap-5 items-center mb-px",
    liShowMore:
      "text-inherit p-2.5 shadow-my rounded bg-lightPrimary dark:bg-scndBg/90 flex gap-5 items-center justify-center w-full",
    img: "w-16",
    liWrapper: "flex flex-col",
    h2: "text-inherit",
  };
  const [filtered, setFiltered] = useState(<></>);
  const [showMore, setShowMore] = useState(<></>);
  const [showFiltered, setShowFiltered] = useState("hidden");
  const [inputValue, setInputValue] = useState("");
  function filteredSearch(event) {
    setInputValue(event.target.value);
    setTimeout(() => {
      const wordToSearch = inputValue;
      const regex = new RegExp(wordToSearch, "gi");
      if (!wordToSearch) {
        setShowFiltered("hidden");
        return;
      }
      const fil = DATA_ROOT.filter((el) => {
        const title = el.title.toString();
        return title.match(regex);
      });
      if (fil.length === 0) {
        setShowMore(<></>);
        setFiltered(<>No results</>);
        // setShowFiltered("hidden");
        return;
      }
      if (fil.length > 10) {
        fil.length = 10;
        setShowMore(
          <li className={styles.liShowMore}>
            <button>ShowMore</button>
          </li>
        );
      } else {
        setShowMore(<></>);
      }
      setFiltered(
        fil.map(({ anime_id, image_url, title, type, score }) => {
          return (
            <li className={styles.li} key={anime_id}>
              <Link className={styles.link} to={"/anime/" + anime_id}>
                <img src={image_url} className={styles.img} alt={title} />
                <div className={styles.liWrapper}>
                  <h2 className={styles.h2}>{title}</h2>
                  <div>{type}</div>
                  <div>{score}</div>
                </div>
              </Link>
            </li>
          );
        })
      );
      setShowFiltered("block");
    }, 200);
  }
  function handleClearResults() {
    setFiltered(<></>);
    setShowMore(<></>);
    setInputValue("");
  }
  return (
    <div
      className={styles.divWrapper}
      onFocus={() => setShowFiltered("block")}
      onBlur={() =>
        setTimeout(() => {
          setShowFiltered("hidden");
        }, 100)
      }
    >
      <label className={styles.label}>
        <input
          className={styles.input}
          placeholder="Search..."
          type="text"
          value={inputValue}
          onChange={filteredSearch}
        ></input>
        <span className={styles.span}>
          <SearchIcon />
        </span>
      </label>
      <ul
        onClick={handleClearResults}
        className={[showFiltered, styles.ulList].join(" ")}
      >
        {filtered}
        {showMore}
      </ul>
    </div>
  );
}
