import { useEffect, useState } from "react";
import { Header } from "@components/Header";
import * as GS from "@assets/css/global";
import { InputForm } from "@components/InputForm";
import { SelectForm } from "@components/SelectForm";
import { plansCreate } from "@storage/plans/plansCreate";
import { useNavigation } from "@react-navigation/native";
import { usePlans } from "@context/PlansContext";
import useValidateSequence from "@hooks/useValidateSequence";
import { PlanItemProps } from "@type/plans";
import { useGetFather } from "@hooks/useGetFather";
import { useFindPlan } from "@hooks/useFindPlan";

export function InsertPlans() {
  const typeItens = [
    {
      ["Receita"]: { name: "Receita" },
    },
    {
      ["Despesa"]: { name: "Despesa" },
    },
  ];
  const aceptItens = [
    {
      ["Sim"]: { name: "Sim" },
    },
    {
      ["Não"]: { name: "Não" },
    },
  ];

  const navigation = useNavigation();
  const { plans } = usePlans();
  const { error, validate } = useValidateSequence();
  const { getFather } = useGetFather();
  const { existPlan, validatePlan } = useFindPlan();

  const [father, setFather] = useState("Selecione");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [accept, setAccept] = useState("");

  const [fatherItem, setFatherItem] = useState<PlanItemProps>();

  const handleNewPlan = async () => {
    if (!validate(code)) return false;

    if (fatherItem?.accept === "Sim") return false;

    if (validatePlan(code)) return false;

    try {
      const savePlan = {
        [code]: {
          code: code,
          name: name,
          type: fatherItem ? fatherItem.type : type,
          accept: accept,
          father: father === "Selecione" ? "" : father,
        },
      };
      await plansCreate(savePlan);

      navigation.navigate("plans");
    } catch (error) {
      throw error;
    }
  };

  function suggestNextCode(fatherCode = "") {
    const allCodes = plans.map((plan) => Object.keys(plan)[0]);

    const childCodes = allCodes.filter((code) => {
      const segments = code.split(".");
      if (fatherCode === "") return segments.length === 1;
      return (
        code.startsWith(fatherCode + ".") &&
        segments.length === fatherCode.split(".").length + 1
      );
    });

    if (childCodes.length === 0) return fatherCode ? `${fatherCode}.1` : "1";

    const maxCode = childCodes.reduce((max, code) => {
      const currNum = parseInt(code.split(".").pop() || "0");
      return currNum > max ? currNum : max;
    }, 0);

    if (maxCode === 999) {
      const parentSegments = fatherCode.split(".");
      const newFatherCode = parentSegments.slice(0, -1).join(".");
      return suggestNextCode(newFatherCode);
    }

    const newSegment = maxCode + 1;
    return fatherCode ? `${fatherCode}.${newSegment}` : `${newSegment}`;
  }

  useEffect(() => {
    setCode(suggestNextCode(""));
  }, []);

  useEffect(() => {
    setCode(suggestNextCode(father === "Selecione" ? "" : father));
    if (getFather(father)) {
      setFatherItem(getFather(father));
    } 
  }, [father]);

  return (
    <>
      <GS.Container>
        <Header
          showBackButton
          handleNewPlan={handleNewPlan}
          showActionButton="add"
          title="Inserir Conta"
        />
        <GS.ContentContainer>
          {plans.length > 0 && (
            <SelectForm
              setValue={setFather}
              itens={plans}
              title="Conta pai"
              selected={father}
            />
          )}
          {!fatherItem || fatherItem?.accept === "Não" ? (
            <>
              <InputForm
                setValue={setCode}
                value={code}
                title="Código"
                placeholder="x.x"
              />
              {error && <GS.Error>{error}</GS.Error>}
              {existPlan && <GS.Error>Este código já existe</GS.Error>}
              <InputForm
                setValue={setName}
                value={name}
                title="Nome"
                placeholder="Taxa condominial"
              />
              {!fatherItem && (
                <SelectForm
                  setValue={setType}
                  itens={typeItens}
                  title="Tipo"
                  selected={type}
                />
              )}
              <SelectForm
                setValue={setAccept}
                title="Aceita lançamentos"
                itens={aceptItens}
                selected={accept}
              />
            </>
          ) : (
            <GS.Error>Esta conta não pode receber lançamentos</GS.Error>
          )}
        </GS.ContentContainer>
      </GS.Container>
    </>
  );
}
