import http from "k6/http";
import { sleep } from "k6";
import { check } from "k6";

export const options = {
  vus: 1000,
  duration: "2s"
};

export default () => {
  http.get("https://reqres.in/");
  sleep(1);
};
