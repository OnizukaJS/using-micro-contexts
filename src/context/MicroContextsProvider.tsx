import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const MicroContextsData = createContext<string>("");
export const MicroContextsAPI = createContext<Dispatch<SetStateAction<string>>>(
  () => undefined
);

const MicroContextsProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<string>("");

  return (
    <MicroContextsData.Provider value={title}>
      <MicroContextsAPI.Provider value={setTitle}>
        {children}
      </MicroContextsAPI.Provider>
    </MicroContextsData.Provider>
  );
};

export default MicroContextsProvider;
