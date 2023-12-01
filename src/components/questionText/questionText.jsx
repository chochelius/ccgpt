import PropTypes from "prop-types";

const QuestionText = ({ id, label, placeholder, value, type, onChange }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="form-label d-block border-0 ms-4 text-start text-success-emphasis fw-bold"
      >
        {label}
      </label>
      <input
        type={type}
        className="form-control d-block ms-3 w-75"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

QuestionText.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default QuestionText;
