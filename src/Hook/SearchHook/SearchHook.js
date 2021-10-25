export const searchPokemon = async (pokemon) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };


  export const DetailsPokemon = async (Details) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${Details}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };

  