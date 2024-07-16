import { Search, Auth, MenuDropdown } from "./index";

export default function Header() {
  const styles = {
    header: "p-5 mb-3 flex gap-5 shadow-my rounded items-center justify-center",
  };
  return (
    <header className={styles.header}>
      <img src="" alt="logo" />
      <MenuDropdown />
      <Search />
      <Auth />
    </header>
  );
}
