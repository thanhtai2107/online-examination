function UpdateExam() {
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
              <button className="add-question">
                <i class="fa-solid fa-plus"></i>
                Thêm câu hỏi
              </button>
              <button className="preview">
                <i class="fa-solid fa-eye"></i>Xem
              </button>
            </div>
            <div className="preview-question">
              <div className="question-item">
                <h6>1. Java được phát triển bởi</h6>
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
                <h6>2. Java được phát triển bởi</h6>
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
                <h6>3. Java được phát triển bởi</h6>
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
                <h6>4. Java được phát triển bởi</h6>
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
                <h6>5. Java được phát triển bởi</h6>
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
                <h6>6. Java được phát triển bởi</h6>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateExam;
