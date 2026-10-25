import { translations, type Language } from '@/i18n/translations';

const technologies = [
    'TYPESCRIPT',
    'NODE.JS',
    'NESTJS',
    'REACT',
    'NEXT.JS',
    'TAILWINDCSS',
    'SUPABASE',
    'POSTGRESQL',
    'MONGODB',
    'DOCKER',
];

export const TechStack = ({ language }: { language: Language }) => {
    const t = translations[language];

    return (
        <section aria-label={t.techStack.label} className="border-y border-border bg-[#0F1217]">
            <div className="container-site flex min-h-[76px] items-center gap-8 py-4 max-md:flex-col max-md:items-start max-md:gap-3">
                <span className="shrink-0 font-mono text-xs font-medium tracking-wider text-accent">
                    {t.techStack.label}
                </span>

                <ul className="flex min-w-0 flex-1 flex-wrap items-center gap-x-7 gap-y-3 max-md:gap-x-5">
                    {technologies.map((technology) => (
                        <li
                            key={technology}
                            className="shrink-0 font-mono text-xs font-medium tracking-wide text-text-secondary transition-colors hover:text-accent"
                        >
                            {technology}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
