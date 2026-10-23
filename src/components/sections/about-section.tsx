const skillGroups = [
    {
        title: 'Linguagens',
        skills: ['JavaScript', 'TypeScript', 'Python', 'C', 'R'],
    },
    {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'Redux', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
        title: 'Backend & APIs',
        skills: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'JWT', 'Socket.IO'],
    },
    {
        title: 'Bancos de dados & serviços',
        skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Supabase', 'Firebase'],
    },
    {
        title: 'Cloud, DevOps & ferramentas',
        skills: ['AWS S3', 'Docker', 'Git', 'GitHub Actions', 'Vercel', 'Bash', 'Claude Code'],
    },
    {
        title: 'Testes & documentação',
        skills: ['Jest', 'Swagger', 'OpenAPI'],
    },
];

const focusAreas = [
    'Governança, Riscos e Compliance (GRC)',
    'Gestão de riscos e controles internos',
    'Auditoria e conformidade',
    'LGPD e cibersegurança',
    'Inteligência artificial aplicada ao desenvolvimento',
];

export const AboutSection = () => {
    return (
        <section id="sobre" aria-labelledby="about-title" className="section-spacing">
            <div className="container-site">
                <div className="mb-12">
                    <p className="text-label font-mono! mb-4 text-accent">03 / SOBRE MIM</p>

                    <h2 id="about-title" className="section-title">
                        Um pouco além do código.
                    </h2>
                </div>

                <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
                    {/* Apresentação */}
                    <div className="flex flex-col gap-5">
                        <p className="text-body leading-7!">
                            Sou formado em Engenharia da Computação e movido pela curiosidade de
                            entender como as coisas funcionam, não apenas no código, mas em todo o
                            ecossistema que envolve a tecnologia. Meu objetivo é me tornar um
                            profissional Full Stack em seu sentido mais amplo: alguém capaz de
                            compreender uma aplicação de ponta a ponta, desde a interface e a
                            experiência do usuário até o backend, os bancos de dados, a
                            infraestrutura, a segurança e os processos que sustentam uma solução
                            tecnológica.
                        </p>

                        <p className="text-body leading-7!">
                            Acredito que desenvolver software vai muito além de escrever código.
                            Quero entender as decisões por trás de cada sistema, como os dados são
                            protegidos, como os riscos são identificados, como os controles são
                            estabelecidos e como as organizações garantem que seus processos estejam
                            alinhados às normas e aos requisitos aplicáveis. Por isso, venho
                            expandindo meus conhecimentos em Governança, Riscos e Compliance (GRC),
                            auditoria, gestão de riscos, controles internos, conformidade, SOX,
                            normas ISO, LGPD e cibersegurança. Vejo essas áreas não como caminhos
                            separados do desenvolvimento, mas como conhecimentos complementares que
                            me permitem enxergar a tecnologia de maneira mais estratégica,
                            responsável e completa.
                        </p>

                        <p className="text-body leading-7!">
                            Também tenho explorado novas formas de desenvolver software com
                            inteligência artificial. No meu dia a dia, utilizo o Claude Code como
                            ferramenta de apoio à implementação, análise e resolução de problemas,
                            explorando recursos como MCP (Model Context Protocol) para conectar
                            modelos de IA a ferramentas, dados e contextos de trabalho. Tenho
                            interesse em aprofundar meus conhecimentos em RAG (Retrieval-Augmented
                            Generation), LangChain e na construção de soluções com agentes de IA,
                            buscando compreender não apenas como utilizá-las, mas também como
                            funcionam e como podem ser aplicadas de maneira eficiente.
                        </p>

                        <p className="text-body leading-7!">
                            Sou alguém que gosta de aprender, experimentar e conectar conhecimentos
                            de diferentes áreas. Quanto mais descubro sobre tecnologia, mais percebo
                            quantas possibilidades existem para explorar. Quero continuar evoluindo
                            como desenvolvedor Full Stack, ampliar minha compreensão sobre
                            infraestrutura, segurança, governança e inteligência artificial e
                            construir soluções que unam conhecimento técnico, visão de negócio e
                            capacidade de resolver problemas reais. Minha ambição é justamente essa:
                            não me limitar a uma única camada da tecnologia, mas desenvolver uma
                            visão ampla o suficiente para compreender como suas diferentes partes se
                            conectam e como podem gerar valor juntas.
                        </p>

                        <div className="mt-3 border-l-2 border-accent pl-5">
                            <p className="text-sm leading-relaxed text-text-secondary">
                                O foco é me tornar além de um Full Stack, alguém que sabe lidar com
                                normas, com riscos, com GRC, cibersegurança, com inteligência
                                artificial, problemas... e acima de tudo, com pessoas. Porque no
                                final, tecnologia é feita por pessoas e para pessoas.
                            </p>
                        </div>
                    </div>

                    {/* Informações profissionais */}
                    <div className="flex flex-col gap-4">
                        {/* Formação */}
                        <article className="surface-card rounded-xl border border-border p-5">
                            <span className="text-label font-mono! text-accent">FORMAÇÃO</span>

                            <h3 className="mt-3 text-lg font-semibold text-foreground">
                                Engenharia da Computação
                            </h3>

                            <p className="mt-1 text-sm text-muted">UNIFATECPR · 2019–2024</p>
                        </article>

                        {/* Foco atual */}
                        <article className="surface-card rounded-xl border border-border p-5">
                            <span className="text-label font-mono! text-accent">
                                FOCO PROFISSIONAL
                            </span>

                            <h3 className="mt-3 text-lg font-semibold text-foreground">
                                Desenvolvimento Full Stack
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                                Desenvolvimento de aplicações web com Next.js, TypeScript e
                                Supabase, explorando soluções que integram frontend, backend e
                                bancos de dados.
                            </p>
                        </article>

                        {/* Áreas de interesse */}
                        <article className="surface-card rounded-xl border border-border p-5">
                            <span className="text-label font-mono! text-accent">
                                OUTRAS ÁREAS EM DESENVOLVIMENTO
                            </span>

                            <ul className="mt-4 flex flex-col gap-3">
                                {focusAreas.map((area) => (
                                    <li
                                        key={area}
                                        className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                                        />
                                        {area}
                                    </li>
                                ))}
                            </ul>
                        </article>

                        {/* Competências técnicas */}
                        <article className="surface-card rounded-xl border border-border p-5">
                            <span className="text-label font-mono! text-accent">
                                COMPETÊNCIAS TÉCNICAS
                            </span>

                            <div className="mt-5 flex flex-col gap-5">
                                {skillGroups.map((group) => (
                                    <div key={group.title}>
                                        <h3 className="mb-2.5 text-sm font-medium text-foreground">
                                            {group.title}
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
                            <span className="text-label font-mono! text-accent">IDIOMAS</span>

                            <div className="mt-3 flex flex-col gap-3">
                                <div>
                                    <h3 className="font-semibold text-foreground">Português</h3>
                                    <p className="text-sm text-muted">Nativo</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-foreground">Inglês</h3>
                                    <p className="text-sm leading-relaxed text-muted">
                                        Em desenvolvimento contínuo, com foco em comunicação
                                        profissional.
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
