import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function Room({ room }) {
  //   console.log(room);
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={require("../assets/favicon.png")} />
      </View>
      <View style={styles.doctorInfoContainer}>
        <View style={styles.imagePreview}>
          <Image style={styles.image} source={{ uri: room.images[0] }} />
        </View>
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>Dr. {room.title}</Text>
          <Text style={styles.doctorDesignation}>{room.category}</Text>
          <Text style={styles.doctorDesignation}>{room.brand}</Text>
        </View>
      </View>
      <View style={styles.timeSlotContainer}>
        <View style={styles.timeHeading}>
          <Text style={styles.timeHeadingText}>Time Slot Details</Text>
        </View>
        <View>
          <Text style={styles.timeText}>5:00 PM - 10:00 PM</Text>
        </View>
      </View>
    </View>
  );
}

export default Room;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  doctorInfoContainer: {
    backgroundColor: "#75a5bd",
    padding: 10,
    flexDirection: "row",
    borderRadius: 4,
    gap: 10,
    overflow: "hidden",
  },
  imagePreview: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  doctorInfo: {
    justifyContent: "center",
  },
  doctorName: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  doctorDesignation: {
    fontSize: 12,
    color: "gray",
    marginBottom: 5,
  },
  timeSlotContainer: {
    backgroundColor: "#75a5bd",
    marginVertical: 10,
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  timeHeading: {
    width: "100%",
    height: 40,
    backgroundColor: "red",
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "gray",
  },
  timeHeadingText: {
    color: "white",
    fontWeight: "bold",
  },
  timeText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
