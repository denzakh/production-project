import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={classNames(cls.navbar)}>
            <div className={classNames(cls.main)}>{t('navbar')}</div>
            <div className={classNames(cls.links)}>
                <AppLink
                    to="/"
                    className={classNames(cls.link)}
                    theme={AppLinkTheme.PRIMARY}
                >
                    {t('glavnaya')}
                </AppLink>
                <AppLink
                    to="/about"
                    className={classNames(cls.link)}
                    theme={AppLinkTheme.DASHED}
                >
                    {t('o-saite-0')}
                </AppLink>
            </div>
        </div>
    );
};
