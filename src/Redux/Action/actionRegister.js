import { types } from "../Types/Type";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

//Registro
export const RegistroEmailPassword = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name });
        dispatch(registerSincrono(user.email, user.uid, user.displayName));
        console.log(user);
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const registerSincrono = (email, password, name) => {
  return {
    type: types.Register,
    payload: {
      email,
      password,
      name,
    },
  };
};
