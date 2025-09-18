export async function getToken() {
  const clientId = "c384e527b29a44a386c6b0578c2332d3";
  const clientSecret = "75acf1d4f91c4d509317cf383e6043d2";

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + btoa(clientId + ":" + clientSecret)
    },
    body: "grant_type=client_credentials"
  });

  const data = await res.json();
  return data.access_token;
}
