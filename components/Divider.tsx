import { StyleSheet, View } from 'react-native';

type DividerProps = {
  color?: string;
};

export const Divider = ({ color = "black" }: DividerProps) => {
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
};
