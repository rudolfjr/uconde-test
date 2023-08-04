import { plansGetAll } from "@storage/plans/plansGetAll";
import { PlanProps } from "@type/plans";
import { useEffect, useState } from "react";

export const useFetchPlans = () => {
  const [plans, setPlans] = useState<PlanProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | string>(null);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const data = await plansGetAll();
      setPlans(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return { plans, loading, error, setPlans, fetchPlans };
};
