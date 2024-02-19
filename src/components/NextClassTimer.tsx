import "./NextClassTimer.style.css";
import { SUBJECT_INFO } from "../data/subjectInfo";

const NextClassTimer = () => {
  const isWeekend =
    new Date().getDay() === 0 || new Date().getDay() === 6 ? true : false;
  const curDay = new Date().getDate();
  const curHour = new Date().getHours();

  const curSubject = SUBJECT_INFO.filter((item) => {
    const subjectDay = Number(item.start.slice(8, 10));
    const subjectStartHour = Number(item.start.slice(11, 13));

    if (curDay === subjectDay && curHour < subjectStartHour) {
      return true;
    } else false;
  });

  const nearNextClass = curSubject[0];
  const currentDate = new Date();
  const targetDate = new Date(nearNextClass.start);
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));
  const remainingMinutes = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );

  return (
    <div className="nextClassTimer-container">
      {isWeekend ? (
        "주말이니 좀 쉬도록 🛌"
      ) : !curSubject.length ? (
        "오늘 수업은 다 들었다. 복습하도록 ✍️"
      ) : (
        <div>
          {nearNextClass.title} 들을 때 까지{" "}
          <span style={{ color: "#fffc00", fontWeight: "bold" }}>
            {remainingHours}시간 {remainingMinutes}분
          </span>{" "}
          남았다.
          <br />
          <div
            style={{ color: "#0046a5", marginTop: "10px", fontWeight: "bold" }}
          >
            ({nearNextClass.location})
          </div>
        </div>
      )}
    </div>
  );
};

export default NextClassTimer;
