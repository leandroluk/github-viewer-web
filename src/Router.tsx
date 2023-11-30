import { BrowserHistory } from "history";
import { FC, useLayoutEffect, useState } from "react";
import { BrowserRouterProps, Router } from "react-router-dom";
import customHistory from "./lib/history";

export type ICustomRouter = BrowserRouterProps & {
  history: BrowserHistory;
};

export const CustomRouter: FC<ICustomRouter> = ({
  basename,
  history,
  children,
}) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => {
    history.listen(setState);
  }, [history]);

  return (
    <Router
      navigator={customHistory}
      location={state.location}
      navigationType={state.action}
      basename={basename}
    >
      {children}
    </Router>
  );
};
