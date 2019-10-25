import { Consumer } from "./operations";

/**
 * Bind a single value of `T` to a component.
 * The implementing component should delegate state changes to the parent,
 * by triggering the `onChange` callback whenver an update is desired.
 * @example
 * interface CounterProps extends ValueBinding<number> {}
 * const CustomInput: FunctionComponent<CounterProps> = ({onChange, value}) => {
 *  return (
 *    <>
 *      <h1>Count: {value}</h1>
 *      <button onClick={() => onChange(value+1)}>increase</button>
 *    </>
 *  )
 *}
 */
export interface ValueBinding<T> {
  value: T;
  onChange: Consumer<T>;
}

/**
 * Similar to `ValueBinding` but allows to bind multiple options of type `T` that
 * are selectable within the component.
 */
export interface ValueSelectable<T> extends ValueBinding<T> {
  options: T[];
}
