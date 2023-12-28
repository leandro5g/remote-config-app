import styled from 'styled-components/native';

type BallValue = {
  value: boolean
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Ball = styled.View<BallValue>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ value }) => value ? "#49CA27" : "#D83027"};
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #fff;
  width: 80%;
`;