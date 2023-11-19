import { FC } from "react";
import { Route, Routes } from 'react-router-dom';

import { RootRouterProps } from './RootRouter.types';

const RootRouter: FC<RootRouterProps> = (props) => {
  return (
    <div data-testid={props.testID}>
      <Routes>
        <Route index
      </Routes>
    </div>
  )
}

RootRouter.displayName = 'RootRouter'
RootRouter.defaultProps = {
  testID: 'RootRouter'
}

export default RootRouter