import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <div className="row mt-3 pt-4 pb-2 bg-body-tertiary">
        <div className="col-4 text-center text-success h1">
          <Link to="/"> {/* BEGIN: Add route to "/" */}
            <div className="text-center">
              <i className="bi bi-house fw-bold"></i>
            </div>
          </Link> {/* END: Add route to "/" */}
        </div>
        <div className="col-4 text-center text-success h1">
          <Link to="/data"> {/* BEGIN: Add route to "/data" */}
            <div className="text-center">
              <i className="bi bi-file-bar-graph"></i>
            </div>
          </Link> {/* END: Add route to "/data" */}
        </div>
        <div className="col-4 text-center text-success h1">
          <Link to="/chat"> {/* BEGIN: Add route to "/chat" */}
            <div className="text-center">
              <i className="bi bi-chat-square-text"></i>
            </div>
          </Link> {/* END: Add route to "/chat" */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
