import Search from "./Search/Search";
import Auth from "./Auth/Auth";
import MenuDropdown from "./MenuDropdown/MenuDropdown";

import logo from "./img/logo.png";

export default function Header() {
  const styles = {
    header: "p-5 mb-3 flex gap-5 shadow-my rounded items-center justify-center",
    logo: "max-w-9",
  };
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <MenuDropdown />
      <Search />
      <Auth />
    </header>
  );
}
