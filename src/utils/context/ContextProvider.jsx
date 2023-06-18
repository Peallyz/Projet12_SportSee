import PropTypes from "prop-types";
import { createContext } from "react";
import {
  useUserActivity,
  useUserAverageSessions,
  useUserData,
  useUserPerformance,
} from "../hooks/fetchDataAPI";

export const DataContext = createContext(null);

const ContextProvider = ({ children }) => {
  return (
    <DataContext.Provider
      value={{
        data: {
          useUserData,
          useUserActivity,
          useUserPerformance,
          useUserAverageSessions,
        },
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.object,
};

export default ContextProvider;
