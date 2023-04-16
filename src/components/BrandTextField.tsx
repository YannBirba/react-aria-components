import { ChangeEvent } from "react";
import {
  Input,
  InputProps,
  Label,
  LabelProps,
  TextField,
  TextFieldProps,
} from "react-aria-components";

export type BrandTextFieldProps = {
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  name: string;
  type: string;
  textFieldProps?: Omit<TextFieldProps, "children">;
  labelProps?: LabelProps;
  inputProps?: Omit<
    InputProps,
    "value" | "onChange" | "defaultValue" | "name" | "type"
  >;
};

export const BrandTextField = ({
  label,
  value,
  onChange,
  defaultValue,
  name,
  type,
  labelProps,
  inputProps,
  textFieldProps,
}: BrandTextFieldProps) => {
  return (
    <TextField {...textFieldProps}>
      <Label {...labelProps}>{label}</Label>
      <Input
        {...inputProps}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        name={name}
        type={type}
      />
    </TextField>
  );
};
