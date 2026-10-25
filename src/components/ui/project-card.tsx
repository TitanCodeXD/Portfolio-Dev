import Image from 'next/image';
import type { Project } from '@/data/projects';

// Translations manualmente com i18n, justamente por não utilizar nenhuma lib
import { translations, type Language } from '@/i18n/translations';

type ProjectCardProps = {
    project: Project;
    index: number;
    language: Language;
};

export default function ProjectCard({ project, index, language }: ProjectCardProps) {
    const number = String(index + 1).padStart(2, '0');
    const t = translations[language];

    const category = project.category[language];
    const description = project.description[language];
    const title = project.title;

    return (
        <article className="group overflow-hidden rounded-card border border-border bg-surface transition-colors duration-200 hover:border-border-strong">
            {/* Imagem do projeto */}
            <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface-2">
                <Image
                    src={project.image}
                    alt={`Preview do projeto ${title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Degradê escuro para melhorar a legibilidade */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"
                />

                {/* Identificação do projeto */}
                <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 sm:p-7">
                    <span className="font-mono text-xs text-white/80">PROJECT / {number}</span>

                    <span className="font-mono text-xs text-accent">{'< />'}</span>
                </div>

                {/* Título e categoria sobre a imagem */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                    <p className="font-mono text-xs text-white/80 drop-shadow-md">{category}</p>

                    <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-white drop-shadow-lg transition-colors duration-200 group-hover:text-accent sm:text-4xl">
                        {title}
                        <span className="text-accent">.</span>
                    </h3>
                </div>
            </div>

            {/* Conteúdo */}
            <div className="flex h-full flex-col p-5 sm:p-6">
                <div>
                    <p className="text-body text-muted">{description}</p>
                </div>

                {/* Tecnologias */}
                <ul
                    aria-label={
                        language === 'pt'
                            ? `Tecnologias de ${title}`
                            : `Technologies used in ${title}`
                    }
                    className="mt-5 flex flex-wrap gap-2"
                >
                    {project.technologies.map((technology) => (
                        <li
                            key={technology}
                            className="rounded-md border border-border bg-background px-2 py-1 font-mono text-[11px] text-text-secondary"
                        >
                            {technology}
                        </li>
                    ))}
                </ul>

                {/* Links */}
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-4">
                    <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                    >
                        {t.projects.viewCode}
                        <span aria-hidden="true">↗</span>
                    </a>

                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
                        >
                            {t.projects.viewProject}
                            <span aria-hidden="true">↗</span>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
