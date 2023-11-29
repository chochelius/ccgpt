import "./Chat.css";

const Chat = () => {
  return (
    <div>
      <div className="pt-3">
        <div className="col align-self-center">
          <div className="mt-1">
            <div className="card text-success">
            <textarea
                  className="form-control text-success"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={
                    {
                      height: "200px",
                      color: "success",
                    }
                  }
                ></textarea>

              <div className="card-body">
              <div className="form-floating">
                <textarea
                  className="form-control text-success"
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
