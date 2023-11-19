import { MantineProvider } from "@mantine/core";
import { render } from "@testing-library/react";

import ProfilePage from "./ProfilePage";

const makeSut = () => {
  return render(
    <MantineProvider>
      <ProfilePage />
    </MantineProvider>
  )
}

describe('components/pages/ProfilePage', () => {
  it('should be render', () => {
    const sut = makeSut()
    expect(sut.getByTestId(ProfilePage.displayName!)).toBeDefined()
  })
})