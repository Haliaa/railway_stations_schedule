import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { stationsActions } from "../../redux";
import { NavLink } from "react-router-dom";

export const List = (props) => {
  const dispatch = useDispatch();
  const { stations } = useSelector((state) => state.stations);
  const [stationsUpdated, setStationsUpdated] = useState([]);

  useEffect(() => {
    dispatch(stationsActions.getAll()).then((data) => {
      if (Array.isArray(data?.payload)) {
        setStationsUpdated(data.payload);
      } else {
        console.error("Expected payload to be an array", data?.payload);
      }
    });
  }, [stations, dispatch]);

  const data = [...stationsUpdated];
  const filteredData = data.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(props.input);
    }
  });

  return (
    <ul>
      {filteredData.map((item) => (
        <NavLink
          key={item._id}
          to={`/schedules/stationSchedule/${item._id}`}
          style={{
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
            color: "black",
            fontSize: "30px",
            margin: "10px",
          }}
        >
          <strong> {item.name}</strong>
        </NavLink>
      ))}
    </ul>
  );
};
