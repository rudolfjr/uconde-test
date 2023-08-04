import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  margin: 15px 0px;
`;

export const LoadIndicator = styled.ActivityIndicator``;
