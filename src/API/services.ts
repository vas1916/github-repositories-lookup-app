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


