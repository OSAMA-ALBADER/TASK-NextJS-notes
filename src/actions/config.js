import { getToken } from "@/lib/token";

const baseUrl = "https://task-react-auth-backend.eapi.joincoded.com/api";

async function getHeaders() {
  const headers = new Headers();
  const token = await getToken();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);
  // Add an authorization header

  return headers;
}

export { getHeaders, baseUrl };
