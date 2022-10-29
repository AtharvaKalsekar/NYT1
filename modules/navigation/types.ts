import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Article } from "@models";
import { Screens } from "@common";

export type StackNavParamList = {
  [Screens.MAIN]: {};
  [Screens.ARTICLE]: Article;
};

export type StackNavProps = NativeStackNavigationProp<StackNavParamList>;
