// src/api/getTracks.js
export async function getTracks() {
  const res = await fetch("/.netlify/functions/getTracks"); // обращаемся к нашей функции
  const data = await res.json();
  return data;
}
