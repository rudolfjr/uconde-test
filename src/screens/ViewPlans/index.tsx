import { useCallback, useState } from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";

import { usePlans } from "@context/PlansContext";

import { Header } from "@components/Header";

import { PlanItemProps } from "@type/plans";

import * as GS from "@assets/css/global";
import * as S from "./styles";

type RouteParams = {
  code: string;
};

export function ViewPlans() {
  const route = useRoute();
  const { code } = route.params as RouteParams;

  const { plans } = usePlans();

  const [plan, setPlan] = useState<PlanItemProps>();
  const [planFather, setPlanFather] = useState<PlanItemProps>();

  useFocusEffect(
    useCallback(() => {
      const planCode = plans.find((plan) => plan[code]);
      setPlan(planCode && planCode[code]);

      const fatherCode = planCode && planCode[code];
      const planFather = plans.find(
        (plan) => plan[fatherCode ? fatherCode?.code : ""]
      );

      const checkFather = planFather[fatherCode ? fatherCode?.code : ""];
      setPlanFather(checkFather);
    }, [])
  );

  return (
    <>
      <GS.Container>
        <Header showBackButton title="Informações Conta" />
        <GS.ContentContainer>
          <S.Information>Dados da conta</S.Information>
          <S.Label>Conta Pai:</S.Label>
          <S.Title>
            {planFather?.code} - {planFather?.name}
          </S.Title>
          <S.Label>Código:</S.Label>
          <S.Title>{plan?.code}</S.Title>
          <S.Label>Nome:</S.Label>
          <S.Title>{plan?.name}</S.Title>
          <S.Label>Tipo:</S.Label>
          <S.Title>{plan?.type}</S.Title>
          <S.Label>Aceita lançamentos:</S.Label>
          <S.Title>{plan?.accept}</S.Title>
        </GS.ContentContainer>
      </GS.Container>
    </>
  );
}
