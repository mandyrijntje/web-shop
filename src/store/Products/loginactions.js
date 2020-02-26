import api from "../../api";

// A thunk creator
export function login(dispatch, getState, email, password) {
  //should I be using a thunk action creator? It doesn't console.log if I do.
  // TODO:
  // (1) make a POST API request to `/login`
  console.log("I am inside a login thunk, how cool");
  api("/login", {
    method: "POST",
    body: {
      email: email,
      password: password
    }
  })
    // (2) after getting back the access token,
    //      dispatch the `saveAccessToken` action
    .then(jwt => {
      api("/me", {
        jwt: jwt.jwt //what is this?
      })
        //(3) then
        .then(data => {
          console.log("Here is my thunky login data", data);
          dispatch(userLoggedIn(jwt, data));
        })
        .catch(err => console.log("err", err));
    })
    .catch(err => console.log("err", err));
}

// An action creator
// export function saveAccessToken(accessToken) {
//   return {
//     type: "auth/SAVE_ACCESS_TOKEN",
//     payload: accessToken
//   };
// }

//replace with userloggedin
export function userLoggedIn(token, profile) {
  return {
    type: "auth/USER_LOGGED_IN",
    payload: {
      token,
      profile
    }
  };
}
