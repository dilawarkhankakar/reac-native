import React from "react";
import { fetchSelectedRoomDetails } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import Room from "../components/Room";

function RoomDetailsScreen({ route, navigation }) {
  const roomId = route.params.roomId;
  const [selectedRoom, setSelectedRoom] = React.useState();

  React.useEffect(() => {
    async function fetchedRooms() {
      const room = await fetchSelectedRoomDetails(roomId);
      setSelectedRoom(room);
    }
    fetchedRooms();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: `Room ${roomId}` });
  }, [roomId, navigation]);

  return !selectedRoom ? <LoadingOverlay /> : <Room room={selectedRoom} />;
}

export default RoomDetailsScreen;
