import { types } from "../Types/Type";

export const DataReducer = (state = {}, action) => {
  switch (action.type) {
    case types.Data:
      return {
        Datos: action.payload.data,
      };
    default:
      return state;
  }
};

export const DetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.Details:
      return {
        Datos: action.payload.details,
      };
    default:
      return state;
  }
};

export const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case types.User:
      return {
        user: action.payload.user,
      };

    case types.Logout:
      return {};

    default:
      return state;
  }
};
