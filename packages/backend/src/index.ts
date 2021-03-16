import WebSocket from "ws";

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws, req) => {
  ws.on("message", msg => {
    wss.clients.forEach(client => {
      if(client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(msg)
      }
    })
  })
})