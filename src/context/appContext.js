import io from "socket.io-client";
import React from "react";
const SOCKET_URL = "https://e-learning-backend.onrender.com";

export const socket = io.connect(SOCKET_URL);

export const AppContext = React.createContext();
