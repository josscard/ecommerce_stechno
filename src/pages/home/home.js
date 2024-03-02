import { Container } from "semantic-ui-react"
import { BasicLayout} from "@/layouts";
import { Home } from "@/components/Home"
import { Separator, BannerAd, BarTrust } from "@/components/Shared";

// con la siguiente constante declaramos las plataformas con su id 
// y abajo la llamamos para que nos muestre los juegos segun la plataforma
//import { useCart } from "@/hooks"


const platformsId = {
    playstation:8,
    xbox: 4,
    nintendo: 3,
    computadores: 2,
    almacenamiento: 7,
    celulares: 5,
    redes: 6
}

//console.log(platformsId.playstation);
export default function HomePage() {
 //   console.log(useCart());
    return (
       <>
        <BasicLayout>
           <Home.BannerLastGamePublished/>

           <Separator height={100}/>
    <Container>
        <Home.LatestGames title="Ultimos lanzamientos"/>
    </Container>

    <Separator height={100} /> 

        <BarTrust/>

    <Separator height={100} />  

    <Container>
        <Home.LatestGames 
            title="PlayStation" 
            limit={3} 
            platformId={platformsId.xbox }/>
        
    </Container> 

    <Separator height={100} />   
        <BannerAd 
            title="Registrate y obten los mejores precios" 
            subtitle="Compara con otros juegos y elige el tuyo" 
            btnTitle="Entrar ahora" 
            btnLink="/account" 
            image="images/img01.png"/>
    <Separator height={50}/>    

    <Container>
        <Home.LatestGames 
            title="Nintendo" 
            limit={3} 
            platformId={platformsId.nintendo }/>
        
    </Container> 
    <Separator height={100} />    
        </BasicLayout>
        </>
    )
}