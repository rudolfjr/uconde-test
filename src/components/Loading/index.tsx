import * as S from "./styles";

export function Loading() {
  return (
    <S.Container>
      <S.LoadIndicator color="white" />
      <S.Title>Carregando</S.Title>
    </S.Container>
  );
}
