import dayjs, { Dayjs } from 'dayjs';

const sourceFiles = [
    'custom_crosshair_mod+curseforge+downloads.txt',
    'custom_crosshair_mod+modrinth+downloads.txt',
    'custom_crosshair_mod+modrinth+followers.txt',
    'custom_crosshair_mod+pastebin+views.txt',
    'helpful_crosshair+curseforge+downloads.txt',
    'helpful_crosshair+modrinth+downloads.txt',
    'helpful_crosshair+modrinth+followers.txt',
    'helpful_crosshair+pastebin+views.txt',
];

export interface IProjectData {
    readonly projectIdentifier: string;
    readonly retrieverIdentifier: string;
    readonly dataType: string;
    readonly values: Array<IValue>;
    readonly latestValue: number;
}

export interface IValue {
    readonly retrievedAt: Dayjs;
    readonly value: number;
}

export async function getData() {
    const data: Array<IProjectData> = [];

    for (const file of sourceFiles) {
        const response = await $fetch<string>(`https://raw.githubusercontent.com/wjbaker101/project-stats-retriever/refs/heads/master/output/${encodeURIComponent(file)}`);

        data.push(mapFile(file, response));
    }

    return data;
}

function mapFile(file: string, contents: string): IProjectData {
    const [ projectIdentifier, retrieverIdentifier, dataType ] = file.replace('.txt', '').split('+') as [string, string, string];

    const values = contents.split('\n').filter(x => x.length > 0).map(mapLine);

    return {
        projectIdentifier,
        retrieverIdentifier,
        dataType,
        values: transform(values).filter(x => removeOutliers(x, projectIdentifier, retrieverIdentifier, dataType)),
        latestValue: values.at(-1)?.value ?? 0,
    };
}

function mapLine(line: string): IValue {
    const [ retrievedAt, value ] = line.split('\t') as [string, string];

    return {
        retrievedAt: dayjs(retrievedAt.split(' ')[0]),
        value: Number(value),
    };
}

function transform(data: Array<IValue>): Array<IValue> {
    const transformed: Array<IValue> = [];

    for (let index = 1; index < data.length; index++) {
        const item = data[index]!;
        const previousItem = data[index - 1]!;
        
        transformed.push({
            retrievedAt: item.retrievedAt,
            value: item.value - previousItem.value,
        });
    }

    return transformed;
}

function removeOutliers(value: IValue, projectIdentifier: string, retrieverIdentifier: string, dataType: string) {
    const outliers: Record<string, Record<string, Record<string, Set<number>>>> = {
        'custom_crosshair_mod': {
            'curseforge': {
                'downloads': new Set([
                    dayjs().year(2022).month(4).date(6).startOf('day').unix(),
                    dayjs().year(2022).month(4).date(7).startOf('day').unix(),
                    dayjs().year(2022).month(4).date(8).startOf('day').unix(),
                    dayjs().year(2022).month(4).date(9).startOf('day').unix(),
                    dayjs().year(2022).month(4).date(10).startOf('day').unix(),
                    dayjs().year(2022).month(4).date(11).startOf('day').unix(),

                    dayjs().year(2025).month(5).date(14).startOf('day').unix(),
                    dayjs().year(2025).month(5).date(15).startOf('day').unix(),
                    dayjs().year(2025).month(5).date(17).startOf('day').unix(),
                    dayjs().year(2025).month(5).date(18).startOf('day').unix(),

                    dayjs().year(2026).month(5).date(6).startOf('day').unix(),
                ]),
            },
            'modrinth': {
                'downloads': new Set([
                    dayjs().year(2026).month(10).date(5).startOf('day').unix(),
                ]),
            },
            'pastebin': {
                'views': new Set([
                    dayjs().year(2025).month(11).date(31).startOf('day').unix(),

                    dayjs().year(2024).month(5).date(15).startOf('day').unix(),

                    dayjs().year(2026).month(6).date(29).startOf('day').unix(),
                    dayjs().year(2026).month(6).date(30).startOf('day').unix(),

                    dayjs().year(2026).month(9).date(14).startOf('day').unix(),
                ]),
            },
        },
        'helpful_crosshair': {
            'curseforge': {},
            'modrinth': {},
            'pastebin': {},
        },
    };

    if (outliers[projectIdentifier]?.[retrieverIdentifier]?.[dataType]?.has(value.retrievedAt.startOf('day').unix())) {
        return false;
    }

    return true;
}