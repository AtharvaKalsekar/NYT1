import { Divider } from '@components';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { SectionAccordion } from './SectionAccordion';

export const FilterMenu = () => {
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ScrollView>
          <SectionAccordion />
        </ScrollView>
        <View style={styles.filterActionsContainer}>
          <Divider />
          <View style={styles.filterActions}>
            <Pressable
              android_ripple={{ color: "rgba(0,0,0,0.4)" }}
              style={styles.buttonContainer}
            >
              <Text style={styles.clearButton}>Clear all</Text>
            </Pressable>
            <Pressable
              android_ripple={{ color: "rgba(0,0,0,0.4)" }}
              style={styles.buttonContainer}
            >
              <Text style={styles.cancelButton}>Cancel</Text>
            </Pressable>
            <Pressable
              android_ripple={{ color: "rgba(0,0,0,0.4)" }}
              style={styles.buttonContainer}
            >
              <Text style={styles.saveButton}>Apply</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    right: 0,
    width: "40%",
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
    width: "30%",
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