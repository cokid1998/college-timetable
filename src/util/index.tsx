export const createEventHTML = (
  title: string,
  location: string,
  start: string
) => {
  function extractHourFromDate(dateString: string): number | null {
    try {
      const date = new Date(dateString);
      const hour = date.getHours();
      return hour;
    } catch (error) {
      console.error("Invalid date format");
      return null;
    }
  }

  return `
    <div style='display:flex; flex-direction:column;white-space: normal;gap:5px;'>
      <div style='font-size: 1rem;'>${extractHourFromDate(start)}시</div>
      <div style='font-size: 0.8rem;'>${title}</div>
      <div>${location}</div>
    </div>`;
};
