import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { useCallback } from "react";

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  showActionButton?: string | boolean;
  handleNewPlan?: () => void;
};

export function Header({
  title,
  showBackButton = false,
  showActionButton = false,
  handleNewPlan,
}: HeaderProps) {
  const navigation = useNavigation();

  const onHandleAdd = useCallback(() => {
    navigation.navigate("add");
  }, []);
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={() => navigation.goBack()}>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Title>{title}</S.Title>

      {showActionButton === "add" && (
        <S.ActionButton onPress={handleNewPlan}>
          <S.AddIcon />
        </S.ActionButton>
      )}

      {showActionButton === "plus" && (
        <S.ActionButton onPress={onHandleAdd}>
          <S.PlusIcon />
        </S.ActionButton>
      )}
    </S.Container>
  );
}
