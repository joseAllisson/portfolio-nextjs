import { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { NavTabsStyled } from "./style";

interface TabProps {
  label: string;
  link: string;
}

interface NavTabsProps {
  tabs: TabProps[];
}

export const NavTabs = ({ tabs }: NavTabsProps) => {
  const { push, pathname } = useRouter();
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    if (newValue !== value) {
      push(tabs[newValue].link);
      setValue(newValue);
    }
  };

  useEffect(() => {
    const index = tabs.findIndex((tab) => tab.link.replace("#content", "") === pathname);
    setValue(index);
  }, [pathname, tabs]);

  return (
    <NavTabsStyled>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        classes={{ root: "tabs", indicator: "indicator" }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            id={`tab-${index}`}
            label={tab.label}
            className="tab"
            classes={{ selected: "active" }}
          />
        ))}
      </Tabs>
    </NavTabsStyled>
  );
};
