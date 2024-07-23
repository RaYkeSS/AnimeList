import React, { useState } from "react";

import { DATA_ROOT } from "../../utils";
import { Card } from "../../components";

import { AsideFilter } from "../../components";

export default function MainPage() {
  const styles = {
    ulList: "flex flex-wrap justify-between gap-y-7 mb-5",
    btn: "p-2.5 shadow-my rounded w-full",
  };
  const [listMax, setListMax] = useState(10);
  const [filters, setFilters] = useState(null);
  function spreadList() {
    return DATA_ROOT.slice(0, listMax).map((el) => {
      return <Card itemData={el} key={el.anime_id} />;
    });
  }
  return (
    <div className="flex gap-2.5">
      <div>
        <ul className={styles.ulList}>{spreadList()}</ul>
        <button onClick={() => setListMax(listMax + 10)} className={styles.btn}>
          spreadList
        </button>
      </div>
      <AsideFilter />
    </div>
  );
}
