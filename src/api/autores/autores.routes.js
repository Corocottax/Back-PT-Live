const { isAuth, isAdmin } = require("../../middlewares/auth");
const { postAutor, getAutores } = require("./autores.controller");

const AutoresRoutes = require("express").Router();

AutoresRoutes.post("/", [isAdmin], postAutor);
AutoresRoutes.get("/", getAutores);

module.exports = AutoresRoutes;