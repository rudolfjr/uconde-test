import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  flex: 1;
  padding-top: 15px;
`;

export const ContentContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE_500};
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex: 1;
  margin-top: 40px;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.COLORS.PINK};
  margin: -10px 5px 15px 5px;
`;
