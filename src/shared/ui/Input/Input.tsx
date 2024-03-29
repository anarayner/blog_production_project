import React, { InputHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

export interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames('', mods, [className])}>
            {readonly ? (
                <div className={cls.with_placeholder}>
                    <div className={cls.placeholder}>{placeholder}:</div>
                    <input
                        className={cls.input}
                        type={type}
                        value={value}
                        onChange={onChangeHandler}
                        placeholder={placeholder}
                        readOnly={readonly}
                        {...otherProps}
                    />
                </div>
            ) : (
                <input
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    placeholder={placeholder}
                    readOnly={readonly}
                    {...otherProps}
                />
            )}
        </div>
    );
});
