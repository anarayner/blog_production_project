type Mods = Record<string, boolean | string>

//возвращает строку классов, принимает: главный класс(app), объект с mods(key- class name, value - boolean) и доп классы
export function classNames(cls: string, mods: Mods, additional: string[]): string{
    return [
        cls,
        ...additional,
        //фильтруем mods
        Object.entries(mods)
            .filter(([className, bool])=> Boolean(bool))
            .map(([className, bool])=> className)
    ]
        .join(' ')
}