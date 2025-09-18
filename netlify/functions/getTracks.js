import fetch from "node-fetch"; // обязательно в package.json добавить "type": "module"

const clientId = "c384e527b29a44a386c6b0578c2332d3";
const clientSecret = "75acf1d4f91c4d509317cf383e6043d2";

export async function handler() {
  try {
    // Получаем токен Spotify
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + Buffer.from(clientId + ":" + clientSecret).toString("base64")
      },
      body: "grant_type=client_credentials"
    });

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // Получаем треки плейлиста
    const res = await fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks", {
      headers: { Authorization: "Bearer " + accessToken }
    });

    const data = await res.json();

    // Формируем упрощённые данные
    const tracks = data.items.map(item => ({
      title: item.track.name,
      artist: item.track.artists.map(a => a.name).join(", "),
      cover: item.track.album.images[0]?.url,
      audio: item.track.preview_url
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(tracks)
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
}
