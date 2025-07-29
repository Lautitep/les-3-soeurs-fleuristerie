import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const IconCircle = styled.div`
  border: 1px solid white;
  border-radius: 50%;
  padding: 10px;
`;

export default function SocialIcons() {
  return (
    <SocialContainer>
      <IconCircle>
        <FontAwesomeIcon icon={faFacebook} size="1x" color="white" />
      </IconCircle>
      <IconCircle>
        <FontAwesomeIcon icon={faInstagram} size="1x" color="white" />
      </IconCircle>
    </SocialContainer>
  );
}
