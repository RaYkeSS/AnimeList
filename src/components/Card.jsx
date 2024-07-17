import { Link } from "react-router-dom";

export default function Card({ itemData }) {
  // const image = require("../data/" + itemData.anime_id + ".jpg");
  // const { loaderData } = useLoaderData();
  return (
    <li className="p-2.5 shadow-my rounded basis-my flex flex-col grow-0 justify-end min-h-96">
      <Link to={"/title/" + itemData.anime_id}>
        <img
          className="mb-auto w-11/12 self-center"
          src={itemData.image_url}
          alt={itemData.title}
        />
        <h2>{itemData.title}</h2>
        <div>{itemData.type}</div>
        <div>{itemData.score}</div>
      </Link>
    </li>
  );
}
