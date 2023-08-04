import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";

type InputFormProps = {
  title?: string;
  placeholder?: string;
  showSearchIcon?: boolean;
  value?: string;
  setValue: Dispatch<SetStateAction<any>>;
};

export function InputForm({
  title,
  placeholder,
  showSearchIcon = false,
  value,
  setValue,
}: InputFormProps) {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Container showSearchIcon={showSearchIcon}>
        {showSearchIcon && (
          <S.SearchButton>
            <S.SearchIcon />
          </S.SearchButton>
        )}

        <S.TextItem
          onChange={(event: { nativeEvent: { text: string } }) => {
            setValue(event.nativeEvent.text);
          }}
          placeholder={placeholder}
          value={value}
        />
      </S.Container>
    </>
  );
}
