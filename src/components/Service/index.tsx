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
      <DescriptionContainer
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title>{title}</Title>
        <Marginer direction='vertical' margin='2rem' />
        <Details>{details}</Details>
      </DescriptionContainer>
      <ServiceImg
        src={imgUrl}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
    </ServiceContainer>
  );
};
