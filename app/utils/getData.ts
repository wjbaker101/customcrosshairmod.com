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
        values: transform(values),
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