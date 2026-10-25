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
                <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
                    {/* Apresentação */}
                    <div className="flex flex-col gap-5 md:sticky md:top-28 md:self-start">
                        <div className="mb-12">
                            <p className="text-label font-mono! mb-4 text-accent">03 / SOBRE MIM</p>

                            <h2 id="about-title" className="section-title">
                                Um pouco além do código.
                            </h2>
                        </div>
                        <p className="text-body leading-7!">
                            Sou formado em Engenharia da Computação e sempre fui movido pela
                            curiosidade de entender como as coisas funcionam. Com o tempo, percebi
                            que, para mim, ser Full Stack não se resume a transitar entre frontend e
                            backend. É compreender uma aplicação inteira: da interface e da
                            experiência do usuário ao banco de dados, à infraestrutura, à segurança
                            e aos processos que sustentam tudo isso.
                        </p>

                        <p className="text-body leading-7!">
                            Foi assim que cheguei a Governança, Riscos e Compliance (GRC).
                            Trabalhando no desenvolvimento de uma plataforma da área, entendi que
                            muitas decisões técnicas nascem de exigências que estão fora do código.
                            Um controle de acesso bem definido, uma trilha de auditoria confiável ou
                            o isolamento correto dos dados de cada cliente não são detalhes de
                            implementação: são respostas a riscos, normas e leis. Por isso venho
                            estudando gestão de riscos, controles internos, auditoria e
                            conformidade, além de referências como SOX, normas ISO, LGPD e boas
                            práticas de cibersegurança. Não vejo essas áreas como um caminho
                            separado do desenvolvimento, e sim como o contexto que dá sentido a ele.
                        </p>

                        <p className="text-body leading-7!">
                            Também tenho explorado novas formas de construir software com
                            inteligência artificial. No dia a dia, uso o Claude Code como apoio na
                            implementação, na análise e na resolução de problemas, e exploro o MCP
                            (Model Context Protocol) para conectar modelos de IA a ferramentas e
                            dados de trabalho. Meus próximos passos são RAG (Retrieval-Augmented
                            Generation), LangChain e agentes de IA, com o mesmo princípio de sempre:
                            entender como funcionam, e não apenas como usar.
                        </p>

                        <p className="text-body leading-7!">
                            Gosto de aprender, experimentar e conectar conhecimentos de áreas
                            diferentes. Quero continuar evoluindo como desenvolvedor e, ao mesmo
                            tempo, como alguém capaz de lidar com normas, riscos, segurança e, acima
                            de tudo, com pessoas. Porque, no fim, tecnologia é feita por pessoas e
                            para pessoas.
                        </p>

                        <p className="text-body leading-7!">
                            Minha trajetória começou com os primeiros projetos em HTML, CSS e
                            JavaScript e foi ganhando profundidade a cada desafio. Com o tempo,
                            passei a me interessar cada vez mais pelo que acontece por trás da tela:
                            construí uma API com NestJS usando Redis, filas, testes com Jest,
                            documentação com Swagger e Docker, e uma aplicação full stack com
                            armazenamento de arquivos no Amazon S3. Foram esses projetos que me
                            mostraram que as decisões mais interessantes raramente estão só na
                            interface. Elas estão em como os dados circulam, como o sistema lida com
                            tarefas pesadas e como ele continua confiável quando algo dá errado.
                        </p>

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
