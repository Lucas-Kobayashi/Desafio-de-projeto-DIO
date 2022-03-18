import React from 'react';
import ReactStars from 'react-rating-stars-component';

import { Adress, Name, Restaurant, RestaurantInfo } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Name>Nome</Name>
      <ReactStars count={5} value={4.5} isHalf edit={false} activeColor="#e7711c" />
      <Adress>Endereço</Adress>
    </RestaurantInfo>
  </Restaurant>
);

export default RestaurantCard;
