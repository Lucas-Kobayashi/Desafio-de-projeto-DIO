import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import narutoImg from "../../images/naruto.png";
import { Quotes } from "../../components";
import { getQuote } from "../../services";
import jutsoSound from "../../sounds/jutso.mp3";

const audio = new Audio(jutsoSound);

export function App() {
  const isMounted = useRef(true);
  const [quote, setQuoteState] = useState({
    speaker: "Loading speaker...",
    quote: "Loading quote"
  });

  const onUpdate = async () => {
    const resQuote = await getQuote();

    if (isMounted.current) {
      setQuoteState(resQuote);
      audio.play();
    }
  };

  useEffect(() => {
    onUpdate();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...quote} onUpdate={onUpdate} />
      <NarutoImg src={narutoImg} alt="Naruto with kunai" />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  margin: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
