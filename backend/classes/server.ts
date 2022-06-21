import express from "express";
import { config } from "../enviroment/enviroment";
import socketIO, { Socket } from "socket.io";
import http from "http";
import * as socket from "../sockets/sockets";
import mongoose from "mongoose";

export default class Server {
  private static _instance: Server;
  public app: express.Application;
  private httpServer: http.Server;
  public io: socketIO.Server;

  public portFrontend: string;
  public port: number;

  private constructor() {
    this.app = express();
    this.port = config.server.port;
    this.portFrontend = config.frontend.port;

    this.httpServer = new http.Server(this.app);
    this.io = new socketIO.Server(this.httpServer, {
      cors: { origin: this.portFrontend, credentials: true },
    });

    this.listenSockets();
    this.connectMongoDb();
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private listenSockets() {
    this.io.on("connection", (client: Socket) => {
      socket.conectClient(client, this.io);
      //   socket.userConfig(client, this.io);
      //   socket.userConfigRoom(client, this.io);
      //   socket.disconect(client, this.io);
      //   socket.userJoin(client, this.io);
      //   socket.newUser(client, this.io);
      //   socket.newMessage(client, this.io);
      //   socket.newRoomShow(client, this.io);
      //   socket.roomDeleted(client, this.io);
    });
  }

  private connectMongoDb() {
    mongoose
      .connect(config.mongo.url)
      .then(() => {
        console.info("Connected to mongoDB");
      })
      .catch(error => {
        console.error("Unable to connect");
        console.error(error);
      });
  }

  start(callback: any) {
    this.httpServer.listen(this.port, callback);
  }
}
