const technologies = [
    'TYPESCRIPT',
    'NODE.JS',
    'NESTJS',
    'REACT',
    'NEXT.JS',
    'POSTGRESQL',
    'MONGODB',
    'DOCKER',
];

export const TechStack = () => {
    return (
        <section
            aria-label="Principais tecnologias"
            className="border-y border-border bg-[#0F1217]"
        >
            <div className="container-site flex min-h-[76px] items-center gap-8 max-md:gap-5">
                <span className="shrink-0 font-mono text-xs font-medium tracking-wider text-accent">
                    STACK PRINCIPAL
                </span>

                <div className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <ul className="flex w-max items-center gap-7 py-5 max-md:gap-5">
                        {technologies.map((technology) => (
                            <li
                                key={technology}
                                className="shrink-0 font-mono text-xs font-medium tracking-wide text-text-secondary transition-colors hover:text-accent"
                            >
                                {technology}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
