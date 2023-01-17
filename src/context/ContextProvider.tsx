import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

type State = {
  title: string;
};

type Context = {
  state: State;
  onTitleChange: (title: string) => void;
};

const Context = createContext<Context>({} as Context);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<State>({} as State);

  const value = useMemo(() => {
    const onTitleChange = (title: string) => {
      setState({ ...state, title });
    };

    return {
      state,
      onTitleChange,
    };
  }, [state]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useContextProvider = () => useContext(Context);

export default ContextProvider;
