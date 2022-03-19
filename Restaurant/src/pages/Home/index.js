import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptativeHeigh: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo site" />
          <TextField
            label="Pesquisar restaurante"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Em sua área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="texto Aqui" />
            <Card photo={restaurante} title="texto Aqui" />
            <Card photo={restaurante} title="texto Aqui" />
            <Card photo={restaurante} title="texto Aqui" />
            <Card photo={restaurante} title="texto Aqui" />
            <Card photo={restaurante} title="texto Aqui" />
          </Carousel>
          <button onClick={() => setModalOpened(true)}>Abrir Modal</button>
        </Search>
        <RestaurantCard />
      </Container>
      <Map query={query} />
      {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} /> */}
    </Wrapper>
  );
};

export default Home;
