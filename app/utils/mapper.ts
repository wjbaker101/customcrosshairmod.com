export const projects = {
    'custom_crosshair_mod': 'Custom Crosshair Mod',
    'helpful_crosshair': 'Helpful Crosshair',
};
export type ProjectIdentifier = keyof typeof projects;

const retrievers = {
    'curseforge': 'CurseForge',
    'modrinth': 'Modrinth',
    'pastebin': 'Pastebin',
};
export type RetrieverIdentifier = keyof typeof retrievers;

export const periods = {
    'all_time': 'All Time',
    'recent': 'Recent',
};
export type PeriodIdentifier = keyof typeof periods;

export class Mapper {
    
    public static project(projectIdentifier: string): string {
        if (projectIdentifier in projects) {
            return projects[projectIdentifier as ProjectIdentifier];
        }

        return projectIdentifier;
    }

    public static retriever(retrieverIdentifier: string): string {
        if (retrieverIdentifier in retrievers) {
            return retrievers[retrieverIdentifier as RetrieverIdentifier];
        }

        return retrieverIdentifier;
    }

    public static period(periodIdentifier: string): string {
        if (periodIdentifier in periods) {
            return periods[periodIdentifier as PeriodIdentifier];
        }

        return periodIdentifier;
    }
}