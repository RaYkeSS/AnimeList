import React, { useState } from "react";

import data from "../data/animeList.json";
import Card from "./Card";

export default function Main() {
  const [listMax, setListMax] = useState(10);
  function spreadList() {
    return data.slice(0, listMax).map((el) => {
      return <Card itemData={el} key={el.anime_id} />;
    });
  }
  return (
    <div className="container mx-auto">
      <ul className="flex flex-wrap justify-between gap-y-7 mb-5">
        {spreadList()}
      </ul>
      <button
        onClick={() => setListMax(listMax + 10)}
        className="p-2.5 shadow-my rounded w-full"
      >
        spreadList
      </button>
    </div>
  );
}
