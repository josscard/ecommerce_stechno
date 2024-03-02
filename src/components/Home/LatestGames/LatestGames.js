import {useState, useEffect} from "react";
import { Game } from "@/api";
import{ GridGames } from "@/components/Shared"

const gameCtrl = new Game();

//limit es la cantidad de juegos que quiero que aparezcan en ultimos juegos
//const limit = 3;
//const platformId = null;

export function LatestGames(props) {
    const {title, limit, platformId=null} = props;
    const [games, setGames] = useState(null);

   //console.log(games);

    useEffect(() => {
      (async () => {
      try {
        const response= await gameCtrl.getLatestPublished({
            limit,
            platformId,
        });

        setGames(response.data)
      //  console.log(response);
      } catch (error) {
        console.error(error);
      }
      })()
    }, [])

    if(!games) return null;
    
  return (
    <div>
        <h2>{title}</h2>
        <GridGames games={games}/>
    </div>
  )
}
