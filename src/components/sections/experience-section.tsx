const experiences = [
    {
        period: 'SET 2026 — ATUAL',
        role: 'Desenvolvedor Full Stack Júnior',
        company: 'Storrer Co. Assesoria Empresarial',
        type: 'CLT · Presencial',
        description:
            'Desenvolvimento de aplicações web utilizando tecnologias modernas, com foco em soluções full stack e integração entre frontend e backend.',
        technologies: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind',
            'Supabase',
            'Vercel',
            'Claude Code',
        ],
    },
    {
        period: 'MAR 2019 — DEZ 2019',
        role: 'Mecânico Aprendiz',
        company: 'Trombini Embalagens S.A.',
        type: 'CLT · Presencial',
        description:
            '- Contrato vinculado à instituição de ensino SENAI; Colaborei na manutenção preventiva e corretiva de máquinas industriais, contribuindo para a redução do tempo de inatividade; Auxiliei nos processos de programação CNC, realizando ajustes e contribuindo para melhoria da eficiência dos códigos.',
        technologies: ['Programação CNC', 'Processos de Usinagem', 'Metodologia 5S'],
    },
];

export const ExperienceSection = () => {
    return (
        <section id="experiencia" aria-labelledby="experience-title" className="section-spacing">
            <div className="container-site">
                <div className="mb-12">
                    <p className="text-label font-mono! mb-4 text-accent">02 / EXPERIÊNCIA</p>

                    <h2 id="experience-title" className="section-title">
                        Minha trajetória profissional.
                    </h2>

                    <p className="text-body mt-4 max-w-2xl">
                        Minha evolução profissional, experiências práticas e tecnologias com as
                        quais trabalho.
                    </p>
                </div>

                <div className="relative ml-2 border-l border-border pl-8 md:ml-4 md:pl-10">
                    {experiences.map((experience) => (
                        <article key={experience.company} className="relative max-w-3xl pb-4">
                            <span
                                aria-hidden="true"
                                className="absolute -left-[37px] top-1.5 size-3 rounded-full border-2 border-accent bg-background md:-left-[45px]"
                            />

                            <p className="text-label mb-3">{experience.period}</p>

                            <div className="surface-card rounded-xl border border-border p-6 transition-colors hover:border-border-strong md:p-8">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold tracking-tight text-foreground">
                                            {experience.role}
                                        </h3>

                                        <p className="mt-1 text-text-secondary">
                                            {experience.company}
                                        </p>
                                    </div>

                                    <span className="text-label w-fit rounded-full border border-border px-3 py-1">
                                        {experience.type}
                                    </span>
                                </div>

                                <p className="text-body mt-5">{experience.description}</p>

                                <ul className="mt-5 flex flex-wrap gap-2">
                                    {experience.technologies.map((technology) => (
                                        <li
                                            key={technology}
                                            className="rounded-md border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-text-secondary"
                                        >
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
