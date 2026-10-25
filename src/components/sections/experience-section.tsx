//Translations manualmente com i18n, ioteu por não utilizar nenhuma lib
import { translations, type Language } from '@/i18n/translations';

const experiences = [
    {
        period: {
            pt: 'SET 2026 — PRESENTE',
            en: 'SEP 2026 — PRESENT',
        },
        role: {
            pt: 'Desenvolvedor Full Stack Júnior',
            en: 'Junior Full Stack Developer',
        },
        company: 'Storrer Co. Assessoria Empresarial',
        type: {
            pt: 'CLT · Presencial',
            en: 'Full-time · On-site',
        },
        description: {
            pt: 'Desenvolvimento de aplicações web Full Stack voltadas a soluções de Governança, Riscos e Compliance (GRC), integrando frontend, backend e bancos de dados. Utilização de ferramentas de inteligência artificial, como Claude Code e MCP, para apoiar o desenvolvimento de sistemas, a exploração de soluções técnicas e a otimização de tarefas. Atuação em um contexto que conecta engenharia de software, gerenciamento de riscos, controles internos e processos de auditoria.',
            en: 'Development of full-stack web applications for Governance, Risk, and Compliance (GRC) solutions, integrating frontend, backend, and databases. Use of AI tools such as Claude Code and MCP to support system development, explore technical solutions, and optimize tasks. Work in a context that connects software engineering, risk management, internal controls, and audit processes.',
        },
        technologies: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Supabase',
            'Vercel',
            'GRC Systems',
            'Internal Audits',
            'Risk Management',
            'Risk Controls',
            'Claude Code & MCP (Model Context Protocol)',
        ],
    },
    {
        period: {
            pt: 'MAR 2019 — DEZ 2019',
            en: 'MAR 2019 — DEC 2019',
        },
        role: {
            pt: 'Mecânico Aprendiz',
            en: 'Mechanical Maintenance Apprentice',
        },
        company: 'Trombini Embalagens S.A.',
        type: {
            pt: 'CLT · Presencial',
            en: 'Apprenticeship · On-site',
        },
        description: {
            pt: 'Contrato de aprendizagem vinculado ao SENAI, com atividades relacionadas à manutenção preventiva e corretiva de máquinas industriais. Também tive contato com processos de programação CNC, realizando ajustes e contribuindo para melhorias nos códigos, além de desenvolver conhecimentos em processos de usinagem e organização do ambiente de trabalho por meio da metodologia 5S.',
            en: 'Apprenticeship program affiliated with SENAI, involving preventive and corrective maintenance of industrial machinery. I also gained experience with CNC programming, making adjustments and contributing to code improvements, while developing knowledge of machining processes and workplace organization through the 5S methodology.',
        },
        technologies: ['CNC Programming', 'Machining Processes', '5S Methodology'],
    },
];

export const ExperienceSection = ({ language }: { language: Language }) => {
    const t = translations[language];
    return (
        <section id="experiencia" aria-labelledby="experience-title" className="section-spacing">
            <div className="container-site">
                <div className="mb-12">
                    <p className="text-label font-mono! mb-4 text-accent">{t.experience.label}</p>

                    <h2 id="experience-title" className="section-title">
                        {t.experience.title}
                    </h2>

                    <p className="text-body mt-4 max-w-2xl">{t.experience.description}</p>
                </div>

                <div className="relative ml-2 border-l border-border pl-8 md:ml-4 md:pl-10">
                    {experiences.map((experience) => (
                        <article key={experience.company} className="relative max-w-3xl pb-4">
                            <span
                                aria-hidden="true"
                                className="absolute -left-[37px] top-1.5 size-3 rounded-full border-2 border-accent bg-background md:-left-[45px]"
                            />

                            <p className="text-label mb-3">{experience.period[language]}</p>

                            <div className="surface-card rounded-xl border border-border p-6 transition-colors hover:border-border-strong md:p-8">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold tracking-tight text-foreground">
                                            {experience.role[language]}
                                        </h3>

                                        <p className="mt-1 text-text-secondary">
                                            {experience.company}
                                        </p>
                                    </div>

                                    <span className="text-label w-fit rounded-full border border-border px-3 py-1">
                                        {experience.type[language]}
                                    </span>
                                </div>

                                <p className="text-body mt-5">{experience.description[language]}</p>

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
