import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.RUBIK_BOLD};
  color: ${({ theme }) => theme.COLORS.BLUE_900};
  background-color: ${({ theme }) => theme.COLORS.WHITE_900};
  padding: 10px;
  margin: 5px 0px;
  border-radius: 10px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.RUBIK_REGULAR};
  color: ${({ theme }) => theme.COLORS.BLUE_900};
  margin: 5px 0px;
`;


export const Information = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.RUBIK_REGULAR};
  color: ${({ theme }) => theme.COLORS.BLUE_900};
  margin-bottom: 10px;
`;