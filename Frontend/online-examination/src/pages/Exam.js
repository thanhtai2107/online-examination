import { Flex, Progress } from "antd";
import { Col, Row, Statistic } from "antd";
const { Countdown } = Statistic;
const deadline = Date.now() + 40 * 60 * 1000; // Dayjs is also OK
const onFinish = () => {
  console.log("finished!");
};
const onChange = (val) => {
  if (typeof val === "number" && 4.95 * 1000 < val && val < 5 * 1000) {
    console.log("changed!");
  }
};
function Exam() {
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <div className="exam-wrapper">
            <div className="exam-header">
              <h3>Tên bài thi</h3>
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
                    <b> 30</b> phút
                  </span>
                </p>
              </div>
              <div className="time-left-wrapper">
                <i class="fa-regular fa-clock"></i>
                <div className="time-left">
                  <Row gutter={20}>
                    <Col span={25}>
                      <Countdown
                        style={{
                          display: "flex",
                          flexDirection: "column-reverse",
                          textAlign: "end",
                        }}
                        title="Còn lại"
                        value={deadline}
                        onFinish={onFinish}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="exam-content">
              <div className="content-left">
                <h3>Câu hỏi 1:</h3>
                <h3 className="question">
                  Ngôn ngữ Java được phát triển bởi ?
                </h3>
                <div className="answers">
                  <label className="item">
                    Sun MicroSystems
                    <input type="radio" name="answer" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="item">
                    Sun MicroSystems
                    <input type="radio" name="answer" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="item">
                    Sun MicroSystems
                    <input type="radio" name="answer" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="item">
                    Sun MicroSystems
                    <input type="radio" name="answer" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="content-right">
                <div className="question-number">1</div>
                <div className="question-number">2</div>
                <div className="question-number">3</div>
                <div className="question-number">4</div>
                <div className="question-number">5</div>
                <div className="question-number">6</div>
                <div className="question-number">7</div>
                <div className="question-number">8</div>
                <div className="question-number">9</div>
                <div className="question-number">10</div>
              </div>
            </div>
            <div className="exam-footer">
              <div className="change-question">
                <div className="previous-button">
                  <button>
                    <i class="fa-solid fa-arrow-left"></i>Trước
                  </button>
                </div>
                <div className="next-button">
                  <button>
                    Sau
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <button type="submit" className="submit-exam">
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
