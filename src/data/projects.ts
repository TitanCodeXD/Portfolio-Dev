export type Language = 'pt' | 'en';

export type Project = {
    slug: string;
    title: string;
    category: Record<Language, string>;
    description: Record<Language, string>;
    technologies: string[];
    repositoryUrl: string;
    demoUrl?: string;
};

export const projects: Project[] = [
    {
        slug: 'parallel',
        title: 'Parallel',
        category: {
            pt: 'Full Stack · Aplicação Social',
            en: 'Full Stack · Social Application',
        },
        description: {
            pt: 'Aplicação social inspirada no Instagram, com perfis de usuários, publicação de fotos, comentários e curtidas.',
            en: 'An Instagram-inspired social application featuring user profiles, photo sharing, comments, and likes.',
        },
        technologies: ['React', 'Express', 'MongoDB', 'Mongoose', 'Redux', 'AWS S3'],
        repositoryUrl: 'https://github.com/TitanCodeXD/Parallel',
        demoUrl: 'https://parallel-two.vercel.app/',
    },
    {
        slug: 'mini-blog',
        title: 'MiniBlog',
        category: {
            pt: 'Frontend · Blog',
            en: 'Frontend · Blog',
        },
        description: {
            pt: 'Aplicação de blog com autenticação, cadastro de usuários e publicação de imagens acompanhadas de tags.',
            en: 'A blogging application with authentication, user registration, and image publishing with tags.',
        },
        technologies: ['React', 'Vite', 'Firebase'],
        repositoryUrl: 'https://github.com/TitanCodeXD/Mini-Blog',
        demoUrl: 'https://mini-blog-web.netlify.app/',
    },
    {
        slug: 'nestjs-mongodb-api',
        title: 'NestJS MongoDB API',
        category: {
            pt: 'Backend · API REST',
            en: 'Backend · REST API',
        },
        description: {
            pt: 'Projeto backend com NestJS e TypeScript, explorando a construção de APIs REST e a integração com MongoDB.',
            en: 'A backend project built with NestJS and TypeScript, exploring REST API development and MongoDB integration.',
        },
        technologies: [
            'NestJS',
            'TypeScript',
            'Redis (Queue & Cache)',
            'Swagger',
            'Jest',
            'Docker',
            'MongoDB',
            'Mongoose',
        ],
        repositoryUrl: 'https://github.com/TitanCodeXD/nestjs-mongodb-api',
    },
    {
        slug: 'chatbot-gemini',
        title: 'Chatbot com Gemini',
        category: {
            pt: 'IA · Aplicação Python',
            en: 'AI · Python Application',
        },
        description: {
            pt: 'Chatbot com IA generativa capaz de responder perguntas e analisar conteúdo de imagens, PDFs e arquivos de áudio.',
            en: 'A generative AI chatbot that can answer questions and analyze content from images, PDFs, and audio files.',
        },
        technologies: ['Python', 'Streamlit', 'Gemini API', 'PyPDF2', 'Pillow'],
        repositoryUrl: 'https://github.com/TitanCodeXD/Chat-Bot',
        demoUrl: 'https://chat-bot-python-gemini.streamlit.app/',
    },
];
