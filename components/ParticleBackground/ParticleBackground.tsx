import Particles from 'react-particles-js';
import styled from 'styled-components';

const StyledParticles = styled(Particles)`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey};
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

/**
 * @namespace Components/ParticleBackground
 */
export const ParticleBackground: React.FC = () => {
  return (
    <StyledParticles
      params={{
        particles: {
          number: {
            value: 300,
          },
          opacity: {
            value: 0.5,
          },
          line_linked: {
            enable: true,
            color: '#ffffff',
            opacity: 0.15,
            width: 2,
          },
        },
      }}
    ></StyledParticles>
  );
};
