const API_URL = (
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"
).replace(/\/+$/, "");

export async function apiRequest(path, options) {
  const response = await fetch(`${API_URL}${path}`, options);
  const body = await response.text();
  let data;

  try {
    data = body ? JSON.parse(body) : {};
  } catch {
    const preview = body.replace(/\s+/g, " ").slice(0, 120);
    throw new Error(
      `The backend returned HTML instead of JSON (HTTP ${response.status}). Check that VITE_API_URL points to the deployed Django API. ${preview}`
    );
  }

  if (!response.ok) {
    throw new Error(data.error || `Request failed (HTTP ${response.status}).`);
  }

  return data;
}
