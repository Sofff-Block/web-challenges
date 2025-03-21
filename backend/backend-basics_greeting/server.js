import { createServer } from "node:http";

export const server = createServer((request, response) => {
  const url = request.url;
  response.end("Hello, Sofia!");
});
