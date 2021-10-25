import { types } from "../Types/Type";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Export } from "../../firebase/firebaseConfig";
const { Google, Facebook } = Export();

export const loginEmailPassword = (Email, Password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, Email, Password)
      .then(({ user }) => {
        console.log(user);
        dispatch(LoginSincrono(user.uid, user.displayName));
        //console.log('Bienvenid@');
      })
      .catch((e) => {
        //console.log(e);
      });
  };
};

//Login Google
export const LoginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, Google)
      .then(({ user }) => {
        dispatch(LoginSincrono(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

//Login con facebook
export const LoginFacebook = () => {
    return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, Facebook)
        .then(({ user }) => {
          dispatch(LoginSincrono(user.uid, user.displayName));
        })
        .catch((e) => {
          console.log(e);
        });
    };
  };

export const LoginSincrono = (id, displayname) => {
  return {
    type: types.Login,
    payload: {
      id,
      displayname,
    },
  };
};
//Mantener Usuario
export const Usuario = () => {
  return (dispatch) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      dispatch(setUsuario(user));
    });
  };
};

export const setUsuario = (user) => ({
  type: types.User,
  payload: { user },
});

//Logout
export const Logout = () => {
  return (dispatch) => {
    const auth = getAuth();

    signOut(auth)
      .then((user) => {
        dispatch(logoutSincrono());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const logoutSincrono = () => {
  return {
    type: types.Logout,
  };
};

