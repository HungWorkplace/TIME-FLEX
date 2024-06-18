import * as React from "react";
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";

export const NumberInput = React.forwardRef(function NumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
      }}
      {...props}
      ref={ref}
    />
  );
});

const StyledInputRoot = styled("div")(
  () => `
  font-weight: 400;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 3px 0;
`
);

const StyledInput = styled("input")(
  () => `
  font-size: 0.8125rem;
  border: 1px solid #dae2ed;
  border-radius: 0.375rem;
  color: gray;
  outline: 0;
  height: 100%;
  min-width: 0;
  width: 2rem;
  text-align: center;

  &:focus-visible {
    outline: 0;
  }
`
);
