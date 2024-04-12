import { Flex, Progress } from "antd";
import { Col, Row, Statistic } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudentQuestions } from "../redux/question/Action";
import { getExam } from "../redux/exam/Action";
import { saveResult } from "../redux/result/Action";
import { getStudentByUserId } from "../redux/student/Action";
const { Countdown } = Statistic;

function Exam() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const exam = useSelector((store) => store.exam);
  const student = useSelector((store) => store.student);
  const result = useSelector((store) => store.result);
  console.log(student.student);
  const question = useSelector((store) => store.question);
  const [countTime, setCountTime] = useState();
  const [answersSelected, setAnswersSelected] = useState([]);
  const { id } = useParams();

  const handleSubmit = () => {
    let numOfCorrect = 0;
    for (let x = 0; x < answersSelected.length; x++) {
      for (let y = 0; y < question.studentQuestions.length; y++) {
        if (
          answersSelected[x].id === question.studentQuestions[y].id &&
          answersSelected[x].correctAnswer ===
            question.studentQuestions[y].correctAnswer
        ) {
          numOfCorrect++;
        }
      }
    }
    let score = (10 / question.studentQuestions.length) * numOfCorrect;
    const data = {
      score: score,
      studentId: student.student?.id,
      examId: id,
    };
    console.log(data);
    dispatch(saveResult(data));
  };
  const handleSelected = (e, id) => {
    if (answersSelected.length > 0) {
      let index = answersSelected.findIndex((item) => item.id === id);
      // let index = answersSelected.findIndex(item);
      if (index === -1) {
        setAnswersSelected([
          ...answersSelected,
          { id: id, correctAnswer: e.target.value },
        ]);
      } else {
        answersSelected[index] = { id: id, correctAnswer: e.target.value };
        setAnswersSelected(answersSelected);
      }
    } else {
      setAnswersSelected([
        ...answersSelected,
        { id: id, correctAnswer: e.target.value },
      ]);
    }
  };
  const onFinish = () => {
    console.log("finished!");
  };
  useEffect(() => {
    const data = {
      examId: id,
      studentId: student.student?.id,
    };
    dispatch(getExam(data.examId));
    dispatch(getStudentQuestions(data));
  }, []);
  useEffect(() => {
    setCountTime(Date.now() + exam.exam?.totalTime * 60 * 1000);
  }, [exam.exam]);

  useEffect(() => {
    navigate("/student/exams");
  }, result.result);
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <div className="exam-wrapper">
            <div className="exam-header">
              <h5>{exam.exam?.title}</h5>
              <div className="progress-bar">
                <Flex gap="small" vertical>
                  <Progress percent={50} />
                </Flex>
              </div>
              <button>Đánh dấu</button>
              <div className="time-total">
                <p>
                  Thời gian:
                  <span>
                    <b> {exam.exam?.totalTime}</b> phút
                  </span>
                </p>
              </div>
              <div className="time-left-wrapper">
                <i className="fa-regular fa-clock"></i>
                <div className="time-left">
                  <Row gutter={20}>
                    <Col span={25}>
                      <Countdown
                        style={{
                          display: "flex",
                          flexDirection: "column-reverse",
                          textAlign: "end",
                        }}
                        value={countTime}
                        onFinish={onFinish}
                        valueStyle={{ fontSize: 18 }}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="exam-content">
              <div className="content-left">
                {question.studentQuestions &&
                  question.studentQuestions.map((item, index) => {
                    return (
                      <div className="question-wrapper" key={index}>
                        <h3 className="question">
                          Câu hỏi {index + 1}: {item.question}
                        </h3>
                        <div className="answers">
                          <label className="item">
                            {item.firstAnswer}
                            <input
                              value={item.firstAnswer}
                              type="radio"
                              name={item.id}
                              onChange={(e, id) => handleSelected(e, item.id)}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="item">
                            {item.secondAnswer}
                            <input
                              value={item.secondAnswer}
                              type="radio"
                              name={item.id}
                              onChange={(e, id) => handleSelected(e, item.id)}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="item">
                            {item.thirdAnswer}
                            <input
                              value={item.thirdAnswer}
                              type="radio"
                              name={item.id}
                              onChange={(e, id) => handleSelected(e, item.id)}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="item">
                            {item.fourthAnswer}
                            <input
                              value={item.fourthAnswer}
                              type="radio"
                              name={item.id}
                              onChange={(e, id) => handleSelected(e, item.id)}
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="content-right">
                {question.studentQuestions &&
                  question.studentQuestions.map((item, index) => {
                    return (
                      <button
                        key={index}
                        id={index}
                        className="question-number"
                      >
                        {index + 1}
                      </button>
                    );
                  })}
              </div>
            </div>
            <div className="exam-footer">
              <button
                type="button"
                onClick={handleSubmit}
                className="submit-exam"
              >
                Nộp bài
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exam;
