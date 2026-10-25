export type Language = 'pt' | 'en';

export const translations = {
    pt: {
        navigation: {
            navigation: 'NAVEGAÇÃO',
            home: 'Início',
            projects: 'Projetos',
            experience: 'Experiência',
            about: 'Sobre',
            contact: 'Contato',
            resume: 'Currículo (PDF)',
        },

        hero: {
            greeting: '// Olá, eu sou',
            title: 'WESLEY SANTOS',
            subtitle:
                'Desenvolvedor Full Stack que enxerga além do código: segurança, riscos e governança em tecnologia.',
            description:
                'Sou formado em Engenharia da Computação e gosto de transformar ideias em soluções práticas, do backend à interface. Atualmente, trabalho com Next.js, TypeScript, Supabase, Amazon AWS e mais enquanto amplio meus conhecimentos em inteligência artificial, cibersegurança, auditoria, riscos e Governança, Riscos e Compliance (GRC). Meu objetivo é compreender a tecnologia de ponta a ponta, não apenas como sistemas são construídos, mas também como funcionam, são protegidos, avaliados e governados.',
            projectsButton: 'Ver projetos',
            contactButton: 'Entrar em contato',
        },

        techStack: {
            label: 'STACK PRINCIPAL',
        },

        projects: {
            label: '02 / PROJETOS',
            title: 'Projetos em destaque',
            description:
                'Uma seleção de projetos que demonstram minhas habilidades na construção de aplicações e soluções práticas.',
            viewProject: 'Ver projeto',
            viewCode: 'Ver código',
            viewMore: 'Ver todos os projetos',
        },

        experience: {
            label: '03 / EXPERIÊNCIA',
            title: 'Experiência profissional',
            current: 'Atual',
            role: 'Desenvolvedor Full Stack',
            company: 'Storrer Solutions',
            description:
                'Atuação no desenvolvimento de uma plataforma de Governança, Riscos e Compliance (GRC), contribuindo para aplicações web, funcionalidades de negócio e integração com tecnologias modernas.',
        },

        about: {
            label: '03 / SOBRE MIM',
            title: 'Um pouco além do código.',
            paragraphs: [
                'Sou formado em Engenharia da Computação e sempre fui movido pela curiosidade de entender como as coisas funcionam. Com o tempo, percebi que, para mim, ser Full Stack não se resume a transitar entre frontend e backend. É compreender uma aplicação inteira: da interface e da experiência do usuário ao banco de dados, à infraestrutura, à segurança e aos processos que sustentam tudo isso.',
                'Foi assim que cheguei a Governança, Riscos e Compliance (GRC). Trabalhando no desenvolvimento de uma plataforma da área, entendi que muitas decisões técnicas nascem de exigências que estão fora do código. Um controle de acesso bem definido, uma trilha de auditoria confiável ou o isolamento correto dos dados de cada cliente não são detalhes de implementação: são respostas a riscos, normas e leis. Por isso venho estudando gestão de riscos, controles internos, auditoria e conformidade, além de referências como SOX, normas ISO, LGPD e boas práticas de cibersegurança. Não vejo essas áreas como um caminho separado do desenvolvimento, e sim como o contexto que dá sentido a ele.',
                'Também tenho explorado novas formas de construir software com inteligência artificial. No dia a dia, uso o Claude Code como apoio na implementação, na análise e na resolução de problemas, e exploro o MCP (Model Context Protocol) para conectar modelos de IA a ferramentas e dados de trabalho. Meus próximos passos são RAG (Retrieval-Augmented Generation), LangChain e agentes de IA, com o mesmo princípio de sempre: entender como funcionam, e não apenas como usar.',
                'Gosto de aprender, experimentar e conectar conhecimentos de áreas diferentes. Quero continuar evoluindo como desenvolvedor e, ao mesmo tempo, como alguém capaz de lidar com normas, riscos, segurança e, acima de tudo, com pessoas. Porque, no fim, tecnologia é feita por pessoas e para pessoas.',
                'Minha trajetória começou com os primeiros projetos em HTML, CSS e JavaScript e foi ganhando profundidade a cada desafio. Com o tempo, passei a me interessar cada vez mais pelo que acontece por trás da tela: construí uma API com NestJS usando Redis, filas, testes com Jest, documentação com Swagger e Docker, e uma aplicação full stack com armazenamento de arquivos no Amazon S3. Foram esses projetos que me mostraram que as decisões mais interessantes raramente estão só na interface. Elas estão em como os dados circulam, como o sistema lida com tarefas pesadas e como ele continua confiável quando algo dá errado.',
            ],
            educationLabel: 'FORMAÇÃO',
            degree: 'Engenharia da Computação',
            professionalFocusLabel: 'FOCO PROFISSIONAL',
            professionalFocusTitle: 'Desenvolvimento Full Stack',
            professionalFocusDescription:
                'Desenvolvimento de aplicações web com Next.js, TypeScript e Supabase, explorando soluções que integram frontend, backend e bancos de dados.',
            otherAreasLabel: 'OUTRAS ÁREAS EM DESENVOLVIMENTO',
            technicalSkillsLabel: 'COMPETÊNCIAS TÉCNICAS',
            languagesLabel: 'IDIOMAS',
            native: 'Nativo',
            languagePT: 'Portuguese',
            languageEN: 'English',
            englishDescription:
                'Em desenvolvimento contínuo, com foco em comunicação profissional.',
            skillGroups: {
                languages: 'Linguagens',
                frontend: 'Frontend',
                backend: 'Backend & APIs',
                databases: 'Bancos de dados & serviços',
                cloud: 'Cloud, DevOps & ferramentas',
                testing: 'Testes & documentação',
            },
            focusAreas: [
                'Governança, Riscos e Compliance (GRC)',
                'Gestão de riscos e controles internos',
                'Auditoria e conformidade',
                'LGPD e cibersegurança',
                'Inteligência artificial aplicada ao desenvolvimento',
            ],
        },

        contact: {
            label: '04 / CONTATO',
            title: 'Vamos construir algo juntos?',
            description:
                'Estou aberto a oportunidades, conexões profissionais e conversas sobre tecnologia. Se quiser trocar uma ideia ou conhecer meu trabalho, entre em contato.',
            resumeButton: 'Visualizar currículo',
            emailButton: 'E-mail',
            githubButton: 'GitHub',
            linkedinButton: 'LinkedIn',
        },

        footer: {
            rights: 'Todos os direitos reservados.',
            builtWith: 'Desenvolvido com',
        },
    },
    en: {
        navigation: {
            navigation: 'NAVIGATION',
            home: 'Home',
            projects: 'Projects',
            experience: 'Experience',
            about: 'About',
            contact: 'Contact',
            resume: 'Resume (PDF)',
        },

        hero: {
            greeting: '// Hello, I am',
            title: 'WESLEY SANTOS',
            subtitle:
                'A Full Stack Developer who looks beyond the code: security, risk, and technology governance.',
            description:
                'I hold a degree in Computer Engineering and enjoy turning ideas into practical solutions, from backend to interface. I currently work with Next.js, TypeScript, Supabase, AWS, and more while expanding my knowledge of artificial intelligence, cybersecurity, auditing, risk management, and Governance, Risk, and Compliance (GRC). My goal is to understand technology end to end—not only how systems are built, but also how they operate, are secured, assessed, and governed.',
            projectsButton: 'View projects',
            contactButton: 'Get in touch',
        },

        techStack: {
            label: 'TECH STACK',
        },

        projects: {
            label: '02 / PROJECTS',
            title: 'Featured Projects',
            description:
                'A selection of projects showcasing my skills in building applications and practical solutions.',
            viewProject: 'View Project',
            viewCode: 'View Code',
            viewMore: 'View All Projects',
        },

        experience: {
            label: '03 / EXPERIENCE',
            title: 'Professional Experience',
            current: 'Present',
            role: 'Full Stack Developer',
            company: 'Storrer Solutions',
            description:
                'Contributing to the development of a Governance, Risk, and Compliance (GRC) platform, building web applications, implementing business features, and working with modern technologies.',
        },

        about: {
            label: '03 / ABOUT ME',
            title: 'Beyond the code.',
            paragraphs: [
                'I hold a degree in Computer Engineering and have always been driven by curiosity about how things work. Over time, I realized that, to me, being a Full Stack Developer means more than moving between frontend and backend. It means understanding an entire application: from its interface and user experience to its database, infrastructure, security, and the processes that support it all.',
                'That curiosity led me to Governance, Risk, and Compliance (GRC). While developing a platform in this field, I realized that many technical decisions originate from requirements beyond the code itself. Well-defined access controls, reliable audit trails, and proper isolation of each client’s data are not merely implementation details; they are responses to risks, standards, and laws. That is why I have been studying risk management, internal controls, auditing, and compliance, along with frameworks and references such as SOX, ISO standards, Brazil’s LGPD data protection law, and cybersecurity best practices. I see these areas not as a separate path from software development, but as the context that gives it meaning.',
                'I have also been exploring new ways to build software with artificial intelligence. In my day-to-day work, I use Claude Code to support implementation, analysis, and problem-solving, and explore MCP (Model Context Protocol) to connect AI models with tools and work-related data. My next learning goals include RAG (Retrieval-Augmented Generation), LangChain, and AI agents, following the same principle I have always valued: understanding how things work, not just how to use them.',
                'I enjoy learning, experimenting, and connecting knowledge across different fields. I want to keep growing as a developer while also becoming someone capable of working with standards, risks, security, and, above all, people. After all, technology is built by people, for people.',
                'My journey began with early HTML, CSS, and JavaScript projects and grew deeper with every challenge. Over time, I became increasingly interested in what happens behind the screen. I built a NestJS API using Redis, queues, Jest tests, Swagger documentation, and Docker, as well as a full-stack application with file storage on Amazon S3. These projects taught me that the most interesting decisions rarely happen only in the interface. They involve how data flows, how a system handles demanding tasks, and how it remains reliable when something goes wrong.',
            ],
            educationLabel: 'EDUCATION',
            degree: 'Computer Engineering',
            professionalFocusLabel: 'PROFESSIONAL FOCUS',
            professionalFocusTitle: 'Full Stack Development',
            professionalFocusDescription:
                'Development of web applications with Next.js, TypeScript, and Supabase, exploring solutions that integrate frontend, backend, and databases.',
            otherAreasLabel: 'OTHER AREAS OF DEVELOPMENT',
            technicalSkillsLabel: 'TECHNICAL SKILLS',
            languagesLabel: 'LANGUAGES',
            languagePT: 'Portuguese',
            languageEN: 'English',
            native: 'Native',
            englishDescription:
                'Continuously improving, with a focus on professional communication.',
            skillGroups: {
                languages: 'Programming Languages',
                frontend: 'Frontend',
                backend: 'Backend & APIs',
                databases: 'Databases & Services',
                cloud: 'Cloud, DevOps & Tools',
                testing: 'Testing & Documentation',
            },
            focusAreas: [
                'Governance, Risk, and Compliance (GRC)',
                'Risk Management & Internal Controls',
                'Auditing & Compliance',
                'Brazil’s LGPD Data Protection Law & Cybersecurity',
                'Artificial Intelligence in Software Development',
            ],
        },

        contact: {
            label: '04 / CONTACT',
            title: "Let's build something together?",
            description:
                "I'm open to opportunities, professional connections, and conversations about technology. Feel free to reach out or explore my work.",
            resumeButton: 'View Resume',
            emailButton: 'Email',
            githubButton: 'GitHub',
            linkedinButton: 'LinkedIn',
        },

        footer: {
            rights: 'All rights reserved.',
            builtWith: 'Built with',
        },
    },
} as const;
