import { render } from "@testing-library/react";

import RootRouter from "./RootRouter";

const makeSut = () => {
  return render(
    <RootRouter />
  )
}

describe('components/organisms/RootRouter', () => {
  it('should be render', () => {
    const sut = makeSut()
    expect(sut.getByTestId(RootRouter.displayName!)).toBeDefined()
  })
})