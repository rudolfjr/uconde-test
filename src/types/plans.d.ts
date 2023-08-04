export type PlanItemProps = {
  code: string;
  name: string;
  type: string;
  accept: string;
  father?: string;
};

export type PlanProps = {
  [id: string]: PlanItemProps;
};
