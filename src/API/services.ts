import axios from "axios";

export async function getUser(username: string) {
  const response = axios.get(
    `https://api.github.com/users/${username}`,
    {
      headers: {
        Authorization: 'token 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'
      }
    }
  );
  return response;
}

export async function getRepos(username: string) {
  const response = axios.get(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: 'token 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'
      }
    }
  );
  return response;
}


