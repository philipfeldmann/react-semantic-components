/**
 * Nullable utility type.
 */
export type Nullable<T> = T | null;

/**
 * Type with a unique ID.
 */
export type Identifiable<T> = {
  id: T;
};
