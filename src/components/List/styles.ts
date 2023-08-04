import styled from "styled-components/native";
import { TrashSimple } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_900};
  padding: 17px;
  margin-bottom: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<{ debit?: string }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${(props) =>
    props.debit?.toUpperCase() !== "RECEITA"
      ? ({ theme }) => theme.COLORS.ORANGE
      : ({ theme }) => theme.COLORS.GREEN};
`;

export const TrashButton = styled.TouchableOpacity``;

export const ListButton = styled.TouchableOpacity``;

export const TrashIcon = styled(TrashSimple).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.BLUE_300,
}))``;
