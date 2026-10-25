export type Language = 'pt' | 'en';

export const translations = {
    pt: {
        navigation: {
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
    },
    en: {
        navigation: {
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
    },
} as const;
