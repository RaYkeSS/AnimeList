import { useEffect, useState } from "react";

import { DATA_ROOT } from "../../../utils";

export default function AsideFilter() {
  const [filters, setFilters] = useState(null);
  const filteredName = [
    "type",
    "source",
    "episodes",
    "status",
    "rating",
    "score",
    "rank",
    "popularity",
    "genre",
  ];
  useEffect(() => {
    function gatherFilters() {
      const result = new Map();
      DATA_ROOT.map((el) => {
        filteredName.map((filEl) => {
          result.set(filEl, Array.push(el[filEl]));
        });
      });
      console.log(result);
      return result;
    }
    setFilters(gatherFilters());
  }, []);
  return (
    <>
      <div className="min-w-52 p-2.5 shadow-my rounded">AsideFilter</div>
      <div>
        {/* {filters &&
          filters.map((el) => {
            return <li>{el}</li>;
          })} */}
      </div>
    </>
  );
}

// const {

//   type,
//   source,
//   episodes,
//   status,
//   airing,
//   aired_string,
//   aired,
//   duration,
//   rating,
//   score,
//   scored_by,
//   rank,
//   popularity,
//   favorites,
//   background,
//   premiered,
//   broadcast,
//   related,
//   producer,
//   licensor,
//   studio,
//   genre,
// } = elem;
