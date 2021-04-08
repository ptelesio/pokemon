import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPokemonsList,
  getPokemon,
  resetPokemon,
} from "../../actions/pokemons";
import Loading from "../../components/loading";
import { Card, Button, Col, Row, ListGroup } from "react-bootstrap";
import { Grid, _ } from "gridjs-react";
import LANGUAGE_WEB from "../../constants/language";

const Home = () => {
  const { pokemonsList, pokemon: pokemonData, request, error } = useSelector(
    (state) => state.pokemons
  );
  const { language } = useSelector(
    (state) => state.home
  );
  const [pokemonsListTable, setPokemonsListTable] = useState([]);

  const dispatch = useDispatch();

  const handleShowPokemon = (pokemon) => {
      dispatch(getPokemon(pokemon));
  };

  const handleBackPokemon = () => {
    dispatch(resetPokemon());
  };

  useEffect(() => {
    dispatch(getPokemonsList());
  }, []);

  useEffect(() => {
    const data =
      pokemonsList &&
      Array.isArray(pokemonsList.results) &&
      pokemonsList.results.length
        ? pokemonsList.results.map((pokemon) => {
            return [
              _(
                <p className="link-btn"
                  onClick={() => {
                    handleShowPokemon(pokemon?.name);
                  }}
                >
                  {pokemon.name}
                </p>
              ),
            ];
          })
        : [];
    setPokemonsListTable(data);
  }, [pokemonsList]);

  return request ? (
    <Loading />
  ) : (
    <Fragment>
      <Row>
        <Col sm={12} md={!pokemonData ? 12 : 9}>
          <Card>
            <Card.Body>
            <Grid
                    data={pokemonsListTable}
                    search={false}
                    pagination={{
                      enabled: true,
                      limit: 5,
                    }}
                    language={{
                      'search': {
                        'placeholder': LANGUAGE_WEB[language]?.typeaKeyword
                      },'pagination': {
                        'previous': LANGUAGE_WEB[language]?.previous,
                        'next': LANGUAGE_WEB[language]?.next,
                        'showing': LANGUAGE_WEB[language]?.showing,
                        'results': () => LANGUAGE_WEB[language]?.results
                      }
                    }}
                  
                  />
            </Card.Body>
          </Card>
        </Col>
        {pokemonData && (
          <Col sm={12} md={3}>
            <Card className={`ani-delay`}>
              <Card.Img variant="top" src={pokemonData?.sprites?.front_shiny} />
              <Card.Body>
                <Card.Title>{pokemonData.name}</Card.Title>
                <ListGroup variant="flush">
                  {pokemonData.stats.map((stat, idx) => {
                    return (
                      <ListGroup.Item key={idx}>
                        {LANGUAGE_WEB[language][stat?.stat?.name]} : {stat?.base_stat}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
                <Button
                  block
                  variant="primary"
                  onClick={() => {
                    handleBackPokemon();
                  }}
                >
                  {LANGUAGE_WEB[language]?.back}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Fragment>
  );
};

export default Home;
