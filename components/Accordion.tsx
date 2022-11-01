import { Ionicons } from '@expo/vector-icons';
import { Section } from '@models';
import { useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Divider } from './Divider';

export type AccordionItem = {
  id: string;
  label: string;
  value: Section;
};

type AccordionProps = {
  items: any[];
  alreadySelectedItems?: any[];
  onSelect: (selectedItem: any) => void;
  header: string;
  itemIdKey: string;
  displayKey: string;
};

const isItemSelected = (
  selectedItems: any[],
  selectedItem: any,
  itemIdKey: string
): boolean => {
  return !!selectedItems.find(
    (item) => item[itemIdKey] === selectedItem[itemIdKey]
  );
};

export const Accordion = ({
  header,
  items,
  displayKey,
  onSelect,
  itemIdKey,
  alreadySelectedItems = [],
}: AccordionProps) => {
  const [showItems, setShowItems] = useState<boolean>(false);

  const [selectedItems, setSelectedItems] =
    useState<any[]>(alreadySelectedItems);

  const onPressItem = useCallback(
    (selectedItem: any, itemIdKey: string) => {
      setSelectedItems((selectedItems: any[]) => {
        const isAlreadySelected = isItemSelected(
          selectedItems,
          selectedItem,
          itemIdKey
        );

        if (isAlreadySelected) {
          return [
            ...selectedItems.filter(
              (si) => si[itemIdKey] !== selectedItem[itemIdKey]
            ),
          ];
        }

        return [...selectedItems, selectedItem];
      });
      onSelect(selectedItem);
    },
    [onSelect]
  );

  const toggleAccordion = useCallback(() => {
    setShowItems((showItems) => !showItems);
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{
          color: "#9bdbfa",
        }}
        onPress={toggleAccordion}
      >
        <View style={styles.headerContinaer}>
          <Text style={styles.headerText}>{header}</Text>
          <Ionicons
            name={showItems ? "chevron-up" : "chevron-down"}
            size={24}
            color="black"
          />
        </View>
        <Divider />
      </Pressable>
      {showItems && (
        <View style={styles.itemsContinaer}>
          {items.map((item) => {
            const isCurrentItemSelected = isItemSelected(
              selectedItems,
              item,
              itemIdKey
            );
            return (
              <Pressable
                key={item[itemIdKey]}
                android_ripple={{
                  color: "#9bdbfa",
                }}
                style={[
                  styles.item,
                  isCurrentItemSelected && styles.selectedItem,
                ]}
                onPress={() => onPressItem(item, itemIdKey)}
              >
                <Text
                  style={[
                    styles.itemText,
                    isCurrentItemSelected && styles.selectedItemText,
                  ]}
                >
                  {item[displayKey]}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  headerContinaer: {
    marginVertical: 5,
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemsContinaer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
    fontSize: 11,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 3,
    marginVertical: 5,
  },
  selectedItem: {
    backgroundColor: "#9bdbfa",
    color: "#fff",
  },
  itemText: {
    color: "#000",
    fontSize: 11,
  },
  selectedItemText: {
    color: "#fff",
  },
});
