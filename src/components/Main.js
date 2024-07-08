import data from "../data/animeList.json";

export default function Main() {
  const cards = data.ownMapping((el) => {
    return (
      <li>
        <h3>{el.anime_id}</h3>
        <img src={require(`../data/${el.anime_id}.jpg`)} />
      </li>
    );
  }, 10);

  Array.prototype.ownMapping = function (callbackFn, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
      result[i] = callbackFn(this[i], i, this);
    }
    return result;
  };
  return <ul>{cards}</ul>;
}
