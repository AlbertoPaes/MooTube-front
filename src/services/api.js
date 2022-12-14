import axios from 'axios';

export const api = axios.create({
  baseURL: ''
})


export const makeRoom = async (roomData) => {
  const promise = api.post(`rooms/${roomData.roomName}`, roomData);
  return promise;
}

export const getRoom = async (roomName) => {
  return api.get(`/rooms/${roomName}`)
}