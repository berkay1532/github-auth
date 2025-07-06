import fetch from "node-fetch";
import { githubConfig } from "../config/github.config.js";

export async function exchangeCodeForToken(code) {
  const res = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: githubConfig.clientId,
      client_secret: githubConfig.clientSecret,
      code,
      redirect_uri: githubConfig.redirectUri, // backend'e ayarlanmalı
    }),
  });

  return res.json();
}

export async function getGitHubUser(access_token) {
  const res = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${access_token}`,
      Accept: "application/json",
    },
  });

  return res.json();
}
