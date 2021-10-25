import React, { useState } from "react";
import RecipeReviewCard from "../Card/Card";
import { useSelector } from "react-redux";
import PrimarySearchAppBar from "../NavBar/NavBar";
import SearchCard from "../Card/CardSearch";
import { searchPokemon } from "../../Hook/SearchHook/SearchHook";

export const MainPages = () => {
  const { Datos } = useSelector((stor) => stor.Datos);
  const [pokemons, setPokemons] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const onSearch = async (pokemon) => {
    if (pokemon === "") {
      setPokemons(null);
      setNotFound(false);
    } else {
      setLoading(true);
      setNotFound(false);
      setSearching(true);
      const result = await searchPokemon(pokemon);
      if (!result) {
        setNotFound(true);
        setLoading(false);
        console.log("No Encontrado", notFound);
        return;
      } else {
        setPokemons(result);
      }
      setLoading(false);
      setSearching(false);
    }
  };

  const Card = () => {
    if (
      Datos !== undefined &&
      pokemons === null &&
      pokemons !== "" &&
      notFound === false
    ) {
      return <RecipeReviewCard Props={Datos} />;
    } else if (pokemons !== null && notFound === false) {
      return <SearchCard Props={pokemons} />;
    } else if (notFound === true) {
      return <div>No Found</div>;
    } else {
      return <div>Loading</div>;
    }
  };

  return (
    <>
      <PrimarySearchAppBar onSearch={onSearch} />
      <div className="CardBox">
        <Card />
      </div>
    </>
  );
};
