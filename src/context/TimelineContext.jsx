import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export const useTimeline = () => useContext(TimelineContext);

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (type, name) => {
    const newEntry = {
      id: Date.now(),
      type, // call | text | video
      title: `${type} with ${name}`,
      date: new Date().toLocaleDateString(),
    };

    setTimeline(prev => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};