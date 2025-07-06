import dotenv from "dotenv";
dotenv.config();

export const githubConfig = {
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  redirectUri: "http://localhost:3030/auth/callback",
};
