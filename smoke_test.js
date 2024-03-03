import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 3, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: "10s" // This can be shorter or just a few iterations
};

export default () => {
  const urlRes = http.get("https://test-api.k6.io");
  sleep(1);
};
