import { MantineProvider } from "@mantine/core";
import { render } from "@testing-library/react";

import SearchHistoryPage from "./SearchHistoryPage";

const makeSut = () => {
  return render(
    <MantineProvider>
      <SearchHistoryPage />
    </MantineProvider>
  )
}

describe('components/pages/SearchHistoryPage', () => {
  it('should be render', () => {
    const sut = makeSut()
    expect(sut.getByTestId(SearchHistoryPage.displayName!)).toBeDefined()
  })
})