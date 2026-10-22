import Image from 'next/image';

export const Hero = () => {
    return (
        <section
            id="inicio"
            className="flex min-h-[calc(100svh-5rem)] items-center py-16 max-md:min-h-0 max-md:py-12"
            aria-labelledby="hero-title"
        >
            <div className="container-site grid w-full grid-cols-[1.2fr_1fr] items-center gap-12 max-lg:gap-8 max-md:grid-cols-1 max-md:gap-8">
                {/* Apresentação */}
                <div className="flex flex-col items-start">
                    <p className="text-label font-mono! text-accent">// Olá, eu sou</p>

                    <h1
                        id="hero-title"
                        className="hero-title mt-4 font-display font-bold tracking-tight text-foreground"
                    >
                        WESLEY
                        <br />
                        SANTOS<span className="text-accent">.</span>
                    </h1>

                    <h2 className="hero-subtitle mt-5 max-w-2xl text-text-secondary">
                        Desenvolvedor Full Stack construindo aplicações web modernas e funcionais.
                    </h2>

                    <p className="text-body mt-5 max-w-xl text-muted">
                        Sou formado em Engenharia da Computação e gosto de transformar ideias em
                        soluções práticas, do backend à interface. Atualmente, trabalho com
                        tecnologias como Next.js, TypeScript e Supabase, enquanto continuo
                        aprofundando meus conhecimentos em desenvolvimento de software.
                    </p>

                    {/* Ações principais */}
                    <div className="mt-8 flex flex-wrap items-center gap-3 max-sm:w-full max-sm:flex-col max-sm:items-stretch">
                        <a
                            href="#projetos"
                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-button bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent/90"
                        >
                            Ver projetos <span aria-hidden="true">→</span>
                        </a>

                        <a
                            href="#contato"
                            className="inline-flex min-h-11 items-center justify-center rounded-button border border-border-strong px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                        >
                            Entrar em contato
                        </a>
                    </div>

                    {/* Links externos */}
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
                        <a
                            href="https://github.com/TitanCodeXD"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-accent"
                        >
                            GitHub <span aria-hidden="true">↗</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/wesleysantosbrdev/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-accent"
                        >
                            LinkedIn <span aria-hidden="true">↗</span>
                        </a>

                        <a
                            href="mailto:wesleysantos.dev@gmail.com"
                            className="transition-colors hover:text-accent"
                        >
                            wesleysantos.dev@gmail.com
                        </a>
                    </div>
                </div>
                {/* Retrato */}

                {/* Retrato */}
                <div className="flex justify-center md:justify-end">
                    <div
                        className="w-full max-w-[500px] -translate-y-14 max-md:max-w-[490px]"
                        style={{
                            maskImage:
                                'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
                            WebkitMaskImage:
                                'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
                        }}
                    >
                        <Image
                            src="/images/Busto para esquerda transparente modelo 2.png"
                            alt="Retrato em estilo cartoon monocromático de Wesley Santos"
                            width={723}
                            height={1084}
                            priority
                            sizes="(max-width: 768px) 320px, 520px"
                            className="h-auto w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
