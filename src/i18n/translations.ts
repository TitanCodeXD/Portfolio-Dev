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
            title: 'Além do código',
            description:
                'Sou formado em Engenharia da Computação e gosto de entender a tecnologia de ponta a ponta. Além do desenvolvimento de software, venho aprofundando meus conhecimentos em segurança, riscos, auditoria e Governança, Riscos e Compliance (GRC). Acredito que compreender o contexto de negócio por trás de cada sistema é essencial para construir soluções que realmente gerem valor.',
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
            title: 'Beyond the Code',
            description:
                'I hold a degree in Computer Engineering and enjoy understanding technology end to end. Beyond software development, I have been expanding my knowledge of security, risk management, auditing, and Governance, Risk, and Compliance (GRC). I believe understanding the business context behind each system is essential to building solutions that deliver real value.',
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
