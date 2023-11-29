import "./Chat.css";

const Chat = () => {
  return (
    <div>
      <div className="row">
        <div className="col-10">
          <div className="pt-3">
            <div className="card">
            <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={
                    {
                      height: "200px",
                    }
                  }
                ></textarea>

              <div className="card-body">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={
                    {
                      height: "75px",
                    }
                  }
                ></textarea>
                <label htmlFor="floatingTextarea2">Comments</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
