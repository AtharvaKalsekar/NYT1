import { Dropdown as RNDropdown } from 'react-native-element-dropdown';
import { DropdownProps as RNDropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';

type DropdownProps = RNDropdownProps;

export const Dropdown = ({
  data,
  labelField,
  valueField,
  onChange,
  ...rest
}: DropdownProps) => {
  return (
    <RNDropdown
      data={data}
      labelField={labelField}
      valueField={valueField}
      onChange={onChange}
      {...rest}
    />
  );
};
