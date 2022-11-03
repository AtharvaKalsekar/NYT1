import { StyleSheet, Text, View } from 'react-native';

export enum BadgeSize {
  SMALL = "small",
  LARGE = "large",
}

export enum BadgePosition {
  DEFAULT = "default",
  TOP_RIGHT = "top-right",
}

const badgeDimensions = {
  [BadgeSize.SMALL]: {
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  [BadgeSize.LARGE]: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
};

const textDimensions = {
  [BadgeSize.SMALL]: {
    marginBottom: 1,
    fontSize: 7,
  },
  [BadgeSize.LARGE]: {
    marginTop: 1,
    fontSize: 12,
  },
};

const badgePlacement = {
  [BadgePosition.DEFAULT]: {},
  [BadgePosition.TOP_RIGHT]: {
    position: "absolute",
    right: 2,
    top: 4,
  },
};

type BadgeProps = {
  num: number;
  size?: BadgeSize;
  position?: BadgePosition;
};

export const Badge = ({
  num,
  size = BadgeSize.SMALL,
  position = BadgePosition.DEFAULT,
}: BadgeProps) => {
  return (
    <View
      style={[
        styles.badgeContainer,
        badgeDimensions[size],
        badgePlacement[position],
      ]}
    >
      <Text style={[styles.badgeText, textDimensions[size]]}>{num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    textAlign: "center",
    alignItems: "center",
    zIndex: 10,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "800",
  },
});
