const initialState = {
  accessToken: null,
  profile: null
};
export default function loginreducer(state = initialState, action) {
  switch (action.type) {
    case "auth/USER_LOGGED_IN": {
      // => But what is action.payload? WTF is it?
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
