import React from 'react';

import { ReviewCardsContainer } from './styles';

interface IProps {
  content?: string;
  imgUrl?: string;
}

const ReviewCard: React.FC<IProps> = ({ content, imgUrl }) => {
  return <ReviewCardsContainer>Card</ReviewCardsContainer>;
};

export default ReviewCard;
