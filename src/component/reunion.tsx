let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD DE CE JOUR

export const INITIAL_REUNION = [
  {
    id: createEventId(),
    title: "Notre jour",
    start: todayStr,
  },
];

export function createEventId() {
  return String(eventGuid++);
}
