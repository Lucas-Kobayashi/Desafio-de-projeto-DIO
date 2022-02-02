import Item from "./components/item";
import Card from "./components/card";

const App = () => {
  return (
    <>
      <h1>Minha aplicação em react</h1>
      <ul>
        <Item>Texto aqui</Item>
        <Item>Texto aqui</Item>
        <Item>Texto aqui</Item>
      </ul>
      <Card />
    </>
  );
};

export default App;
