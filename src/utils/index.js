import DATA_ROOT from "../utils/animeList.json";

async function loader() {
  const data = await DATA_ROOT;
  return { data };
}

export { DATA_ROOT, loader };
