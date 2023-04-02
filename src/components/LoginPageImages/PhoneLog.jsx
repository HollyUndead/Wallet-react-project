import styled from 'styled-components';
import PhoneLogDesk1x from '../../images/login/PhoneLog/PhoneLogDesk1x.png';
import PhoneLogDesk2x from '../../images/login/PhoneLog/PhoneLogDesk2x.png';
import PhoneLogTab1x from '../../images/login/PhoneLog/PhoneLogTab1x.png';
import PhoneLogTab2x from '../../images/login/PhoneLog/PhoneLogTab2x.png';

import HeadShake from 'react-reveal/HeadShake';

export const PhoneLog = () => {
  return (
    <PhoneLogWrapper>
      <picture>
        <source
          srcSet={`${PhoneLogDesk1x} 1x, ${PhoneLogDesk2x} 2x`}
          width="193"
          height="363"
          media="(min-width:1280px)"
        />
        <source
          srcSet={`${PhoneLogTab1x} 1x, ${PhoneLogTab2x} 2x`}
          width="115"
          height="216"
          media="(min-width: 768px)"
        />{' '}
        <HeadShake>
          <img src={PhoneLogDesk1x} width="163" alt="start page" />
        </HeadShake>
      </picture>
    </PhoneLogWrapper>
  );
};

const PhoneLogWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 95px;
  @media screen and (min-width: 1280px) {
    bottom: 35px;
    right: 159px;
  }
`;
