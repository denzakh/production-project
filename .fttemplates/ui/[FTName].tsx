import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './<FTName>.module.scss';

export enum <FTName>Theme {
    PRIMARY = 'primary',
}

interface <FTName>Props {
    className?: string;
    theme?: <FTName>Theme;
}

export const <FTName>: FC<<FTName>Props> = (props) => {
    const { t, i18n } = useTranslation();

    const {
        className,
        children,
        theme = <FTName>Theme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.<FTName>, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
            {t('перевод')}
        </div>
    );
};
