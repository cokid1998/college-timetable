class TimeTableEvent {
  private static readonly dateString: string = new Date()
    .toISOString()
    .slice(0, 11);
  private static idCounter: number = 1;
  private static year: number = 2024;

  id: string;
  calendarId: string;
  title: string;
  start: string;
  end: string;
  weekDay: "월" | "화" | "수" | "목" | "금";
  backgroundColor: string;
  location: string;
  customStyle: {
    borderLeft: string;
  };

  constructor(
    title: string,
    start: string,
    end: string,
    weekDay: "월" | "화" | "수" | "목" | "금",
    backgroundColor: string,
    location: string
  ) {
    this.id = TimeTableEvent.getNextId();
    this.calendarId = `cal${TimeTableEvent.getNextId()}`;
    this.title = title;
    this.start = `${TimeTableEvent.dateString}${start}`;
    this.end = `${TimeTableEvent.dateString}${end}`;
    this.weekDay = weekDay;
    this.backgroundColor = backgroundColor;
    this.location = location;
    this.customStyle = {
      borderLeft: "0px solid transparent",
    };
  }
  private static getNextId(): string {
    const nextId = TimeTableEvent.idCounter.toString();
    TimeTableEvent.idCounter++;
    return nextId;
  }

  private getDate() {
    const start = this.start;
    const end = this.end;
    console.log(start, end);
  }
}

export const SUBJECT_INFO = [
  new TimeTableEvent(
    "경영데이터처리",
    "10:00",
    "12:00",
    "월",
    "#03bd9e",
    "경상 5425 컴퓨터B"
  ),
  new TimeTableEvent(
    "점심시간",
    "12:00",
    "13:00",
    "월",
    "#03bd9e",
    "밥먹자 999🕊️"
  ),

  new TimeTableEvent(
    "데이터구조",
    "13:00",
    "14:00",
    "월",
    "#03bd9e",
    "IT 2104-2"
  ),
  {
    id: "1",
    calendarId: "cal2",
    title: "경영데이터처리",
    start: "2024-02-15T10:00",
    end: "2024-02-15T12:00",
    weekDay: "월",
    backgroundColor: "#03bd9e",
    location: "경상 5425 컴퓨터B",
    customStyle: {
      borderLeft: "0px solid transparent",
    },
  },
];
