import { Badge, BadgePosition, Divider } from '@components';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppDispatch, applyFilters, clearAllFilters, FiltersState, RootState } from '@store';
import { StackNavProps } from 'modules/navigation';
import { ReactNode, useCallback, useLayoutEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { SectionAccordion } from './SectionAccordion';

type FilterMenuProps = {
  children?: ReactNode | ReactNode[];
};

export const FilterMenu = ({ children }: FilterMenuProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { setOptions } = useNavigation<StackNavProps>();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const { appliedFilters } = useSelector<RootState, FiltersState>(
    (state) => state.filters
  );

  const onApplyFilters = useCallback(() => {
    dispatch(applyFilters());
    setToggleMenu(false);
  }, []);

  const onClearAllFilters = useCallback(() => {
    dispatch(clearAllFilters());
  }, []);

  const onPressMenu = useCallback(() => {
    setToggleMenu((toggleMenu) => !toggleMenu);
  }, []);

  useLayoutEffect(() => {
    setOptions({
      headerRight: ({ tintColor }) => (
        <View style={styles.menuIconContainer}>
          {appliedFilters.length > 0 && (
            <Badge
              num={appliedFilters.length}
              position={BadgePosition.TOP_RIGHT}
            />
          )}
          <Ionicons
            onPress={onPressMenu}
            color={tintColor}
            size={20}
            name="filter-outline"
          />
        </View>
      ),
    });
  }, [setOptions, appliedFilters, onPressMenu]);

  return (
    <>
      {children}
      {toggleMenu && (
        <View style={styles.overlay}>
          <View style={styles.container}>
            <ScrollView>
              <SectionAccordion />
            </ScrollView>
            <View style={styles.filterActionsContainer}>
              <Divider />
              <View style={styles.filterActions}>
                <Pressable
                  android_ripple={{ color: "rgba(255,255,255,0.4)" }}
                  style={styles.buttonContainer}
                  onPress={onClearAllFilters}
                >
                  <Text style={styles.clearButton}>Clear all</Text>
                </Pressable>
                <Pressable
                  android_ripple={{ color: "rgba(255,255,255,0.4)" }}
                  style={styles.buttonContainer}
                  onPress={onApplyFilters}
                >
                  <Text style={styles.saveButton}>Apply</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  menuIconContainer: {
    padding: 5,
    marginRight: 5,
  },
  container: {
    top: 0,
    right: 0,
    width: "50%",
    height: "100%",
    position: "absolute",
    backgroundColor: "white",
  },
  overlay: {
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(25,25,25,0.4)",
  },
  filterActionsContainer: {
    width: "100%",
    backgroundColor: "white",
  },
  filterActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  buttonContainer: {
    marginHorizontal: 4,
  },
  clearButton: {
    color: "black",
    borderRadius: 3,
    padding: 8,
    textAlign: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    fontSize: 12,
    textTransform: "uppercase",
  },
  cancelButton: {
    color: "white",
    borderRadius: 3,
    padding: 10,
    textAlign: "center",
    backgroundColor: "red",
    fontSize: 12,
    textTransform: "uppercase",
  },
  saveButton: {
    color: "white",
    borderRadius: 3,
    padding: 10,
    textAlign: "center",
    backgroundColor: "green",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
