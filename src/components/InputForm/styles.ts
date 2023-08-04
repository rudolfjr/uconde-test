import styled from "styled-components/native";

import { MagnifyingGlass } from "phosphor-react-native";

export const Container = styled.View<{ showSearchIcon: boolean }>`
  align-items: center;
  flex-direction: row;
  padding: 0px 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_900};
  height: ${(props) => (props.showSearchIcon ? "56px" : "40px")};
  margin: ${(props) => (props.showSearchIcon ? "0 24px" : "0 0 20px 0")};
  border-radius: ${(props) => (props.showSearchIcon ? "100px" : "10px")};
`;

export const TextItem = styled.TextInput`
  color: ${({ theme }) => theme.COLORS.BLUE_300};
  border: 0;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  width: 100%;
  margin-bottom: 10px;
`;

export const SearchButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const SearchIcon = styled(MagnifyingGlass).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.BLUE_300,
}))``;
