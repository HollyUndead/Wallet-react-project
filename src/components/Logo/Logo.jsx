import Icons from 'images/icons.svg';
import { Container, Icon, Text } from './Logo.styled';

export const Logo = () => {
  return (
    <Container>
      <Icon>
        <use href={`${Icons}#icon-logo`}></use>
      </Icon>
      <Text>Wallet</Text>
    </Container>
  );
};
