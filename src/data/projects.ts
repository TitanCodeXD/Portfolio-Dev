export type Project = {
    slug: string;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    repositoryUrl: string;
    demoUrl?: string;
};

export const projects: Project[] = [
    {
        slug: 'parallel',
        title: 'Parallel',
        category: 'Full Stack · Aplicação Social',
        description:
            'Aplicação social inspirada no Instagram, com perfis de usuários, publicação de fotos, comentários e curtidas.',
        technologies: ['React', 'Express', 'MongoDB', 'Mongoose', 'Redux', 'AWS S3'],
        repositoryUrl: 'https://github.com/TitanCodeXD/Parallel',
        demoUrl: 'https://parallel-two.vercel.app/',
    },
    {
        slug: 'mini-blog',
        title: 'MiniBlog',
        category: 'Frontend · Blog',
        description:
            'Aplicação de blog com autenticação, cadastro de usuários e publicação de imagens acompanhadas de tags.',
        technologies: ['React', 'Vite', 'Firebase'],
        repositoryUrl: 'https://github.com/TitanCodeXD/Mini-Blog',
        demoUrl: 'https://mini-blog-web.netlify.app/',
    },
    {
        slug: 'nestjs-mongodb-api',
        title: 'NestJS MongoDB API',
        category: 'Backend · API REST',
        description:
            'Projeto backend com NestJS e TypeScript, explorando a construção de APIs REST e a integração com MongoDB.',
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
        category: 'IA · Aplicação Python',
        description:
            'Chatbot com IA generativa capaz de responder perguntas e analisar conteúdo de imagens, PDFs e arquivos de áudio.',
        technologies: ['Python', 'Streamlit', 'Gemini API', 'PyPDF2', 'Pillow'],
        repositoryUrl: 'https://github.com/TitanCodeXD/Chat-Bot',
        demoUrl: 'https://chat-bot-python-gemini.streamlit.app/',
    },
];
