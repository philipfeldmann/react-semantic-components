/**
 * Callback without arguments that returns nothing.
 * Commonly used for simple callbacks.
 * @alias VoidFunction
 */
export type VoidCallback = VoidFunction;

/**
 * Consumes a `T` and returns nothing.
 * Commonly used for callbacks with a single value.
 * @example
 * const callback: Consumer<string> = val => console.log(val);
 */
export type Consumer<T> = (value: T) => void;

/**
 * Supplies a `T` by returning it without taking any arguments.
 * Commonly used for factory functions.
 * @example
 * const helloFactory: Supplier<string> = () => "Hello";
 */
export type Supplier<T> = () => T;

/**
 * Represents an operation on a single operand of type `T` that produces a result of the same type as its operand.
 * Commonly used for operational functions, for example mapping.
 * @example
 * const sayHelloOperand: UnaryOperator<string> = name => `Hello, ${name}`;
 * ["Bob", "Alice"].map(sayHelloOperand).forEach(console.log);
 */
export type UnaryOperator<T> = (value: T) => T;

/**
 * Represents a transformation of a `T` into a `K`.
 * Commonly used for parameterized factory functions.
 * @example
 * const childrenFactory: Transformer<string, ReactNode> = (input) => <span>{input}</span>;
 */
export type Transformer<T, K> = (value: T) => K;
