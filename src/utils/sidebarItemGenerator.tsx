import { NavLink } from "react-router-dom";
import { TPahts } from "../routes/paths";

type TSidebarItem = {
  key: string;
  label: JSX.Element;
};

export const sidebarItemGenerator = (items: TPahts[]) => {
  return items.reduce((acc: TSidebarItem[], item: TPahts) => {
    acc.push({
      key: item.name,
      label: <NavLink to={item.path}>{item.name}</NavLink>,
    });
    return acc;
  }, []);
};
