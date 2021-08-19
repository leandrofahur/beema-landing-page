import { Service } from '../../components/Service';
import { Marginer } from '../Marginer';

import ServiceImg01 from '../../assets/illustrations/web_development_.png';
import ServiceImg02 from '../../assets/illustrations/mobile_phone.png';
import ServiceImg03 from '../../assets/illustrations/bug_fixed.png';

import { ServicesContainer } from './styles';
import { SectionTitle } from '../../styles/GlobalStyles';

export const ServicesSection: React.FC = () => {
  const servicesList = [
    {
      title: 'Fully Integrated Services',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgUrl: ServiceImg01,
      isReversed: true,
    },
    {
      title: 'Mobile Optimized',
      details:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgUrl: ServiceImg02,
      isReversed: false,
    },
    {
      title: 'Quality is Our Priority',
      details:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores',
      imgUrl: ServiceImg03,
      isReversed: true,
    },
  ];

  return (
    <ServicesContainer name='servicesSection'>
      <SectionTitle>Best Software Quality</SectionTitle>
      <Marginer direction='vertical' margin='7rem' />
      {servicesList.map((service) => {
        return (
          <>
            <Service
              isReversed={service.isReversed}
              title={service.title}
              details={service.details}
              imgUrl={service.imgUrl}
            />
          </>
        );
      })}
    </ServicesContainer>
  );
};
