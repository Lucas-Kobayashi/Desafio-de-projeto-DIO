import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Adress, Name, Restaurant, RestaurantImage, RestaurantInfo } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Name>Restaurante do seu Zé</Name>
      <ReactStars count={5} value={4.5} isHalf edit={false} activeColor="#e7711c" />
      <Adress>Endereço</Adress>
    </RestaurantInfo>
    <RestaurantImage src={restaurante} alt="Imagem restaurante" />
  </Restaurant>
);

export default RestaurantCard;
