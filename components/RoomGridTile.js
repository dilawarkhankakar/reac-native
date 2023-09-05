import React from "react";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

function RoomGridTile({ title, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.pressablePressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Room {title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default RoomGridTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    //For IOS Shadow
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#75a5bd",
  },
  pressable: {
    flex: 1,
  },
  pressablePressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
