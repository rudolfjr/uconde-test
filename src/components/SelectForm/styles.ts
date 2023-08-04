import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";
export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 0px 0px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_900};
  height: 40px;
  margin-bottom: 20px;
`;

export const Select = styled(Picker)`
  color: ${({ theme }) => theme.COLORS.BLUE_300};
  border: 0;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  width: 100%;
  margin-bottom: 10px;
`;
