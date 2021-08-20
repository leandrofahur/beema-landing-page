import { Marginer } from '../Marginer';
import ReviewCard from '../../components/ReviewCard';

import { ReviewsContainer } from './styles';
import { SectionTitle } from '../../styles/GlobalStyles';

export const ReviewsSection: React.FC = () => {
  return (
    <ReviewsContainer name='reviewsSection'>
      <SectionTitle>What Our Clients Are Saying About Us</SectionTitle>
      <Marginer direction='vertical' margin='3rem' />
    </ReviewsContainer>
  );
};
