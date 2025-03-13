import GlobalStyle from "../styles";
import "../components/Card/Card.css";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}





