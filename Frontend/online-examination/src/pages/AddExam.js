function AddExam() {
  return (
    <>
      <div className="add-exam-wrapper">
        <h3>Thêm bài thi</h3>
        <div className="add-exam-content">
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
                  --Chọn lớp--
                </option>
                <option>HTML-CSS cơ bản</option>
                <option>Java nâng cao</option>
              </select>
            </div>
            <div className="button-group">
              <button type="submit" className="submit">
                Thêm
              </button>
              <button className="cancle">Hủy</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddExam;
