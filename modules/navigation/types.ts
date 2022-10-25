import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Article } from "@models";

export type StackNavParamList = {
  Main: {};
  Article: Article;
};

export type StackNavProps = NativeStackNavigationProp<StackNavParamList>;
