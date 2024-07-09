import data from "../data/animeList.json";

export default function Card() {
  const element = data[0];
  return (
    <li>
      <img
        src={require(`../data/${element.anime_id}.jpg`)}
        alt={element.title}
      />
      <h2>{element.title}</h2>
      <div>{element.type}</div>
      <div>{element.score}</div>
    </li>
  );
}
