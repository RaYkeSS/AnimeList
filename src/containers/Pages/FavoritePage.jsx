import { useSelector } from "react-redux";

import { DATA_ROOT } from "../../utils";
import { useEffect, useState } from "react";

import {Card} from '../../components/index'

export default function FavoritePage() {
  const [favoriteList, setFavoriteList] = useState([])
  const data = useSelector(state => state.favorite.favList)
  useEffect(() => {
    setFavoriteList(data)
  }, [setFavoriteList, data])
  return (
    <div>
      <div>Fav</div>
      <div className="flex flex-wrap justify-between gap-y-7 mb-5">{favoriteList && favoriteList.map(id => {
        const anime = DATA_ROOT.find(el => el.anime_id === id)
        return <Card itemData={anime} key={anime.anime_id} />
        })}</div>
    </div>
  );
}
