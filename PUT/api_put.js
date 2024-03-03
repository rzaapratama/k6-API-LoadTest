import http from "k6/http";
import { check } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 1000,
  duration: "2s"
};

export default () => {
  const url = "https://reqres.in/api/users/2";

  const headers = { "Content-Type": "application/json" };

  const payload = JSON.stringify({
    name: "morpheus",
    job: "zion resident"
  });

  const res = http.put(url, payload, headers);
  check(res, {
    "Status code is 200": (r) => r.status === 200
  });
};

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data)
  };
}
