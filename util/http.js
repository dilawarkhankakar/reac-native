import axios from "axios";

const URL = "https://dummyjson.com/products";

export async function fetchRooms() {
  const response = await axios.get(`${URL}`);
  return response.data;
}

export async function fetchSelectedRoomDetails(id) {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
}
