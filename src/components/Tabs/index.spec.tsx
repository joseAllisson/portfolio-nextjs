import { fireEvent, screen } from "@testing-library/react";

import { NavTabs } from ".";
import { renderTheme } from "../../test/renderTheme";

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));

const tabsMock = [
  { label: "Sobre", link: "/about" },
  { label: "Portfólio", link: "/" },
  { label: "Contato", link: "/contact" },
];

describe("<NavTabs />", () => {
  it("should display component with tabs", () => {
    renderTheme(<NavTabs tabs={tabsMock} />);

    const tabList = screen.getByRole("tablist");
    expect(tabList).toBeInTheDocument();

    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(tabsMock.length);

    tabs.map((tab, index) => {
      expect(tab).toHaveTextContent(tabsMock[index].label);
      fireEvent.click(tab);
    });
  });
});
