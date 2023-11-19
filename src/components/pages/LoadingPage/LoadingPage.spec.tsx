import { MantineProvider } from "@mantine/core";
import { render } from "@testing-library/react";

import LoadingPage from "./LoadingPage";

const makeSut = () => {
  return render(
    <MantineProvider>
      <LoadingPage />
    </MantineProvider>
  )
}

describe('components/pages/LoadingPage', () => {
  it('should be render', () => {
    const sut = makeSut()
    expect(sut.getByTestId(LoadingPage.displayName!)).toBeDefined()
  })
})