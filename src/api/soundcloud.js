const API_URL = "https://api-v2.soundcloud.com";
const CLIENT_ID = "gKYCxmS0g4KAnhstUNsvpgbR17V4PpFx";

// 🔎 поиск треков
export async function searchTracks(query, limit = 10) {
  const res = await fetch(
    `${API_URL}/search/tracks?q=${encodeURIComponent(query)}&client_id=${CLIENT_ID}&limit=${limit}`
  );
  const data = await res.json();
  return data.collection; // массив треков
}

// 📂 получить плейлист
export async function getPlaylist(playlistId) {
  const res = await fetch(
    `${API_URL}/playlists/${playlistId}?client_id=${CLIENT_ID}`
  );
  return await res.json();
}

// ▶️ проигрывание трека
export function playTrack(track) {
  const audio = new Audio(`${track.stream_url}?client_id=${CLIENT_ID}`);
  audio.play();
  return audio;
}
