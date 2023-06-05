import http from "./httpService";
import { apiUrl } from "../config.js";

const apiEndpoint = apiUrl;

function jokeUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getJokes() {
  return http.get(apiEndpoint);
}


export function getJoke(jokeId) {
  return http.get(jokeUrl(jokeId));
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