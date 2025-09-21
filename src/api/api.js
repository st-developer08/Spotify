import axios from "axios";

export async function fetchDB() {
  try {
    const res = await axios.get("/db.json");
    return res.data;
  } catch (err) {
    console.error("Ошибка загрузки db.json:", err);
    throw err;
  }
}
