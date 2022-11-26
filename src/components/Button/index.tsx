import React from 'react';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ title, color, onPress }: Props) => {
  const theme = useTheme();
  return (
    <Container onPress={onPress} color={color ? color : theme.colors.main}>
      <Title>{title}</Title>
    </Container>
  );
};
