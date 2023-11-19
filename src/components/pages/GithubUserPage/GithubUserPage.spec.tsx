import { MantineProvider } from "@mantine/core";
import { render } from "@testing-library/react";

import GithubUserPage from "./GithubUserPage";

const makeSut = () => {
  return render(
    <MantineProvider>
      <GithubUserPage />
    </MantineProvider>
  )
}

describe('components/pages/GithubUserPage', () => {
  it('should be render', () => {
    const sut = makeSut()
    expect(sut.getByTestId(GithubUserPage.displayName!)).toBeDefined()
  })
})