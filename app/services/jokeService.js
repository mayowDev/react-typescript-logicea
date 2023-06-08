import http from "./httpService";
import { apiUrl } from "../config.ts";

const apiEndpoint = apiUrl;

function jokeUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getJokes() {
  return http.get(apiEndpoint);
}


export async function getJoke(jokeId) {
  const res = await fetch(jokeUrl(jokeId));
  const joke = await res.json();
  return joke;
}

export function saveJoke(joke) {
  if (joke.id) {
    const body = { ...joke };
    delete body.id;
    return http.put(jokeUrl(joke.id), body);
  }

  return http.post(apiEndpoint, joke);
}

export function deleteJoke(jokeId) {
  return http.delete(jokeUrl(jokeId));
}