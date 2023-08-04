import { Dispatch, SetStateAction, useCallback } from "react";
import * as S from "./styles";
import { PlanProps } from "@type/plans";
import { Picker } from "@react-native-picker/picker";

type SelectFormProps = {
  title: string;
  selected: string;
  itens: PlanProps[];
  setValue: Dispatch<SetStateAction<any>>;
};

export function SelectForm({
  title,
  selected,
  itens,
  setValue,
}: SelectFormProps) {
  const handleValueChange = useCallback((itemValue: unknown) => {
    setValue(itemValue);
  }, []);

  return (
    <>
      {itens && (
        <>
          <S.Title>{title}</S.Title>
          <S.Container>
            <S.Select
              onValueChange={handleValueChange}
              selectedValue={selected}
            >
              <Picker.Item label="Selecione" value="Selecione" />
              {itens &&
                itens.map((item, index) => {
                  const key = Object.keys(item)[0];
                  return (
                    <Picker.Item
                      key={key}
                      label={item[key].name}
                      value={item[key]?.code ? item[key].code : item[key].name}
                    />
                  );
                })}
            </S.Select>
          </S.Container>
        </>
      )}
    </>
  );
}
