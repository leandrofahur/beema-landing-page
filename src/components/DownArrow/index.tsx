import { ArrowContainer, ArrowIcon } from './styles';

export const DownArrow: React.FC = () => {
  return (
    <ArrowContainer
      whileHover={{
        cursor: 'pointer',
        backgroundColor: 'rgba(255,255,255,0)',
        border: '2px solid #00B997',
        scale: 1.02,
        transition: {
          duration: 0.3,
        },
      }}
      whileTap={{ filter: 'brightness(0.9)', scale: 1.01 }}
    >
      <ArrowIcon />
    </ArrowContainer>
  );
};
