export async function getTasks() {
  try {
    const res = await fetch(`http://localhost:3000/api/tasks`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
