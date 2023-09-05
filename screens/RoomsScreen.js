import React from "react";
import { StyleSheet, FlatList } from "react-native";
import RoomGridTile from "../components/RoomGridTile";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { fetchRooms } from "../util/http";

function RoomsScreen({ navigation }) {
  const [rooms, setRooms] = React.useState();

  React.useEffect(() => {
    async function fetchedRooms() {
      const rooms = await fetchRooms();
      setRooms(rooms?.products);
    }
    fetchedRooms();
  }, []);

  function renderCategoryItem(itemData) {
    const handleRoomSelection = () => {
      navigation.navigate("RoomDetails", { roomId: itemData.item.id });
    };
    return (
      <RoomGridTile title={itemData.item.id} onPress={handleRoomSelection} />
    );
  }

  return !rooms ? (
    <LoadingOverlay />
  ) : (
    <FlatList
      style={styles.container}
      data={rooms}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default RoomsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
