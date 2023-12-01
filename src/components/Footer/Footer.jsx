const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <div className="row mt-3 pt-4 pb-2 bg-body-tertiary">
        <div className="col-4 text-center text-success h1  ">
          {" "}
          <div className="text-center">
            <i className="bi bi-house fw-bold"></i>
          </div>
        </div>
        <div className="col-4 text-center text-success h1  ">
          {" "}
          <div className="text-center">
            <i className="bi bi-file-bar-graph"></i>
          </div>
        </div>
        <div className="col-4 text-center text-success h1  ">
          {" "}
          <div className="text-center">
          <i className="bi bi-chat-square-text"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
