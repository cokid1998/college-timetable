const subjectColor = {
  경데처: "#7BA5E9",
  데이터구조: "#ff968a",
  서버웹프로그래밍: "#fcaa68",
  컴퓨터네트워크: "#9370DB",
  객체지향프로그래밍: "#FFDB58",
  점심시간: "#3EE87F",
};

class TimeTableEvent {
  private static idCounter: number = 1;
  private static currentWeekDay = new Date().getDay();
  private static currentDate = new Date().toISOString().slice(0, 10);

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
    this.start = `${TimeTableEvent.syncSubjectDate(
      TimeTableEvent.currentWeekDay,
      subjectWeekday
    )}${start}`;
    this.end = `${TimeTableEvent.syncSubjectDate(
      TimeTableEvent.currentWeekDay,
      subjectWeekday
    )}${end}`;
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

  private static getMonth() {
    const month = new Date().getMonth() + 1;
    const formattedMonth = month < 10 ? "0" + month : "" + month;

    return formattedMonth;
  }

  private static syncSubjectDate = (
    currentWeekDay: number,
    subjectWeekDay: number
  ) => {
    const curDay = TimeTableEvent.currentDate.slice(8);

    if (currentWeekDay === subjectWeekDay) {
      return new Date().toISOString().slice(0, 11);
    }
    const curWeekdayBetweenSubjectWeekday = currentWeekDay - subjectWeekDay;
    const subjectDay = Number(curDay) - curWeekdayBetweenSubjectWeekday;
    const subjectDate = `2024-${TimeTableEvent.getMonth()}-${subjectDay}T`;
    return subjectDate;
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
    "점심시간",
    "12:00",
    "13:00",
    1,
    subjectColor.점심시간,
    "밥먹자!999🐓"
  ),
  new TimeTableEvent(
    "데이터구조",
    "13:00",
    "14:00",
    1,
    subjectColor.데이터구조,
    "IT 2104-2"
  ),
];

const TUESDAY_SUBJECT = [
  new TimeTableEvent(
    "서버웹프로그래밍",
    "09:00",
    "11:00",
    2,
    subjectColor.서버웹프로그래밍,
    "데이터베이스프로그래밍실습실 7225"
  ),
  new TimeTableEvent(
    "기초프로그래밍",
    "11:00",
    "13:00",
    2,
    "#03bd9e",
    "데이터베이스프로그래밍실습실 7225"
  ),
  new TimeTableEvent(
    "컴퓨터네트워크",
    "13:00",
    "15:00",
    2,
    subjectColor.컴퓨터네트워크,
    "IT 2105-1"
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
    "나 이시간에 뭐하냐....",
    "12:00",
    "15:00",
    3,
    subjectColor.점심시간,
    "뭐하긴 뭐해 공부해야지😤"
  ),
  new TimeTableEvent(
    "데이터구조",
    "15:00",
    "17:00",
    3,
    subjectColor.데이터구조,
    "IT 2104-2"
  ),
];

const THURSDAY_SUBJECT = [
  new TimeTableEvent(
    "서버웹프로그래밍",
    "09:00",
    "11:00",
    4,
    subjectColor.서버웹프로그래밍,
    "데이터베이스프로그래밍실습실 7225"
  ),
  new TimeTableEvent(
    "점심시간",
    "11:00",
    "12:00",
    4,
    subjectColor.점심시간,
    "밥먹자!999🐓"
  ),
  new TimeTableEvent(
    "기초프로그래밍",
    "12:00",
    "14:00",
    4,
    "#03bd9e",
    "데이터베이스프로그래밍실습실 7225"
  ),
  new TimeTableEvent(
    "컴퓨터네트워크",
    "15:00",
    "16:00",
    4,
    subjectColor.컴퓨터네트워크,
    "IT 2105-1"
  ),
  new TimeTableEvent(
    "객체지향프로그래밍",
    "16:00",
    "18:00",
    4,
    subjectColor.객체지향프로그래밍,
    "프로그래밍실습실 10225"
  ),
  new TimeTableEvent(
    "객체지향프로그래밍",
    "20:00",
    "22:00",
    4,
    subjectColor.객체지향프로그래밍,
    "프로그래밍실습실 10225"
  ),
];

const FRIDAY_SUBJECT = [
  new TimeTableEvent(
    "객체지향프로그래밍",
    "16:00",
    "18:00",
    5,
    subjectColor.객체지향프로그래밍,
    "프로그래밍실습실 10225"
  ),
];

export const SUBJECT_INFO = [
  ...MONDAY_SUBJECT,
  ...TUESDAY_SUBJECT,
  ...WEDNESDAY_SUBJECT,
  ...THURSDAY_SUBJECT,
  ...FRIDAY_SUBJECT,
];
