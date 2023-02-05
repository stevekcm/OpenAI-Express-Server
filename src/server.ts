import app from "./app";
import http from "http";

//init server
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.set("port", port);

server.listen(port);
server.address();

console.log("Service is litening on " + port);
