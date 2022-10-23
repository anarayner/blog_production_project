export type Mods = Record<string, boolean | string | undefined>

// return строку классов, принимает: главный класс(app),
// obj с mods(key- class name, value - bool)и доп кл
export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
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
