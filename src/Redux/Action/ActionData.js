import { types } from "../Types/Type";

export const Data = (data) => {
  return (dispatch) => {
    dispatch(DatosSincrono(data));
  };
};

export const DatosSincrono = (data) => {
  return {
    type: types.Data,
    payload: { data },
  };
};

export const setData = (details) => {
  return (dispatch) => {
    dispatch(setDataSincrono(details));
  };
};

export const setDataSincrono = (details) => {
  return {
    type: types.Details,
    payload: { details },
  };
};



export const setUser = (Usuario) => {
  return {
    type: types.User,
    payload: Usuario
  };
};

export const setUserSincrono = (details) => {
  return {
    type: types.Details,
    payload: { details },
  };
};
