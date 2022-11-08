import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const { t } = useTranslation();
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    function onChangeHandler(e: ChangeEvent<HTMLSelectElement>) {
        if (onChange) {
            onChange(e.target.value);
        }
    }

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && !readonly
                && (
                    <span className={cls.label}>
                        {label}
                    </span>
                )}
            {readonly && value}
            {!readonly && (
                <select
                    disabled={readonly}
                    className={cls.select}
                    value={value}
                    onChange={onChangeHandler}
                >
                    {optionList}
                </select>
            )}
        </div>
    );
});