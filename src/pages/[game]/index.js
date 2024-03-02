/*TODAS LAS EXPORTACIONES DE PAGINA DEBEN SE DEFAULT */

/* el getServerSideProps viene listo de la documentacion de NEXT paraa
ayudarnos a traer los datos del servidor  */
import { Game } from "@/api";

export { default } from "./game"

export async function getServerSideProps(context){
    const { params : { game } } = context;
console.log(context);
    const gameCtrl = new Game();
    const response = await gameCtrl.getBySlug(game)
    
    return {
        props: {
            game: response,
        }
    }
}