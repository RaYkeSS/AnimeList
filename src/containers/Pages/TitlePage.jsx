import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import StarRating from "../../components/TitlePage/StarRating/StarRating";

import { DATA_ROOT } from "../../utils";

export default function TitlePage() {
  const { titleId } = useParams();
  const [elem, setElem] = useState(null);
  const styles = {
    container: "container mx-auto",
    wrapper: "flex gap-10 justify-between",
    h1: "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white",
    h3: "text-3xl",
  };
  // const {
  //   anime_id,
  //   image_url,
  //   title,
  //   title_english,
  //   title_japanese,
  //   title_synonyms,
  //   type,
  //   source,
  //   episodes,
  //   status,
  //   airing,
  //   aired_string,
  //   aired,
  //   duration,
  //   rating,
  //   score,
  //   scored_by,
  //   rank,
  //   popularity,
  //   favorites,
  //   background,
  //   premiered,
  //   broadcast,
  //   related,
  //   producer,
  //   licensor,
  //   studio,
  //   genre,
  //   opening_theme,
  //   ending_theme,
  // } = elem;
  useEffect(() => {
    setElem(DATA_ROOT.find((el) => Number(el.anime_id) === Number(titleId)));
  }, [titleId]);
  return (
    elem && (
      <>
        <h1 className={styles.h1}>{elem.title}</h1>
        <div className={styles.wrapper}>
          <div>
            <img src={elem.image_url} alt={elem.title} />
            <StarRating />
            <div>{elem.anime_id}</div>
          </div>
          <div>
            <h3 className={styles.h3}>Information</h3>
            <div>Type: {elem.type}</div>
            <div>Episodes: {elem.episodes}</div>
            <div>Episode Duration: {elem.duration}</div>
            <div>Status: {elem.status}</div>
            <div>Genres: {elem.genre}</div>
          </div>
          <div>
            <div>
              <h3 className={styles.h3}>Rating</h3>
              <StarRating
                readOnly
                defaultScore={elem.score}
                pointer={false}
                labelTextFn={() => `MAL score: ${elem.score}`}
              />
            </div>
            <div>
              <h3 className={styles.h3}>Studio</h3>
              <div>{elem.studio}</div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

// {
//   "anime_id": 11013,
//   "title": "Inu x Boku SS",
//   "title_english": "Inu X Boku Secret Service",
//   "title_japanese": "妖狐×僕SS",
//   "title_synonyms": "Youko x Boku SS",
//   "image_url": "https://cdn.myanimelist.net/images/anime/12/35893.jpg",
//   "type": "TV",
//   "source": "Manga",
//   "episodes": 12,
//   "status": "Finished Airing",
//   "airing": "False",
//   "aired_string": "Jan 13, 2012 to Mar 30, 2012",
//   "aired": "{'from': '2012-01-13', 'to': '2012-03-30'}",
//   "duration": "24 min. per ep.",
//   "rating": "PG-13 - Teens 13 or older",
//   "score": 7.63,
//   "scored_by": 139250,
//   "rank": 1274,
//   "popularity": 231,
//   "members": 283882,
//   "favorites": 2809,
//   "background": "Inu x Boku SS was licensed by Sentai Filmworks for North America, while MVM Films licensed it for the United Kingdom. During April 2013, Hanabee Entertainment released the series on DVD and Blu-ray for Australia and New Zealand.",
//   "premiered": "Winter 2012",
//   "broadcast": "Fridays at Unknown",
//   "related": "{'Adaptation': [{'mal_id': 17207, 'type': 'manga', 'url': 'https://myanimelist.net/manga/17207/Inu_x_Boku_SS', 'title': 'Inu x Boku SS'}], 'Sequel': [{'mal_id': 13403, 'type': 'anime', 'url': 'https://myanimelist.net/anime/13403/Inu_x_Boku_SS_Special', 'title': 'Inu x Boku SS Special'}]}",
//   "producer": "Aniplex, Square Enix, Mainichi Broadcasting System, Movic, Inu x Boku SS Production Partners",
//   "licensor": "Sentai Filmworks",
//   "studio": "David Production",
//   "genre": "Comedy, Supernatural, Romance, Shounen",
//   "opening_theme": "['\"Nirvana\" by MUCC']",
//   "ending_theme": "['#1: \"Nirvana\" by MUCC (eps 1, 11-12)', '#2: \"Rakuen no Photograph (楽園のPhotograph)\" by Soushi Miketsukami (Yuichi Nakamura) (eps 2, 9)', '#3: \"Kimi wa (君は)\" by Ririchiyo Shirakiin (Rina Hidaka) (eps 3, 8)', '#4: \"one way\" by Banri Watanuki (Takuya Eguchi) & Zange Natsume (Mamoru Miyano) (ep 4)', '#5: \"SM Hantei Forum (SM判定フォーラム)\" by Kagerou Shoukiin (Tomokazu Sugita) (ep 5, 10)', '#6: \"sweets parade\" by Karuta Roromiya (Kana Hanazawa) (ep 6)', '#7: \"Taiyou to Tsuki (太陽と月)\" by Renshou Sorinozuka (Yoshimasa Hosoya) & Nobara Yukinokouji (Youko Hikasa) (ep 7)']"
// },
