import { Container } from "semantic-ui-react";
import { size } from "lodash"
import { BasicLayout } from "@/layouts"
import { GridGames, Separator, NoResult, Pagination} from "@/components/Shared"

export default function PlatformPage(props) {

   const { games, platform, pagination } = props;

   //declaramos una const para determinar que los juegos sea mayor a 0
   const hasProducts = size(games) > 0;

// traemos el nombre de la plataforma que pulsemos, entrando al objeto y sacando Title
  return (
    <>
        <BasicLayout relative>
            <Container>
                <Separator height={50}/>
    
                <h2>{platform.attributes.Title}</h2>

                {hasProducts ? (
                    <>
                        <GridGames games = {games}/>
                        <Separator height={30}/>
                        <Pagination currentPage={pagination.page} totalPages={pagination.pageCount}/>
                    </>
                ) : (
                    <NoResult text={`La categoria ${platform.attributes.Title} aun no tiene producto`}/>
                )}

                <Separator height={100}/>
                
            </Container>
        </BasicLayout>
    </>
  )
}
