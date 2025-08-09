export const projects: Record<string, string> = {
    'custom_crosshair_mod': 'Custom Crosshair Mod',
    'helpful_crosshair': 'Helpful Crosshair',
};

const retrievers: Record<string, string> = {
    'curseforge': 'CurseForge',
    'modrinth': 'Modrinth',
    'pastebin': 'Pastebin',
};

export const periods: Record<string, string> = {
    'all_time': 'All Time',
    'recent': 'Recent',
};

export class Mapper {
    
    public static project(projectIdentifier: string): string {
        if (projectIdentifier in projects) {
            return projects[projectIdentifier]!;
        }

        return projectIdentifier;
    }

    public static retriever(retrieverIdentifier: string): string {
        if (retrieverIdentifier in retrievers) {
            return retrievers[retrieverIdentifier]!;
        }

        return retrieverIdentifier;
    }

    public static period(periodIdentifier: string): string {
        if (periodIdentifier in periods) {
            return periods[periodIdentifier]!;
        }

        return periodIdentifier;
    }
}