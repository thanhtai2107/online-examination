function UpdateExam() {
  const handlePopupAddQuestionForm = () => {
    document.getElementById("add-question").style.display = "flex";
  };
  const handleCloseAddQuestionForm = () => {
    document.getElementById("add-question").style.display = "none";
  };
  const handlePopupUpdateQuestionForm = () => {
    document.getElementById("update-question").style.display = "flex";
  };
  const handleCloseUpdateQuestionForm = () => {
    document.getElementById("update-question").style.display = "none";
  };
  return (
    <>
      <div className="update-exam-wrapper">
        <h3>Cập nhật bài thi</h3>
        <div className="update-exam-content">
          <div className="left">
            <form action="" className="form-add">
              <div className="input-field">
                <label htmlFor="">Tên bài thi:</label>
                <br />
                <input type="text" />
              </div>
              <div className="input-field">
                <label htmlFor="">Thời gian:</label>
                <br />
                <input type="number" />
              </div>
              <div className="input-field">
                <label htmlFor="">Tên bài thi:</label>
                <br />
                <select>
                  <option selected disabled>
                    --Lớp--
                  </option>
                  <option>HTML-CSS cơ bản</option>
                  <option>Java nâng cao</option>
                </select>
              </div>
              <button type="submit">
                <i class="fa-solid fa-pen-to-square"></i>Cập nhật
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
              <div className="question-item">
                <div className="question-icon">
                  <h6>
                    1. Java được phát triển bởi dfjsfsdhfkahdfhsadhfkhasdfhakh
                  </h6>
                  <div className="icon-group">
                    <i
                      class="fa-solid fa-pen-to-square update"
                      onClick={handlePopupUpdateQuestionForm}
                    ></i>
                    <i class="fa-regular fa-trash-can delete"></i>
                  </div>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
              </div>
              <div className="question-item">
                <div className="question-icon">
                  <h6>
                    1. Java được phát triển bởi dfjsfsdhfkahdfhsadhfkhasdfhakh
                  </h6>
                  <div className="icon-group">
                    <i class="fa-solid fa-pen-to-square update"></i>
                    <i class="fa-regular fa-trash-can delete"></i>
                  </div>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
              </div>
              <div className="question-item">
                <div className="question-icon">
                  <h6>
                    1. Java được phát triển bởi dfjsfsdhfkahdfhsadhfkhasdfhakh
                  </h6>
                  <div className="icon-group">
                    <i class="fa-solid fa-pen-to-square update"></i>
                    <i class="fa-regular fa-trash-can delete"></i>
                  </div>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
              </div>
              <div className="question-item">
                <div className="question-icon">
                  <h6>
                    1. Java được phát triển bởi dfjsfsdhfkahdfhsadhfkhasdfhakh
                  </h6>
                  <div className="icon-group">
                    <i class="fa-solid fa-pen-to-square update"></i>
                    <i class="fa-regular fa-trash-can delete"></i>
                  </div>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
              </div>
              <div className="question-item">
                <div className="question-icon">
                  <h6>
                    1. Java được phát triển bởi dfjsfsdhfkahdfhsadhfkhasdfhakh
                  </h6>
                  <div className="icon-group">
                    <i class="fa-solid fa-pen-to-square update"></i>
                    <i class="fa-regular fa-trash-can delete"></i>
                  </div>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
              </div>
              <div className="question-item">
                <div className="question-icon">
                  <h6>
                    1. Java được phát triển bởi dfjsfsdhfkahdfhsadhfkhasdfhakh
                  </h6>
                  <div className="icon-group">
                    <i class="fa-solid fa-pen-to-square update"></i>
                    <i class="fa-regular fa-trash-can delete"></i>
                  </div>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
                <div className="answers">
                  <input type="radio" />
                  <label>Sun MicroSystems</label>
                </div>
              </div>
            </div>
            <div className="update-question" id="update-question">
              <form action="" className="form-add">
                <i
                  className="fa-solid fa-xmark close"
                  onClick={handleCloseUpdateQuestionForm}
                ></i>
                <h3>Cập nhật câu hỏi</h3>
                <div className="input-field">
                  <label htmlFor="">Câu hỏi:</label>
                  <br />
                  <textarea rows={7}></textarea>
                </div>
                <div className="input-field">
                  <label htmlFor="">Đáp án 1:</label>
                  <br />
                  <input type="text" />
                </div>

                <div className="input-field">
                  <label htmlFor="">Đáp án 2:</label>
                  <br />
                  <input type="text" />
                </div>
                <div className="input-field">
                  <label htmlFor="">Đáp án 3:</label>
                  <br />
                  <input type="text" />
                </div>
                <div className="input-field">
                  <label htmlFor="">Đáp án 4:</label>
                  <br />
                  <input type="text" />
                </div>
                <div className="input-field">
                  <label htmlFor="">Câu trả lời:</label>
                  <br />
                  <input type="text" />
                </div>
                <button type="submit">
                  <i className="fa-solid fa-plus"></i> Thêm
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="add-question" id="add-question">
          <form action="" className="form-add">
            <i
              className="fa-solid fa-xmark close"
              onClick={handleCloseAddQuestionForm}
            ></i>
            <h3>Thêm câu hỏi</h3>
            <div className="input-field">
              <label htmlFor="">Câu hỏi:</label>
              <br />
              <textarea rows={7}></textarea>
            </div>
            <div className="input-field">
              <label htmlFor="">Đáp án 1:</label>
              <br />
              <input type="text" />
            </div>

            <div className="input-field">
              <label htmlFor="">Đáp án 2:</label>
              <br />
              <input type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="">Đáp án 3:</label>
              <br />
              <input type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="">Đáp án 4:</label>
              <br />
              <input type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="">Câu trả lời:</label>
              <br />
              <input type="text" />
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
