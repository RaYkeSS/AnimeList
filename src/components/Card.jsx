export default function Card({ itemData }) {
  // const image = require("../data/" + itemData.anime_id + ".jpg");
  return (
    <li className="p-2.5 shadow-my rounded basis-my flex flex-col grow-0 justify-end min-h-96">
      <img
        className="mb-auto w-11/12 self-center"
        src={itemData.image_url + 1}
        alt={itemData.title}
      />
      <h2>{itemData.title}</h2>
      <div>{itemData.type}</div>
      <div>{itemData.score}</div>
    </li>
  );
}
