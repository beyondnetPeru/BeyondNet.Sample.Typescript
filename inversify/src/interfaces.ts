export type Props = {
  target?: string;
  value: object;
};
export interface ISimpleSample {
  Run(props: Props): void;
}

export const GlobalSymbols = {
  SimpleSample: Symbol("SimpleSample"),
};
