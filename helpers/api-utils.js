export const getAllEvents = async () => {
  const response = await fetch(
    'https://next-course-cf26e-default-rtdb.europe-west1.firebasedatabase.app/events.json'
  );
  const data = await response.json();
  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
};

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.id === id);
}
