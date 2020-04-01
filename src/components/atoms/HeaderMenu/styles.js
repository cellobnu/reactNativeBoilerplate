import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ContentView = styled.View`
  flex-direction: row;
`;

export const Button = styled(TouchableOpacity)`
  padding: 8px;
`;

export const Img = styled.Image`
  height: 30px;
  width: 30px;
`;
