/**
 * Component with extendable style.
 */
export interface StyleChangeable {
  style: string;
}

/**
 * Component with extendable class.
 */
export interface ClassChangeable {
  className: string;
}

/**
 * Component with extendable style and class.
 */
export interface AppearanceChangeable extends StyleChangeable, ClassChangeable {}
