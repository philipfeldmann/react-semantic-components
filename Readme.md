# Common interfaces for react components

## Consistency

The purpose of this package is to provide utility interfaces for building react component with consistent interfaces.
As soon as a project starts to scale up, you'll usually find the same behaviour defined in multiple ways across components.

A simplified example might have these two components that share the same behaviour but still have different interfaces.

```tsx
<FirstComponent value={firstVal} onSelect={(val) => setFirstVal(val))} />
<SecondComponent current={firstVal} onChange={(val) => setSecondVal(val))} />
```

Both of these packages have a _current value_ and a _callback_ that triggers, when this value changes.
This package tries to tackle that problem and bring back consistency.

## Easier and consistent typing

On top of consistency, typing becomes far more expressive in certain scenarios.
Imagine having a host component that can dynamically render a **select** component that it receives via props.
If all of your **select** components extend the `ValueSelectable` interface, you can easily type the props of your host component like so:

```ts
interface HostComponentProps {
  selectComponent: FunctionComponent<ValueSelectable>;
}
```

`HostComponent` would then allow you to dynamically switch the implementation of its select component at runtime while still being completely typesafe.
