## A custom hook for react: useForwardedRef

### Demo (Codepen)

https://codepen.io/ferdotnet/pen/gOKKxNr

### Install

```yarn add @ferdotnet/use-forwarded-ref```

### How to use it?

```
const Button = forwardRef(({ text }, ref) => {
  const safeRef = useForwardedRef(ref);
  useRipple(safeRef);
  
  return (
    <button className="button" ref={safeRef as React.RefObject<HTMLButtonElement>}>
      {text}
    </button>
  );
});
```
