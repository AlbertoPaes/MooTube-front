import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { makeRoom } from "../services/api";

export const DataContext = createContext();

export const DataProvider = ( {children} ) => {
  const navigate = useNavigate();

  const joinRoom = async (roomData) => {
    try {
      navigate(`/rooms/${roomData.roomName}`);
    } catch {
      alert("There was an error in the data, please fill it in again!");
    }
  }

  const createRoom = async (roomData) => {
    try {
      await makeRoom(roomData);
      navigate(`/rooms/${roomData.roomName}`);
    } catch {
      alert("Something went wrong and your room was not created, please fill it in again!");
    }
  }

  return (
    <DataContext.Provider value= { { joinRoom, createRoom } }>
      {children}
    </DataContext.Provider>
  );
}