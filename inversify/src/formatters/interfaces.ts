export interface IFormatter<TInput, TOutput> {
  Format(value: TInput): TOutput;
}

export const Types = {
  Formatter: Symbol("Formatter"),
};
