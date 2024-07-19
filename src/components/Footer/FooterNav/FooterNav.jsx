import { Link } from "react-router-dom";

export default function FooterNav() {
  return (
    <div className="flex gap-2.5">
      <Link to="/anime">Anime</Link>
      <Link to="/manga">Manga</Link>
    </div>
  );
}
