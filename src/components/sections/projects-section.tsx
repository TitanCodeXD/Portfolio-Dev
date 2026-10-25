import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/project-card';
//Translations manualmente com i18n, ioteu por não utilizar nenhuma lib
import { translations, type Language } from '@/i18n/translations';

export const ProjectsSection = ({ language }: { language: Language }) => {
    const t = translations[language];
    return (
        <section
            id="projetos"
            aria-labelledby="projects-title"
            className="section-spacing scroll-mt-24"
        >
            <div className="container-site">
                {/* Cabeçalho da seção */}
                <div className="max-w-2xl">
                    <p className="text-label font-mono! text-accent">{t.projects.label}</p>

                    <h2
                        id="projects-title"
                        className="section-title mt-4 font-display font-bold tracking-tight text-foreground"
                    >
                        {t.projects.title}
                    </h2>

                    <p className="text-body mt-4 text-muted">{t.projects.description}</p>
                </div>

                {/* Grade de projetos */}
                <div className="mt-10 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            index={index}
                            language={language}
                        />
                    ))}
                </div>

                {/* Link para outros repositórios */}
                <div className="mt-10 flex justify-center">
                    <a
                        href="https://github.com/TitanCodeXD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-button border border-border-strong px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                        {t.projects.viewMore}
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
};
