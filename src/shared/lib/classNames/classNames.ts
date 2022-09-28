type Mods = Record<string, boolean | string>

// return строку классов, принимает: главный класс(app),
// obj с mods(key- class name, value - bool)и доп кл
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        // фильтруем mods
        ...Object.entries(mods)
            .filter(([_, bool]) => Boolean(bool))
            .map(([className]) => className),
    ]
        .join(' ');
}
