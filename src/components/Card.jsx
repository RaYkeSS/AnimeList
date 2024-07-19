import { Link } from "react-router-dom";

export default function Card({ itemData }) {
  // const image = require("../data/" + itemData.anime_id + ".jpg");
  // const { loaderData } = useLoaderData();
  return (
    <li className="p-2.5 shadow-my rounded lg:basis-my basis-2/4 flex flex-col justify-end">
      <Link className="flex flex-col justify-end w-full h-full" to={"/anime/" + itemData.anime_id}>
        <img
          className="mb-auto self-center"
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
