import { BasicLayout } from "@/layouts";
import { Game } from "@/components/Game"
import { Separator } from "@/components/Shared"

/* este game.js lo que hace es crear el layout donde se van a abrir
los juegos o productos que demos clic */

export default function GamePage(props) {
    const { game } = props;
    const wallpaper = game.attributes.wallpaper;
   console.log(props);
  return (
    <>
        <BasicLayout>
        <Game.HeaderWallpaper image={wallpaper.data[0].attributes.url}/>
        <Game.Panel gameId={game.id} game={game.attributes}/>

        <Separator height={50}/>
        
{/*una vez se crea el componente info llamamos los props */}
        <Game.Info game={game.attributes}/>

        <Separator height={30}/>

        <Game.Media 
          video={game.attributes.video}
          screenshots={game.attributes.screenshots.data}
        />

        <Separator height={50}/>

        </BasicLayout>
    </>
  )
}
