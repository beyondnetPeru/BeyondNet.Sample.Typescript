export interface ISample {
  Run(value: object): void;
}

export const GlobalTypes = {
  Sample: Symbol("Sample"),
};
