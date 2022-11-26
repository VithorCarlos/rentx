import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { useNavigation } from '@react-navigation/native';
import { 
  Container, 
  Content, 
  Title, 
  Message,
  Footer,
} from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';


export const SchedulingComplete: React.FC = () => {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <StatusBar 
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro Alugado</Title>
        <Message>
          Agora você só precisar ir {'\n'} a uma concessionário da RENTX {'\n'}e
          pegar seu automóvel.
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirm}/>
      </Footer>
    </Container>
  );
};
