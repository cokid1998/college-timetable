import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { createEventHTML } from "./util";
import { SUBJECT_INFO } from "./data/subjectInfo";
import Layout from "./layout";

const calendarOptions = {
  isReadOnly: true,
  events: SUBJECT_INFO,
  week: {
    dayNames: ["일", "월", "화", "수", "목", "금", "토"],
    workweek: true,
    hourStart: 8,
    hourEnd: 20,
    taskView: false,
    eventView: ["time"],
  },
};

const template = {
  time(event = SUBJECT_INFO[0]) {
    const { title, location, start } = event;
    return createEventHTML(title, location, start);
  },
};

const theme = {
  week: {
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
};

function App() {
  return (
    <Layout>
      <Calendar
        height="100svh"
        template={template}
        theme={theme}
        {...calendarOptions}
      />
    </Layout>
  );
}

export default App;
