// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import shortid from "shortid";
// import moment from "moment";
// import timeTrackerActions from "../../redux/actions/timeTrackerActions";

// const initialState = {
//   id: shortid.generate(),
//   title: "",
//   startingTime: Date.now(),
//   isRunning: true,
//   resumeTime: 0,
//   distance: 0,
//   finalTime: [0],
// };

// const TrackerForm = () => {
//   const [state, setState] = useState({ ...initialState });

//   const dispatch = useDispatch();

//   const inputHandler = (evt) => {
//     const { name, value } = evt.target;

//     setState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const submitHandler = (evt) => {
//     evt.preventDefault();

//     dispatch(timeTrackerActions.addTracker({ ...state }));

//     setState({ title: "" });
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <label>
//         <input
//           type="text"
//           name="title"
//           placeholder="Enter tracker name"
//           value={state.title}
//           onChange={inputHandler}
//         />
//       </label>
//       <button type="submit">Click</button>
//     </form>
//   );
// };

// export default TrackerForm;
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
