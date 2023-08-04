import React, { createContext, useContext, ReactNode } from "react";

import { useFetchPlans } from "@hooks/useFetchPlans";
import { PlanProps } from "@type/plans";
import { useDeletePlans } from "@hooks/useDeletePlans";

export type PlansContextType = {
  plans: PlanProps[];
  setPlans: React.Dispatch<React.SetStateAction<PlanProps[]>>;
  loading: boolean;
  error: unknown | string;
  fetchPlans: () => Promise<void>;
  deletePlan: (code: string) => Promise<void>;
};

export const PlansContext = createContext<PlansContextType | undefined>(
  undefined
);

type PlansProviderProps = {
  children: ReactNode;
};

export const PlansProvider: React.FC<PlansProviderProps> = ({ children }) => {
  const { plans, setPlans, loading, error, fetchPlans } = useFetchPlans();
  const { deletePlan } = useDeletePlans();

  return (
    <PlansContext.Provider
      value={{ plans, setPlans, loading, error, fetchPlans, deletePlan }}
    >
      {children}
    </PlansContext.Provider>
  );
};

export const usePlans = (): PlansContextType => {
  const context = useContext(PlansContext);
  if (!context) {
    throw new Error("usePlans deve ser usado dentro de um PlansProvider");
  }
  return context;
};
