import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as FavoriteImg } from "./img/favorite.svg";

export default function FavoriteButton() {
  const [favoriteCounter, setFavoriteCounter] = useState(null)
  const data = useSelector(state => state.favorite.favList.length)
  useEffect(() => {
    setFavoriteCounter(data)
  }, [favoriteCounter, data])
  const styles = {
    default: "p-0.5 rounded text-lightBg dark:text-white relative",
    notActive: "bg-lightPrimary text-lightBg dark:bg-scndBg/90 dark:text-white",
    active: "bg-lightAccent dark:bg-primaryBg/90 rounded",
  };
  return (
    <NavLink
      to={"/favorite"}
      className={({ isActive }) =>
        isActive
          ? styles.default + " " + styles.active
          : styles.default + " " + styles.notActive
      }
    >
      <FavoriteImg />
      {favoriteCounter !== 0 ? <span className="absolute -top-2 -right-2 rounded-lg bg-lightAccent leading-none px-1">{favoriteCounter}</span> : <></>}
    </NavLink>
  );
}
