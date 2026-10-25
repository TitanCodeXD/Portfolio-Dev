//Translations manualmente com i18n, ioteu por não utilizar nenhuma lib
import { translations, type Language } from '@/i18n/translations';

const skillGroups = [
    {
        title: {
            pt: 'Linguagens',
            en: 'Languages',
        },
        skills: ['JavaScript', 'TypeScript', 'Python', 'C', 'R'],
    },
    {
        title: {
            pt: 'Frontend',
            en: 'Frontend',
        },
        skills: ['React', 'Next.js', 'Redux', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
        title: {
            pt: 'Backend & APIs',
            en: 'Backend & APIs',
        },
        skills: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'JWT', 'Socket.IO'],
    },
    {
        title: {
            pt: 'Bancos de dados & serviços',
            en: 'Databases & Services',
        },
        skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Supabase', 'Firebase'],
    },
    {
        title: {
            pt: 'Cloud, DevOps & ferramentas',
            en: 'Cloud, DevOps & Tools',
        },
        skills: ['AWS S3', 'Docker', 'Git', 'GitHub Actions', 'Vercel', 'Bash', 'Claude Code'],
    },
    {
        title: {
            pt: 'Testes & documentação',
            en: 'Testing & Documentation',
        },
        skills: ['Jest', 'Swagger', 'OpenAPI'],
    },
];

const focusAreas = [
    {
        pt: 'Governança, Riscos e Compliance (GRC)',
        en: 'Governance, Risk, and Compliance (GRC)',
    },
    {
        pt: 'Gestão de riscos e controles internos',
        en: 'Risk Management and Internal Controls',
    },
    {
        pt: 'Auditoria e conformidade',
        en: 'Auditing and Compliance',
    },
    {
        pt: 'LGPD e cibersegurança',
        en: 'LGPD and Cybersecurity',
    },
    {
        pt: 'Inteligência artificial aplicada ao desenvolvimento',
        en: 'Artificial Intelligence applied to Development',
    },
];

export const AboutSection = ({ language }: { language: Language }) => {
    const t = translations[language];

    return (
        <section id="sobre" aria-labelledby="about-title" className="section-spacing">
            <div className="container-site">
                <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
                    {/* Apresentação */}
                    <div className="flex flex-col gap-5 md:sticky md:top-28 md:self-start">
                        <div className="mb-12">
                            <p className="text-label font-mono! mb-4 text-accent">
                                {t.about.label}
                            </p>

                            <h2 id="about-title" className="section-title">
                                {t.about.title}
                            </h2>
                        </div>
                        <p className="text-body leading-7!">{t.about.paragraphs[0]}</p>

                        <p className="text-body leading-7!">{t.about.paragraphs[1]}</p>

                        <p className="text-body leading-7!">{t.about.paragraphs[2]}</p>

                        <p className="text-body leading-7!">{t.about.paragraphs[3]}</p>

                        <p className="text-body leading-7!">{t.about.paragraphs[4]}</p>

                        <div className="mt-3 border-l-2 border-accent pl-5">
                            <p className="text-sm leading-relaxed text-text-secondary">
                                "Eat, Sleep, Code, Repeat"
                            </p>
                        </div>
                    </div>

                    {/* Informações profissionais */}
                    <div className="flex flex-col gap-4">
                        {/* Formação */}
                        <article className="surface-card rounded-xl border border-border p-5">
                            <span className="text-label font-mono! text-accent">
                                {t.about.educationLabel}
                            </span>

                            <h3 className="mt-3 text-lg font-semibold text-foreground">
                                {t.about.degree}
                            </h3>

                            <p className="mt-1 text-sm text-muted">UNIFATECPR · 2019–2024</p>
                        </article>

                        {/* Foco atual */}
                        <article className="surface-card rounded-xl border border-border p-5">
                            <span className="text-label font-mono! text-accent">
                                {t.about.professionalFocusLabel}
                            </span>

                            <h3 className="mt-3 text-lg font-semibold text-foreground">
                                {t.about.professionalFocusTitle}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                                {t.about.professionalFocusDescription}
                            </p>
                        </article>

                        {/* Áreas de interesse */}
                        <article className="surface-card rounded-xl border border-border p-5">
                            <span className="text-label font-mono! text-accent">
                                {t.about.otherAreasLabel}
                            </span>

                            <ul className="mt-4 flex flex-col gap-3">
                                {focusAreas.map((area) => (
                                    <li
                                        key={area[language]}
                                        className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                                        />
                                        {area[language]}
                                    </li>
                                ))}
                            </ul>
                        </article>

                        {/* Competências técnicas */}
                        <article className="surface-card rounded-xl border border-border p-5">
                            <span className="text-label font-mono! text-accent">
                                {t.about.technicalSkillsLabel}
                            </span>

                            <div className="mt-5 flex flex-col gap-5">
                                {skillGroups.map((group) => (
                                    <div key={group.title[language]}>
                                        <h3 className="mb-2.5 text-sm font-medium text-foreground">
                                            {group.title[language]}
                                        </h3>

                                        <ul className="flex flex-wrap gap-2">
                                            {group.skills.map((skill) => (
                                                <li
                                                    key={skill}
                                                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1.5 font-mono text-xs text-text-secondary"
                                                >
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </article>

                        {/* Idiomas */}
                        <article className="surface-card rounded-xl border border-border p-5">
                            <span className="text-label font-mono! text-accent">
                                {t.about.languagesLabel}
                            </span>

                            <div className="mt-3 flex flex-col gap-3">
                                <div>
                                    <h3 className="font-semibold text-foreground">
                                        {t.about.languagePT}
                                    </h3>
                                    <p className="text-sm text-muted">{t.about.native}</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-foreground">
                                        {t.about.languageEN}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted">
                                        {t.about.englishDescription}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};
