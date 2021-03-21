import { useState } from "react";
import { ImPlay3, ImPause2, ImCross } from "react-icons/im";
import useInterval from "../../hooks/useInterval";

const TrackerList = ({ countdown, title, delTracker, isRunning, playClick }) => {
  const [count, setCount] = useState(countdown);

  useInterval(() => {
    if (isRunning === true) {
      setCount(countdown);
    }
  }, 1000);

  const toggleIcon = isRunning ? <ImPause2 size={15} /> : <ImPlay3 size={15} />;

  const deleteIcon = <ImCross size={15} />;
  return (
    <li className={isRunning ? "list-item active" : "list-item"}>
      <p className="list-text">{title} </p>
      <p className="list-text">{count.time}</p>
      <button onClick={playClick} className="list-toggleBtn">
        {toggleIcon}
      </button>
      <button onClick={delTracker} className="list-deleteBtn">
        {deleteIcon}
      </button>
    </li>
  );
};

export default TrackerList;
