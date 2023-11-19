import { MantineProvider } from "@mantine/core";
import { render } from "@testing-library/react";

import SignInPage from "./SignInPage";

const makeSut = () => {
  return render(
    <MantineProvider>
      <SignInPage />
    </MantineProvider>
  )
}

describe('components/pages/SignInPage', () => {
  it('should be render', () => {
    const sut = makeSut()
    expect(sut.getByTestId(SignInPage.displayName!)).toBeDefined()
  })
})