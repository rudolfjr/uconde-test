import { Dispatch, SetStateAction, useCallback } from "react";
import { Modal, Pressable } from "react-native";
import * as S from "./styles";
import { usePlans } from "@context/PlansContext";
import { useFindSons } from "@hooks/useFindSons";

type ModalBoxProps = {
  name?: string;
  code?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
};

export function ModalBox({ name, code, setOpen, open = false }: ModalBoxProps) {
  const { fetchPlans, deletePlan } = usePlans();
  const { existSon, validatePlanSon } = useFindSons();

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleClear = useCallback(
    (code?: string) => async () => {
      if (!code) return;

      if (validatePlanSon(code)) return;

      await deletePlan(code);
      fetchPlans();
      handleClose();
    },
    []
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={handleClose}
    >
      <S.CenteredView>
        <S.ModalView>
          <S.TrashIcon />
          {existSon ? (
            <S.Title>Este plano possui um filho, não pode ser excluido.</S.Title>
          ) : (
            <>
              <S.Title>Deseja excluir a conta</S.Title>
              <S.ItemName>
                {name}? {code}
              </S.ItemName>
            </>
          )}
          <S.Actions>
            {existSon ? (
              <Pressable onPress={() => setOpen(false)}>
                <S.Cancel>Cancelar</S.Cancel>
              </Pressable>
            ) : (
              <>
                <Pressable onPress={() => setOpen(false)}>
                  <S.Cancel>Não!</S.Cancel>
                </Pressable>
                <Pressable onPress={handleClear(code)}>
                  <S.Confirm>Com certeza</S.Confirm>
                </Pressable>
              </>
            )}
          </S.Actions>
        </S.ModalView>
      </S.CenteredView>
    </Modal>
  );
}
