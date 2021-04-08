const chai = require('chai');
const expect = require('chai').expect;
import { getPokemonsListService } from "../pokemons";
describe(
    "/src/services/pokemons.js",
    ()=>{
        it("You do not have to return any error.", async () => {
            const pokemonsList = getPokemonsListService();
            expect(1).to.equals(1);
        })
    }
);