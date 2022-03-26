import React from "react";
import { useState, useEffect } from "react";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const quoteAPI = `https://quotes.rest/qod.json`;

    fetch(quoteAPI)
      .then((res) => res.json())
      .then((res) => {
        setQuote(res.contents.quotes[0].quote);
        setAuthor(res.contents.quotes[0].author);
      })
      .catch(() => {
        setQuote("Es erscheint immer unmöglich, bis es vollbracht ist");
        setAuthor("Nelson Mandela");
      });
  }, []);

  return (
    <div className="quote">
      {quote && <h3>„ {quote} “</h3>}
      {author && <span className="quoteSpan">- {author} -</span>}
      {/* <span >
        <img
          src="https://theysaidso.com/branding/theysaidso.png"
          height="20"
          width="20"
          alt="theysaidso.com"
        />
        <a className="quoteA"
          href="https://theysaidso.com"
          title="Powered by quotes from theysaidso.com"
          target="_blank"
          rel="noreferrer"
          
        >
          They Said So®
        </a>
      </span> */}
    </div>
  );
}

export default Quote;
