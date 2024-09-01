const subjectColor = {
  운영체제: "#7BA5E9",
  생산: "#C16FCB",
  자바: "#03bd9e",
  소프트웨어: "#FFDB58",
  심화프로그래밍: "#3EE87F",
  경영영어: "#F7578C",
  알고리즘: "#fcaa68",
  데이터베이스: "#fcaa68",
};

class TimeTableEvent {
  private static idCounter: number = 1;

  id: string;
  calendarId: string;
  title: string;
  start: string;
  end: string;
  subjectWeekday: number;
  backgroundColor: string;
  location: string;
  customStyle: {
    borderLeft: string;
  };

  constructor(
    title: string,
    start: string,
    end: string,
    subjectWeekday: number,
    backgroundColor: string,
    location: string
  ) {
    this.id = TimeTableEvent.getNextId();
    this.calendarId = `cal${TimeTableEvent.getNextId()}`;
    this.title = title;
    this.start = `${TimeTableEvent.syncSubjectDate(subjectWeekday)}${start}`;
    this.end = `${TimeTableEvent.syncSubjectDate(subjectWeekday)}${end}`;
    this.subjectWeekday = subjectWeekday;
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

  private static syncSubjectDate = (subjectWeekday: number) => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const weekDay = new Date().getDay();

    if (day < 6) {
      const beforeMonthDay = new Date(year, month - 1, 0).getDate();
      const beforeDay = beforeMonthDay - (4 - subjectWeekday); // 4의 의미가 뭘까?? 요일은 5개인데...

      return `${year}-0${month - 1}-${beforeDay}T`;
    } else {
      const formatMonth = month < 10 ? `0${month}` : month;
      const subjectDay =
        day - (weekDay - subjectWeekday) < 10
          ? `0${day - (weekDay - subjectWeekday)}`
          : day - (weekDay - subjectWeekday);

      return `${year}-${formatMonth}-${subjectDay}T`;
    }
  };
}

// weekDay
// 0-일, 1-월, 2-화, 3-수, 4-목, 5-금, 6-토

const MONDAY_SUBJECT = [
  new TimeTableEvent(
    "운영체제",
    "12:00",
    "14:00",
    1,
    subjectColor.운영체제,
    "IT 3228"
  ),
];

const TUESDAY_SUBJECT = [
  // new TimeTableEvent(
  //   "생산",
  //   "10:00",
  //   "12:00",
  //   2,
  //   subjectColor.생산,
  //   "데이터베이스프로그래밍실습실 7225"
  // ),
  new TimeTableEvent(
    "자바",
    "13:00",
    "15:00",
    2,
    subjectColor.자바,
    "임베디드시스템및소프트웨어실습실 7210"
  ),
  new TimeTableEvent(
    "알고리즘",
    "15:00",
    "16:30",
    2,
    subjectColor.알고리즘,
    "IT홀 3108"
  ),
];

const WEDNESDAY_SUBJECT = [
  new TimeTableEvent(
    "운영체제",
    "10:00",
    "11:00",
    3,
    subjectColor.운영체제,
    "IT 3228"
  ),
  // new TimeTableEvent(
  //   "소프트웨어",
  //   "11:00",
  //   "12:00",
  //   3,
  //   subjectColor.소프트웨어,
  //   "IT 2104"
  // ),
  new TimeTableEvent(
    "심화프로그래밍",
    "14:00",
    "16:00",
    3,
    subjectColor.심화프로그래밍,
    "멀티미디어실습실 (10221)"
  ),
];

const THURSDAY_SUBJECT = [
  // new TimeTableEvent(
  //   "생산",
  //   "10:00",
  //   "11:00",
  //   4,
  //   subjectColor.생산,
  //   "임베디드시스템및소프트웨어실습실 7210"
  // ),
  new TimeTableEvent(
    "자바",
    "13:00",
    "15:00",
    4,
    subjectColor.자바,
    "데이터베이스프로그래밍실습실 7210"
  ),
  new TimeTableEvent(
    "알고리즘",
    "16:00",
    "17:30",
    4,
    subjectColor.알고리즘,
    "IT홀 3108"
  ),
];

const FRIDAY_SUBJECT = [
  // new TimeTableEvent(
  //   "경영영어",
  //   "10:00",
  //   "12:00",
  //   5,
  //   subjectColor.경영영어,
  //   "IT 3108"
  // ),
  // new TimeTableEvent(
  //   "소프트웨어",
  //   "13:00",
  //   "15:00",
  //   5,
  //   subjectColor.소프트웨어,
  //   "IT 2225"
  // ),
  new TimeTableEvent(
    "심프",
    "15:00",
    "16:00",
    5,
    subjectColor.심화프로그래밍,
    "멀티미디어실습실 10221"
  ),
];


export const SUBJECT_INFO = [
  ...MONDAY_SUBJECT,
  ...TUESDAY_SUBJECT,
  ...WEDNESDAY_SUBJECT,
  ...THURSDAY_SUBJECT,
  ...FRIDAY_SUBJECT,
];
