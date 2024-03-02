import { authFetch, ENV } from "@/utils";
import { forEach } from "lodash";


export class Cart {
    add(gameId) {

        
        const games = this.getAll();
        const objIndex = games.findIndex((game) => game.id === gameId);
        //const objStock = games.findIndex((game) => game.attributes.stock === gameStock);
       // console.log(gameStock);
        
       console.log(gameId);
// acá controlamos que si el producto está en el carrito no permita ingresar otro,
// aqui podriamos comparar con stock 
        if (objIndex < 0) {
            games.push({id: gameId, quantity: 1});
        }else{

            // esta funcion nos permite incrementar la cantidad del mismo juego + 1
            const game = games[objIndex];
            games[objIndex].quantity = game.quantity + 1;
        }

        localStorage.setItem(ENV.CART, JSON.stringify(games));
    }
   
    getAll() {
            const response = localStorage.getItem(ENV.CART);

            if (!response) {
                return [];
            }else{
                return JSON.parse(response);
            }
     }

     count() {
        const response = this.getAll();
        let count = 0;

        forEach(response, (item) => {
            count += item.quantity;
        });

        return count;
     }

     changeQuantity(gameId, quantity) {
        const games = this.getAll();
        const objIndex = games.findIndex((game) => game.id === gameId);

        games[objIndex].quantity = quantity;

        localStorage.setItem(ENV.CART, JSON.stringify(games))
     }

     delete(gameId) {
        const games = this.getAll();

        const updateGames = games.filter((game)=> game.id !=gameId);

        localStorage.setItem(ENV.CART, JSON.stringify(updateGames));
     }

}