import Localbase from "localbase";
const db = new Localbase("expenses");

db.config.debug = false;

export default db;
