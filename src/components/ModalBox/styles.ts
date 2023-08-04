import styled from "styled-components/native";

import { TrashSimple } from "phosphor-react-native";

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00000080;
`;

export const ModalView = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE_900};
  border-radius: 20px;
  padding: 35px 35px 20px 35px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.RUBIK_REGULAR};
  margin: 35px 0px 5px 0;
`;

export const ItemName = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.RUBIK_BOLD};
  margin-bottom: 15px;
`;

export const Actions = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Cancel = styled.Text`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_REGULAR};
  padding: 10px 25px;
  margin: 15px 5px;
  display: flex;
`;

export const Confirm = styled.Text`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_REGULAR};
  padding: 10px 25px;
  margin: 15px 5px;
  display: flex;
  border-radius: 30px;
`;

export const TrashIcon = styled(TrashSimple).attrs(({ theme }) => ({
  size: 64,
  color: theme.COLORS.PINK,
}))``;
