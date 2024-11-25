import express from "express";
import multer from "multer";
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";
import cors from "cors";

// Para Windows
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//       cb(null, file.originalname);
//   }
// });

// const upload = multer({ dest: "./uploads" , storage});

// Para Linux ou Mac
const upload = multer({ dest: "./uploads" });

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
};

const routes = (app) => {
  // Habilita o middleware para analisar o corpo das requisições JSON. Isso é necessário para lidar com dados enviados em formato JSON.
  app.use(express.json()); 

  app.use(cors(corsOptions));
  // Define uma rota GET para a URL "/posts".
  app.get("/posts", listarPosts);
  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);
  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;
