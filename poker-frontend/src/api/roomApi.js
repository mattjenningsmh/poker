export async function fetchRooms(signal) {
  const response = await fetch("/api/rooms", { signal });

  if (!response.ok) {
    throw new Error(`Failed to load rooms: ${response.status}`);
  }

  return response.json();
}