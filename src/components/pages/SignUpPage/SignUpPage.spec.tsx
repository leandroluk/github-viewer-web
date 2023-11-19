import { MantineProvider } from "@mantine/core";
import { render } from "@testing-library/react";

import SignUpPage from "./SignUpPage";

const makeSut = () => {
  return render(
    <MantineProvider>
      <SignUpPage />
    </MantineProvider>
  )
}

describe('components/pages/SignUpPage', () => {
  it('should be render', () => {
    const sut = makeSut()
    expect(sut.getByTestId(SignUpPage.displayName!)).toBeDefined()
  })
})