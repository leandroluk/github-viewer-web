import { MantineProvider } from "@mantine/core";
import { render } from "@testing-library/react";

import SearchPage from "./SearchPage";

const makeSut = () => {
  return render(
    <MantineProvider>
      <SearchPage />
    </MantineProvider>
  )
}

describe('components/pages/SearchPage', () => {
  it('should be render', () => {
    const sut = makeSut()
    expect(sut.getByTestId(SearchPage.displayName!)).toBeDefined()
  })
})