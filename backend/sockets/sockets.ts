import { Socket } from "socket.io";
import socketIO from "socket.io";
import mongoose from "mongoose";
import RoomModel from "../models/Room.model";
import { User } from "../classes/user";
import { UserList } from "../classes/user-list";

export const usersOnline = new UserList();

export const conectClient = (client: Socket, io: socketIO.Server) => {
  const user = new User(client.id);
  usersOnline.addUser(user);
};

export const disconect = (client: Socket, io: socketIO.Server) => {
  client.on("disconnect", () => {
    usersOnline.deleteUser(client.id);
    io.emit("usuariosActivos", usersOnline.getList());
  });
};

export const userConfig = (client: Socket, io: socketIO.Server) => {
  client.on("configUser", (payload: { name: string }) => {
    usersOnline.updateUser(client.id, payload.name);

    io.emit("usuariosActivos", usersOnline.getList());
  });
};

let usuariosOnline: [][] = [];

export const userJoin = (client: Socket, io: socketIO.Server) => {
  client.on("join", data => {
    client.join(data.room);
    if (data.user != undefined) {
      usuariosOnline.push(data);
    }
    client.to(data.room).emit("newUserJoined", usuariosOnline);

    client.data.user = data;
  });
};

export const newMessage = (client: Socket, io: socketIO.Server) => {
  client.on("message", data => {
    let chatInfo = { user: data.user, message: data.message };

    RoomModel.findByIdAndUpdate(
      data.room,
      { $push: { chat: chatInfo } },
      { strict: false },
      err => {
        if (err) {
          return err.message;
        }
      }
    );

    client
      .to(data.room)
      .emit("newMessage", { user: data.user, message: data.message });
  });
};

export const roomDeleted = (client: Socket, io: socketIO.Server) => {
  client.on("roomDeleted", data => {
    RoomModel.findByIdAndDelete(data.roomId).then((room: any) => {
      room;
    });
    client.broadcast.emit("roomBeDeleted", data);
  });
};
