import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Data } from "../../Redux/Action/ActionData";

export const useAxios = (Cant = null) => {
  const dispatch = useDispatch();
  var Datos = [];

  const AxiosData = async (axiosParams) => {
    const axios = require("axios");
    for (let i = 0; i <= Cant; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(function (response) {
          Datos.push(response.data);

          if (i === Cant - 1 && Datos !== undefined) {
            dispatch(
              Data(
                Datos.sort(function (a, b) {
                  return a.id - b.id;
                })
              )
            );
          }
        })
        .catch(function (error) {
          // handle error
          console.log("Error", error);
        })
        .then(function () {
          // always executed
        });
    }
  };

  useEffect(() => {
    AxiosData();
  }, []); // execute once only
};


export const PokeSearch = async (Name = null) => {
  const axios = require("axios");

  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Name}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
