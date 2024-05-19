import express from "express";
import path from "path";

export const startServer = (options) => {
  const { port, public_path = "public" } = options;

  const app = express();

  app.use(express.static(public_path)); // contenido estatico disponible

  app.get("*", (req, res) => {
    const indexPatch = path.join(__dirname + `../../../${public_path}/index.html`);
    res.sendFile(indexPatch);
  });

  app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
  });
};