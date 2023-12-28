import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from 'expo-blur';

export const Container = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled(BlurView)`
 width: 75%;
 padding: 12px;
 padding-bottom: 0px;
 overflow: hidden;
`;

export const TitleContent = styled.Text`
 font-size: 24px;
 color: #ffff;
 align-self: center;
 font-weight: bold;
 margin-bottom: 16px;
`;


