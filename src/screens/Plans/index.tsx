import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";

import { useFocusEffect } from "@react-navigation/native";

import { usePlans } from "@context/PlansContext";

import { Header } from "@components/Header";
import { List } from "@components/List";
import { InputForm } from "@components/InputForm";

import * as GS from "@assets/css/global";
import * as S from "./styles";
import { useSearchPlans } from "@hooks/useSearchPlans";

export function Plans() {
  const { plans, setPlans, loading, fetchPlans } = usePlans();
  const { searchPlan } = useSearchPlans();
  const [search, setSearch] = useState("");

  const handleSearch = async (search: string) => {
    const data = await searchPlan(search);
    if (data) {
      setPlans(data);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchPlans();
    }, [])
  );  

  useEffect(() => {
    console.log(plans);
    if (search.length > 0) {
      handleSearch(search);
    } else {
      fetchPlans();
    }
  }, [search]);

  return (
    <>
      <GS.Container>
        <Header showActionButton="plus" title="Plano de Contas" />
        <InputForm
          setValue={setSearch}
          value={search}
          showSearchIcon
          placeholder="Pesquisar conta"
        />
        <GS.ContentContainer>
          {loading ? (
            <S.HeaderList>
              <S.Title>Carregando listagem</S.Title>
            </S.HeaderList>
          ) : (
            <>
              <S.HeaderList>
                <S.Title>Listagem</S.Title>
                <S.Subtitle>{plans.length} registros</S.Subtitle>
              </S.HeaderList>

              <FlatList
                data={plans}
                keyExtractor={(item) => Object.values(item)[0].code}
                renderItem={({ item }) => {
                  const planDetails = Object.values(item)[0];
                  return (
                    <List
                      debit={planDetails.type}
                      code={planDetails.code}
                      name={`${planDetails.code} - ${planDetails.name}`}
                    />
                  );
                }}
              />
            </>
          )}
        </GS.ContentContainer>
      </GS.Container>
    </>
  );
}
