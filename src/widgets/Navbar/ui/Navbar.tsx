import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar)}>
      <div className={classNames(cls.main)}>
        <ThemeSwitcher />
      </div>
      <div className={classNames(cls.links)}>
        <AppLink
          to={"/"}
          className={classNames(cls.link)}
          theme={AppLinkTheme.PRIMARY}
        >
          Главная
        </AppLink>
        <AppLink
          to={"/about"}
          className={classNames(cls.link)}
          theme={AppLinkTheme.DASHED}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
