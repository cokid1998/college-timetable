const subjectColor = {
  경데처: "#7BA5E9",
  핀테크프로그래밍: "#C16FCB",
  기초프로그래밍: "#03bd9e",
  객체지향프로그래밍: "#fcaa68",
  인강: "#FFDB58",
  점심시간: "#3EE87F",
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

    if (day > 6) {
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
    "경데처",
    "10:00",
    "12:00",
    1,
    subjectColor.경데처,
    "경상5425"
  ),
  new TimeTableEvent(
    "핀테크프로그래밍",
    "14:00",
    "16:00",
    1,
    subjectColor.핀테크프로그래밍,
    "경상 5419"
  ),
];

const TUESDAY_SUBJECT = [
  new TimeTableEvent(
    "기초프로그래밍",
    "11:00",
    "13:00",
    2,
    subjectColor.기초프로그래밍,
    "데이터베이스프로그래밍실습실 7225"
  ),
  new TimeTableEvent(
    "객체지향프로그래밍",
    "13:00",
    "15:00",
    2,
    subjectColor.객체지향프로그래밍,
    "임베디드시스템및소프트웨어실습실 7210"
  ),
];

const WEDNESDAY_SUBJECT = [
  new TimeTableEvent(
    "경데처",
    "11:00",
    "12:00",
    3,
    subjectColor.경데처,
    "경상5425"
  ),

  new TimeTableEvent(
    "핀테크프로그래밍",
    "15:00",
    "16:00",
    3,
    subjectColor.핀테크프로그래밍,
    "경상 5419"
  ),
];

const THURSDAY_SUBJECT = [
  new TimeTableEvent(
    "객체지향프로그래밍",
    "10:00",
    "12:00",
    4,
    subjectColor.객체지향프로그래밍,
    "임베디드시스템및소프트웨어실습실 7210"
  ),
  new TimeTableEvent(
    "기초프로그래밍",
    "12:00",
    "14:00",
    4,
    subjectColor.기초프로그래밍,
    "데이터베이스프로그래밍실습실 7225"
  ),
];

const FRIDAY_SUBJECT = [
  new TimeTableEvent(
    "사건으로보는옛이야기",
    "09:00",
    "11:00",
    5,
    subjectColor.인강,
    "사이버캠퍼스"
  ),
  new TimeTableEvent(
    "톡!톡!디자인씽킹과창업",
    "11:00",
    "13:00",
    5,
    subjectColor.인강,
    "사이버캠퍼스"
  ),
];

export const SUBJECT_INFO = [
  ...MONDAY_SUBJECT,
  ...TUESDAY_SUBJECT,
  ...WEDNESDAY_SUBJECT,
  ...THURSDAY_SUBJECT,
  ...FRIDAY_SUBJECT,
];
