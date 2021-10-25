import { types } from "../Types/Type";

//Registro
export const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.Login:
      return {
        id: action.payload.id,
        name: action.payload.displayname,
      };

    case types.Logout:
      return {};

    default:
      return state;
  }
};

//Login
export const RegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case types.Register:
      return {
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
      };

    default:
      return state;
  }
};
