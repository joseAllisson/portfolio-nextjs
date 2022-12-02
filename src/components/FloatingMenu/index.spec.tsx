import { fireEvent, screen } from "@testing-library/react";
import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { VscFilePdf } from "react-icons/vsc";

import { FloatingMenu, FloatingMenuItem, FloatingMenuItemProps } from ".";
import { renderTheme } from "../../test/renderTheme";

const menu: FloatingMenuItemProps[] = [
  {
    index: 1,
    onClick: () => null,
    children: <MdDarkMode size={28} />,
    tooltip: "Alternar tema",
  },
  {
    index: 2,
    onClick: () => null,
    children: <VscFilePdf size={28} />,
    tooltip: "Currículo em PDF",
  },
  {
    index: 3,
    link: "#content",
    children: <AiOutlineArrowDown size={28} />,
    tooltip: "Rolar para baixo",
    className: "desktop",
  },
];

describe("<FloatingMenu />", () => {
  it("should display closed menu component", () => {
    const fn = jest.fn();

    const { container } = renderTheme(
      <FloatingMenu open={false} onChange={(newValue) => fn(newValue)}>
        {menu.map(({ index, children, ...item }) => (
          <FloatingMenuItem {...item} index={index} key={index}>
            {children}
          </FloatingMenuItem>
        ))}
      </FloatingMenu>
    );

    expect(container.querySelector("#floating-menu")).toBeInTheDocument();
    expect(container.querySelector(".closed")).toHaveStyle({ display: "none" });
  });

  it("should display open menu component", () => {
    const fn = jest.fn();

    const { container } = renderTheme(
      <FloatingMenu open={true} onChange={(newValue) => fn(newValue)}>
        {menu.map(({ index, children, ...item }) => (
          <FloatingMenuItem {...item} index={index} key={index}>
            {children}
          </FloatingMenuItem>
        ))}
      </FloatingMenu>
    );

    expect(container.querySelector("#floating-menu")).toBeInTheDocument();
    expect(container.querySelector(".open")).toHaveStyle({ display: "block" });
  });

  it("must call the function when clicking the button", () => {
    const fn = jest.fn();

    renderTheme(
      <FloatingMenu open={false} onChange={(newValue) => fn(newValue)}>
        {menu.map(({ index, children, ...item }) => (
          <FloatingMenuItem {...item} index={index} key={index}>
            {children}
          </FloatingMenuItem>
        ))}
      </FloatingMenu>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("there must be the number of buttons plus the open button in the menu", () => {
    const fn = jest.fn();

    renderTheme(
      <FloatingMenu open={true} onChange={(newValue) => fn(newValue)}>
        {menu.map(({ index, children, ...item }) => (
          <FloatingMenuItem {...item} index={index} key={index}>
            {children}
          </FloatingMenuItem>
        ))}
      </FloatingMenu>
    );

    expect(screen.getAllByRole("button")).toHaveLength(menu.length + 1);
  });
});
