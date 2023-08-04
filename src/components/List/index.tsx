import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";


import { ModalBox } from "@components/ModalBox";

import * as S from "./styles";

type ListProps = {
  debit: string;
  code: string;
  name: string;
}; 

export function List({ name, debit, code }: ListProps) {
  
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);

  const onHandleView = useCallback(() => {
    navigation.navigate("view", {code: code});
  }, []);

  const onHandleOpen = useCallback(() => {
    setOpen(open ? false : true);
  }, []);

  return (
    <>
      <S.Container>
        <S.ListButton onPress={onHandleView}>
          <S.Title debit={debit}>{name}</S.Title>
        </S.ListButton>
        <S.TrashButton onPress={onHandleOpen}>
          <S.TrashIcon />
        </S.TrashButton>
      </S.Container>
      <ModalBox name={name} code={code} setOpen={setOpen} open={open} />
    </>
  );
}
