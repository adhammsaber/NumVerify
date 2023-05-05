export function setToken(token) {
    return {
      type: "SET_TOKEN",
      payload: token,
    };
  }
  
  export function clearToken() {
      return {
        type: "Clear_TOKEN",
        payload: null,
      };
    }
    