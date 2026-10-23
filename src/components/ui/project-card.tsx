import type { Project } from '@/data/projects';

type ProjectCardProps = {
    project: Project;
    index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const number = String(index + 1).padStart(2, '0');

    return (
        <article className="group overflow-hidden rounded-card border border-border bg-surface transition-colors duration-200 hover:border-border-strong">
            {/* TODO: screenshots dps faço*/}
            <div
                aria-hidden="true"
                className="relative flex aspect-[16/9] flex-col justify-between overflow-hidden border-b border-border bg-gradient-to-br from-surface-2 via-background to-surface p-6 sm:p-8"
            >
                <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted">PROJECT / {number}</span>

                    <span className="font-mono text-xs text-accent">{'< />'}</span>
                </div>

                <div className="relative">
                    <p className="font-mono text-xs text-muted">{project.category}</p>

                    <p className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-4xl">
                        {project.title}
                        <span className="text-accent">.</span>
                    </p>
                </div>

                <div className="absolute -bottom-12 -right-8 h-40 w-40 rounded-full border border-border/60 sm:h-48 sm:w-48" />
                <div className="absolute -bottom-6 -right-2 h-28 w-28 rounded-full border border-border/60 sm:h-36 sm:w-36" />
            </div>

            {/* Conteúdo */}
            <div className="flex h-full flex-col p-5 sm:p-6">
                <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                        {project.category}
                    </p>

                    <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                        {project.title}
                    </h3>

                    <p className="text-body mt-3 text-muted">{project.description}</p>
                </div>

                {/* Tecnologias */}
                <ul
                    aria-label={`Tecnologias de ${project.title}`}
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
                        Código <span aria-hidden="true">↗</span>
                    </a>

                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
                        >
                            Ver projeto <span aria-hidden="true">↗</span>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
