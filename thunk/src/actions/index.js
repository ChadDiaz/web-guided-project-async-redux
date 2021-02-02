import axios from "axios";

export const IS_LOADING = "IS_LOADING";
export const DATA_LOADED = "DATA_LOADED";
export const DATA_ERROR = "DATA_ERROR";

export const getQuote = () => (dispatch) => {
  dispatch({ type: IS_LOADING });
  axios
    .get("https://api.kanye.rest")
    .then((res) => {
      console.log(res);
      dispatch({ type: DATA_LOADED, payload: res.data.quote });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({ type: DATA_ERROR, payload: err.message });
    })
};
