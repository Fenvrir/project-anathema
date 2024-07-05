import { classNames } from "@/shared/lib/className";
import * as cls from "./SideBar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwtitcher";
import { Button } from "@/shared/ui/Button/Button";

interface SidebarProps {
  className?: string;
}

export const SideBar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggle}>toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
