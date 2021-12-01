export interface IFormatter<TInput, TOutput> {
  Format(value: TInput): TOutput;
}
export interface IFormatterFactory<TInput, TOutput> {
  Factory(target: string): IFormatter<TInput, TOutput>;
}

export const FormatterSymbols = {
  Formatter: Symbol("Formatter"),
  FormatterFactory: Symbol("FormatterFactory"),
};
