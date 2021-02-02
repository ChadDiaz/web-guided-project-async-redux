import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getQuote } from "../actions";

const Quotes = ({ quote, isFetching, error, getQuote }) => {
  useEffect(() => {});

 

  if (isFetching) {
    return <h2>Fetching quote for ya!</h2>;
  }

  const handleClick = (e) => {
    e.preventDefault();
    getQuote();
  };

  return (
    <>
      <h2>Kanye says: {quote}</h2>
      {error && (
        <div>
          <h2 style={{ color: "red" }}>We got an error: {error}</h2>
        </div>
      )}
      <button onClick={handleClick}>Get new quote</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getQuote })(Quotes);
