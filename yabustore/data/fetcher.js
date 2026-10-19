export async function fetcher(url) {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("Failed to fetch data");
    error.status = response.status;
    throw error;
  }

  return response.json();
}