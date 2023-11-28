//create the question component to be reused in the form it should have a prop for the question and a text field for the answer

const QuestionText = ({ id, label, placeholder, value, type }) => {
  //props = {id, label, placeholder, value} use them to create the question dynamically

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
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
    </div>
  );
};

export default QuestionText;
