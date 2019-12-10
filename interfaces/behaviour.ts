import { Consumer } from "./operations";

/**
 * Emits a value that might change to the parent.
 * @example
 * interface RandomNumberProps extends ChangeNotifier<number> {}
 * const RandomEmitter: FunctionComponent<RandomNumberProps> = ({onChange}) => {
 *  return (
 *    <>
 *      <button onClick={() => onChange(Math.random())}>increase</button>
 *    </>
 *  )
 *}
 */
export interface ChangeNotifier<T> {
  onChange: Consumer<T>;
}

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
export interface ValueBinding<T> extends ChangeNotifier<T> {
  value: T;
}

/**
 * Similar to `ValueBinding` but allows to bind multiple options of type `T` that
 * are selectable within the component.
 */
export interface ValueSelectable<T> extends ValueBinding<T> {
  options: T[];
}
