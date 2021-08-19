import { Marginer } from '../../layouts/Marginer';
import {
  DescriptionContainer,
  ServiceContainer,
  Title,
  Details,
  ServiceImg,
} from './styles';

interface IProps {
  title: string;
  details: string;
  imgUrl: string;
  isReversed: boolean;
}

export const Service: React.FC<IProps> = ({
  title,
  details,
  imgUrl,
  isReversed,
}) => {
  return (
    <ServiceContainer isReversed={isReversed}>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Marginer direction='vertical' margin='2rem' />
        <Details>{details}</Details>
      </DescriptionContainer>
      <ServiceImg src={imgUrl} />
    </ServiceContainer>
  );
};
