import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faPinterest,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const IconsContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

const IconCircle = styled.div`
  border: 1px solid white;
  border-radius: 50%;
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export default function SocialIcons() {
  return (
    <IconsContainer>
      <IconCircle>
        <a
          href="https://www.facebook.com/les3soeursfleuristerie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="1x" color="white" />
        </a>
      </IconCircle>
      <IconCircle>
        <a
          href="https://www.instagram.com/les3soeurs_fleuristerie?utm_source=ig_web_button_share_sheet&igsh=enIxaDludXd4OHJj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="1x" color="white" />
        </a>
      </IconCircle>
    </IconsContainer>
  );
}
