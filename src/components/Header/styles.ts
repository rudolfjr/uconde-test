import styled from "styled-components/native";

import { CaretLeft, Plus, Check } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  padding: 0px 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_BOLD};
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const ActionButton = styled.TouchableOpacity`
  display: flex;
  margin-left: auto;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE_900,
}))``;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE_900,
}))``;

export const AddIcon = styled(Check).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE_900,
}))``;
