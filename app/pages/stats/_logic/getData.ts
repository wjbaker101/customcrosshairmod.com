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
                    createOutlier(2022, 5, 6),
                    createOutlier(2022, 5, 7),
                    createOutlier(2022, 5, 8),
                    createOutlier(2022, 5, 9),
                    createOutlier(2022, 5, 10),
                    createOutlier(2022, 5, 11),

                    createOutlier(2025, 6, 14),
                    createOutlier(2025, 6, 15),
                    createOutlier(2025, 6, 17),
                    createOutlier(2025, 6, 18),

                    createOutlier(2026, 6, 6),
                ]),
            },
            'modrinth': {
                'downloads': new Set([
                    createOutlier(2026, 11, 5),
                ]),
            },
            'pastebin': {
                'views': new Set([
                    createOutlier(2022, 8, 12),

                    createOutlier(2024, 1, 31),
                    createOutlier(2024, 2, 1),
                    createOutlier(2024, 6, 15),

                    createOutlier(2025, 12, 31),

                    createOutlier(2026, 7, 29),
                    createOutlier(2026, 7, 30),

                    createOutlier(2026, 10, 12),
                    createOutlier(2026, 10, 13),
                    createOutlier(2026, 10, 14),

                    createOutlier(2026, 11, 9),
                    createOutlier(2026, 11, 10),
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

function createOutlier(year: number, month: number, day: number) {
    return dayjs(new Date(year, month - 1, day)).startOf('day').unix();
}