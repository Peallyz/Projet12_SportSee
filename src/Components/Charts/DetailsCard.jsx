import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

const DetailsCard = ({ detail, data }) => {
  const [currentData, setCurrentData] = useState(0);

  useEffect(() => {
    if (data) {
      switch (detail.type) {
        case "calories":
          setCurrentData(
            data.data.keyData.calorieCount ? data.data.keyData.calorieCount : 0
          );
          break;
        case "proteines":
          setCurrentData(
            data.data.keyData.proteinCount ? data.data.keyData.proteinCount : 0
          );
          break;

        case "glucides":
          setCurrentData(
            data.data.keyData.carbohydrateCount
              ? data.data.keyData.carbohydrateCount
              : 0
          );
          break;
        case "lipides":
          setCurrentData(
            data.data.keyData.lipidCount ? data.data.keyData.lipidCount : 0
          );
          break;
        default:
          setCurrentData(0);
          break;
      }
    }

    if (!data) setCurrentData(0);
  }, [data, detail]);

  return (
    <div className="stat__card">
      <img src={detail.icon} alt={detail.type} />
      <div className="stat__card--data">
        <span>
          {currentData}
          {detail.type === "calories" ? "kCal" : "g"}
        </span>
        <span>{detail.type}</span>
      </div>
    </div>
  );
};

DetailsCard.propTypes = {
  detail: PropTypes.object,
  data: PropTypes.any,
};

export default DetailsCard;
