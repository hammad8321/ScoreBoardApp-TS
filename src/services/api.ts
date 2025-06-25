// src/services/api.ts
import axios from 'axios';
import { PlayerType } from '../types/player';

const API = axios.create({
  baseURL: 'https://localhost:44378/api/Players',  // https://localhost:44378/api/Players
  headers: {
    'Content-Type': 'application/json',
  },
});

//export const fetchPlayers = () => API.get<PlayerType[]>('/');


export const fetchPlayers = () => {
  console.log("🔍 [API] Fetching players...");
  return API.get<PlayerType[]>('/')
    .then((res) => {
      console.log("✅ [API] Players fetched:", res.data);
      return res;
    })
    .catch((err) => {
      console.error("❌ [API] Fetch failed:", err);
      throw err;
    });
};


export const addPlayer   = (player: Omit<PlayerType, 'id'>) => API.post<PlayerType>('/', player);
export const updatePlayer = (player: PlayerType)       => API.put(`/${player.id}`, player);
export const deletePlayer = (id: number)               => API.delete(`/${id}`);
