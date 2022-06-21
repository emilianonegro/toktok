import bodyParser from "body-parser";
import Server from "./classes/server";
// import router from "./routes/router"; i commented this for now because is not done
import cors from "cors";

const server = Server.instance;

//Body parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

//CORS
server.app.use(cors({ origin: true, credentials: true }));

// server.app.use("/room", router);  i commented this for now because is not done

server.start(() => {
  console.log("Servidor corriendo en el puerto " + server.port);
});
