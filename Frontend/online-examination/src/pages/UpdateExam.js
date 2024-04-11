import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getExam, updateExam } from "../redux/exam/Action";
import { activeCourses } from "../redux/course/Action";
import validation from "../service/validation";
import {
  addQuestion,
  getQuestion,
  getQuestions,
  updateQuestion,
} from "../redux/question/Action";

function UpdateExam() {
  const dispatch = useDispatch();
  const exam = useSelector((store) => store.exam);
  const course = useSelector((store) => store.course);
  const question = useSelector((store) => store.question);
  const { id } = useParams();
  const [questionId, setQuestionId] = useState();
  const [inputAddQuestion, setInputAddQuestion] = useState({
    question: "",
    firstAnswer: "",
    secondAnswer: "",
    thirdAnswer: "",
    fourthAnswer: "",
    correctAnswer: "",
    examId: id,
  });
  const [inputUpdateQuestion, setInputUpdateQuestion] = useState({
    id: "",
    question: "",
    firstAnswer: "",
    secondAnswer: "",
    thirdAnswer: "",
    fourthAnswer: "",
    correctAnswer: "",
    examId: id,
  });
  const [updateExamData, setUpdateExamData] = useState({
    id: "",
    title: "",
    totalTime: "",
    courseId: "",
    status: "",
  });
  const [updateExamErrors, setUpdateExamErrors] = useState({});
  const [addQuestionErrors, setAddQuestionErrors] = useState({});
  const [updateQuestionErrors, setUpdateQuestionErrors] = useState({});
  const handleSubmitUpdateExam = (e) => {
    e.preventDefault();
    const error = validation(updateExamData);
    setAddQuestionErrors(error);
    if (Object.keys(error).length === 0) {
      dispatch(updateExam(updateExamData));
      console.log(updateExamData);
    }
  };
  const handleSubmitAddQuestion = (e) => {
    e.preventDefault();
    const error = validation(inputAddQuestion);
    setUpdateExamErrors(error);
    if (Object.keys(error).length === 0) {
      dispatch(addQuestion(inputAddQuestion));
      handleCloseAddQuestionForm();
    }
  };
  const handleSubmitUpdateQuestion = (e) => {
    e.preventDefault();
    const error = validation(inputUpdateQuestion);
    setUpdateQuestionErrors(error);
    if (Object.keys(error).length === 0) {
      dispatch(updateQuestion(inputUpdateQuestion));
      handleCloseUpdateQuestionForm();
    }
  };
  const handleInputAddQuestionChange = (e) => {
    setInputAddQuestion({
      ...inputAddQuestion,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputUpdateQuestionChange = (e) => {
    setInputUpdateQuestion({
      ...inputUpdateQuestion,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdateExamChange = (e) => {
    setUpdateExamData({ ...updateExamData, [e.target.name]: e.target.value });
  };
  const handleCourseUpdateExamChange = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    setUpdateExamData({ ...updateExamData, courseId: option });
  };
  const handleStatusUpdateExamChange = (e) => {
    if (e.target.value === "Đang diễn ra") {
      setUpdateExamData({ ...updateExamData, status: 1 });
    } else if (e.target.value === "Sắp diễn ra") {
      setUpdateExamData({ ...updateExamData, status: 2 });
    } else {
      setUpdateExamData({ ...updateExamData, status: 0 });
    }
  };
  const handlePopupAddQuestionForm = () => {
    document.getElementById("add-question").style.display = "flex";
  };
  const handleCloseAddQuestionForm = () => {
    document.getElementById("add-question").style.display = "none";
  };
  const handlePopupUpdateQuestionForm = (id) => {
    document.getElementById("update-question").style.display = "flex";
    dispatch(getQuestion(id));
    setQuestionId(id);
  };
  const handleCloseUpdateQuestionForm = () => {
    document.getElementById("update-question").style.display = "none";
  };
  useEffect(() => {
    dispatch(getExam(id));
    dispatch(activeCourses());
  }, [id, dispatch]);
  useEffect(() => {
    dispatch(getQuestions(id));
  }, [id, question.addQuestion, question.updateQuestion, dispatch]);
  useEffect(() => {
    setUpdateExamData({
      id: id,
      title: exam.exam?.title,
      totalTime: exam.exam?.totalTime,
      courseId: exam.exam?.courseId,
      status: exam.exam?.status,
    });
  }, [exam.exam, exam.updateExam, id]);

  useEffect(() => {
    setInputUpdateQuestion({
      id: questionId,
      question: question.question?.question,
      firstAnswer: question.question?.firstAnswer,
      secondAnswer: question.question?.secondAnswer,
      thirdAnswer: question.question?.thirdAnswer,
      fourthAnswer: question.question?.fourthAnswer,
      correctAnswer: question.question?.correctAnswer,
      examId: question.question?.examId,
    });
  }, [question.question, dispatch]);
  return (
    <>
      <div className="update-exam-wrapper">
        <h3>Cập nhật bài thi</h3>
        <div className="update-exam-content">
          <div className="left">
            <form
              action=""
              className="form-add"
              onSubmit={handleSubmitUpdateExam}
            >
              <div className="input-field">
                <label htmlFor="">Tên bài thi:</label>
                <br />
                <input
                  type="text"
                  name="title"
                  value={updateExamData.title}
                  onChange={(e) => handleUpdateExamChange(e)}
                />
              </div>
              <div className="input-field">
                <label htmlFor="">Thời gian:</label>
                <br />
                <input
                  type="number"
                  name="totalTime"
                  value={updateExamData.totalTime}
                  onChange={(e) => handleUpdateExamChange(e)}
                />
              </div>
              <div className="input-field">
                <label htmlFor="">Tên bài thi:</label>
                <br />
                <select onChange={(e) => handleCourseUpdateExamChange(e)}>
                  <option selected disabled>
                    --Lớp--
                  </option>
                  {course.activeCourses &&
                    course.activeCourses.map((item) => {
                      return (
                        <option
                          selected={exam.exam?.courseId === item.id}
                          key={item.id}
                          id={item.id}
                        >
                          {item.title}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="input-field">
                <label htmlFor="">Trạng thái:</label>
                <br />
                <select
                  defaultValue="--Trạng thái--"
                  onChange={(e) => handleStatusUpdateExamChange(e)}
                >
                  <option disabled>--Trạng thái--</option>
                  <option selected={exam.exam?.status === 1}>
                    Đang diễn ra
                  </option>
                  <option selected={exam.exam?.status === 2}>
                    Sắp diễn ra
                  </option>
                  <option selected={exam.exam?.status === 0}>
                    Đã hoàn thành
                  </option>
                </select>
              </div>
              <button type="submit">
                <i className="fa-solid fa-pen-to-square"></i>Cập nhật
              </button>
            </form>
          </div>
          <div className="right">
            <div className="button-group">
              <button
                className="button-add-question"
                onClick={handlePopupAddQuestionForm}
              >
                <i class="fa-solid fa-plus"></i>
                Thêm câu hỏi
              </button>
              <button className="preview">
                <i class="fa-solid fa-eye"></i>Xem
              </button>
            </div>
            <div className="preview-question">
              {question.questions &&
                question.questions.map((item, index) => {
                  return (
                    <div className="question-item" key={item.id}>
                      <div className="question-icon">
                        <h6>
                          {index + 1}. {item.question}
                        </h6>
                        <div className="icon-group">
                          <i
                            class="fa-solid fa-pen-to-square update"
                            onClick={() =>
                              handlePopupUpdateQuestionForm(item.id)
                            }
                          ></i>
                          <i class="fa-regular fa-trash-can delete"></i>
                        </div>
                      </div>
                      <div className="answers">
                        <input name={item.id} type="radio" />
                        <label>{item.firstAnswer}</label>
                      </div>
                      <div className="answers">
                        <input name={item.id} type="radio" />
                        <label>{item.secondAnswer}</label>
                      </div>
                      <div className="answers">
                        <input name={item.id} type="radio" />
                        <label>{item.thirdAnswer}</label>
                      </div>
                      <div className="answers">
                        <input name={item.id} type="radio" />
                        <label>{item.fourthAnswer}</label>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="update-question" id="update-question">
              <form
                action=""
                className="form-add"
                onSubmit={handleSubmitUpdateQuestion}
              >
                <i
                  className="fa-solid fa-xmark close"
                  onClick={handleCloseUpdateQuestionForm}
                ></i>
                <h3>Cập nhật câu hỏi</h3>
                <div className="input-field">
                  <label htmlFor="">Câu hỏi:</label>
                  <br />
                  <textarea
                    value={inputUpdateQuestion.question}
                    name="question"
                    rows={7}
                    onChange={(e) => handleInputUpdateQuestionChange(e)}
                  ></textarea>
                  {updateQuestionErrors.question && (
                    <span className="error">
                      {updateQuestionErrors.question}
                    </span>
                  )}
                </div>
                <div className="input-field">
                  <label htmlFor="">Đáp án 1:</label>
                  <br />
                  <input
                    type="text"
                    value={inputUpdateQuestion.firstAnswer}
                    name="firstAnswer"
                    onChange={(e) => handleInputUpdateQuestionChange(e)}
                  />
                  {updateQuestionErrors.firstAnswer && (
                    <span className="error">
                      {updateQuestionErrors.firstAnswer}
                    </span>
                  )}
                </div>

                <div className="input-field">
                  <label htmlFor="">Đáp án 2:</label>
                  <br />
                  <input
                    type="text"
                    value={inputUpdateQuestion.secondAnswer}
                    name="secondAnswer"
                    onChange={(e) => handleInputUpdateQuestionChange(e)}
                  />
                  {updateQuestionErrors.secondAnswer && (
                    <span className="error">
                      {updateQuestionErrors.secondAnswer}
                    </span>
                  )}
                </div>
                <div className="input-field">
                  <label htmlFor="">Đáp án 3:</label>
                  <br />
                  <input
                    type="text"
                    value={inputUpdateQuestion.thirdAnswer}
                    name="thirdAnswer"
                    onChange={(e) => handleInputUpdateQuestionChange(e)}
                  />
                  {updateQuestionErrors.thirdAnswer && (
                    <span className="error">
                      {updateQuestionErrors.thirdAnswer}
                    </span>
                  )}
                </div>
                <div className="input-field">
                  <label htmlFor="">Đáp án 4:</label>
                  <br />
                  <input
                    type="text"
                    value={inputUpdateQuestion.fourthAnswer}
                    name="fourthAnswer"
                    onChange={(e) => handleInputUpdateQuestionChange(e)}
                  />
                  {updateQuestionErrors.fourthAnswer && (
                    <span className="error">
                      {updateQuestionErrors.fourthAnswer}
                    </span>
                  )}
                </div>
                <div className="input-field">
                  <label htmlFor="">Câu trả lời:</label>
                  <br />
                  <input
                    type="text"
                    value={inputUpdateQuestion.correctAnswer}
                    name="correctAnswer"
                    onChange={(e) => handleInputUpdateQuestionChange(e)}
                  />
                  {updateQuestionErrors.correctAnswer && (
                    <span className="error">
                      {updateQuestionErrors.correctAnswer}
                    </span>
                  )}
                </div>
                <button type="submit">
                  <i className="fa-solid fa-plus"></i> Thêm
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="add-question" id="add-question">
          <form
            action=""
            className="form-add"
            onSubmit={handleSubmitAddQuestion}
          >
            <i
              className="fa-solid fa-xmark close"
              onClick={handleCloseAddQuestionForm}
            ></i>
            <h3>Thêm câu hỏi</h3>
            <div className="input-field">
              <label htmlFor="">Câu hỏi:</label>
              <br />
              <textarea
                name="question"
                value={inputAddQuestion.question}
                rows={7}
                onChange={(e) => handleInputAddQuestionChange(e)}
              ></textarea>
              {addQuestionErrors.question && (
                <span className="error">{addQuestionErrors.question}</span>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Đáp án 1:</label>
              <br />
              <input
                type="text"
                name="firstAnswer"
                value={inputAddQuestion.firstAnswer}
                onChange={(e) => handleInputAddQuestionChange(e)}
              />
              {addQuestionErrors.firstAnswer && (
                <span className="error">{addQuestionErrors.firstAnswer}</span>
              )}
            </div>

            <div className="input-field">
              <label htmlFor="">Đáp án 2:</label>
              <br />
              <input
                type="text"
                name="secondAnswer"
                value={inputAddQuestion.secondAnswer}
                onChange={(e) => handleInputAddQuestionChange(e)}
              />
              {addQuestionErrors.secondAnswer && (
                <span className="error">{addQuestionErrors.secondAnswer}</span>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Đáp án 3:</label>
              <br />
              <input
                type="text"
                name="thirdAnswer"
                value={inputAddQuestion.thirdAnswer}
                onChange={(e) => handleInputAddQuestionChange(e)}
              />
              {addQuestionErrors.thirdAnswer && (
                <span className="error">{addQuestionErrors.thirdAnswer}</span>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Đáp án 4:</label>
              <br />
              <input
                type="text"
                name="fourthAnswer"
                value={inputAddQuestion.fourthAnswer}
                onChange={(e) => handleInputAddQuestionChange(e)}
              />
              {addQuestionErrors.fourthAnswer && (
                <span className="error">{addQuestionErrors.fourthAnswer}</span>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Câu trả lời:</label>
              <br />
              <input
                type="text"
                name="correctAnswer"
                value={inputAddQuestion.correctAnswer}
                onChange={(e) => handleInputAddQuestionChange(e)}
              />
              {addQuestionErrors.correctAnswer && (
                <span className="error">{addQuestionErrors.correctAnswer}</span>
              )}
            </div>
            <button type="submit">
              <i className="fa-solid fa-plus"></i> Thêm
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateExam;
