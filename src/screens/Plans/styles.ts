import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  flex: 1;
`;

export const HeaderList = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.RUBIK_REGULAR};
  color: ${({ theme }) => theme.COLORS.BLUE_900};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_REGULAR};
  color: ${({ theme }) => theme.COLORS.BLUE_500};
`;
