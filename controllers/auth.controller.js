import {
  exchangeCodeForToken,
  getGitHubUser,
} from "../services/github.service.js";

export async function handleGitHubLogin(req, res) {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "Missing authorization code" });
  }

  try {
    const data = await exchangeCodeForToken(code);
    console.log("🔁 GitHub'dan gelen cevap:", data);

    if (data.error) {
      return res
        .status(400)
        .json({ error: "GitHub token exchange failed", details: data });
    }

    return res.json({ access_token: data.access_token });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Internal server error", details: err.message });
  }
}

export async function handleGitHubCallback(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("Missing code");
  }

  // code'u kullanma — sadece redirect et
  return res.redirect(`https://ahmetrecepoglu.wal.app/?code=${code}`);
}
