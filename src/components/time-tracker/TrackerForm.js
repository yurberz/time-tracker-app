import { ImStopwatch } from "react-icons/im";

const TrackerForm = ({ addItem, input }) => {
  const submitHandler = (evt) => {
    evt.preventDefault();

    if (input.current.value === "") {
      addItem(new Date().toLocaleString());
    } else {
      addItem(input.current.value);
    }

    input.current.value = "";
  };

  const formIcon = <ImStopwatch size={20} />;

  return (
    <form className="form" onSubmit={submitHandler}>
      <input className="form-input" ref={input} type="text" placeholder="Enter tracker name" />
      <button type="submit" className="form-btn">
        {formIcon}
      </button>
    </form>
  );
};

export default TrackerForm;
