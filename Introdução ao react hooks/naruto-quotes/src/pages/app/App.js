import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import narutoImg from "../../images/naruto.png";
import { Quotes } from "../../components";
import { getQuote } from "../../services";
import jutsoSound from "../../sounds/jutso.mp3";

const audio = new Audio(jutsoSound);

export function App() {
  const isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState({
    quote: "ok",
    speaker: "speaker"
  });

  const onUpdate = async () => {
    const quote = await getQuote();

    if (isMounted.current) {
      audio.play();
      setQuoteState(quote);
    }
  };

  useEffect(() => {
    isMounted.current = false;
  }, []);

  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate} />
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
