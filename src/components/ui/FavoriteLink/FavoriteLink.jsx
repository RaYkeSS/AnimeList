import { NavLink } from "react-router-dom";
import { ReactComponent as FavoriteImg } from "./img/favorite.svg";

export default function FavoriteButton() {
  const styles = {
    default: "p-0.5 rounded text-lightBg dark:text-white",
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
    </NavLink>
  );
}
