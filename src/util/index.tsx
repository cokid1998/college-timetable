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
    <div style='white-space: normal;'>
      <div style='font-size: 1rem;'>${extractHourFromDate(start)}시</div>
      
      <div style='font-size: 1rem;'>${title}</div>
      <br/>
      <div>${location}</div>
    </div>`;
};
