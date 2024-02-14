import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";

const initialEvents = [
  {
    id: "1",
    calendarId: "cal1",
    title: "Lunch",
    category: "time",
    body: "TOAST UI Calendar",
    start: "2024-02-14T10:00:00",
    end: "2024-02-14T12:30:00",
    backgroundColor: "#03bd9e",
    location: "Meeting Room A",
    customStyle: {
      borderLeft: "0px solid transparent",
    },
    raw: "asdf",
  },
];

const calendarOptions = {
  isReadOnly: true,
  events: initialEvents,
  week: {
    startDayOfWeek: 1,
    dayNames: ["일", "월", "화", "수", "목", "금", "토"],
    workweek: true,
    hourStart: 8,
    hourEnd: 20,
    taskView: false,
    eventView: ["time"],
  },
};

function App() {
  return (
    <div>
      <Calendar
        {...calendarOptions}
        height="100svh"
        theme={{
          week: {
            dayGrid: {},
            dayGridLeft: {
              width: "45px",
            },
            timeGridLeft: {
              width: "40px",
            },
            timeGridHalfHourLine: {
              borderBottom: "1px dotted #e5e5e5",
            },
            nowIndicatorLabel: {
              color: "#515DE6",
            },
            nowIndicatorBullet: {
              backgroundColor: "#515ce6",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
