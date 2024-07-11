import Search from "./ui/Search";

export default function Header() {
  return (
    <header className="p-5 mb-3 flex gap-5 shadow-my rounded">
      <img src="" alt="logo" />
      <nav>
        <div></div>
        <div>
          <a href="#">Anime</a>
          <a href="#">Manga</a>
        </div>
      </nav>
      <Search />
    </header>
  );
}
