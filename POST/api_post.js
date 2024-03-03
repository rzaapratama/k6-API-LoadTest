import http from "k6/http";
import { check } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 1000,
  duration: "2s"
};

export default () => {
  const url = "https://reqres.in/api/users";

  const payload = JSON.stringify({
    name: "morpheus",
    job: "leader"
  });

  const params = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = http.post(url, payload, params);
  check(response, {
    "Status code is 201": (r) => r.status === 201,
    "Response body have name": (r) => r.body.includes("morpheus")
  });
};

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data)
  };
}
