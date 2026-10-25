import React from 'react';

export const ContactSection = () => {
    return (
        <section
            id="contato"
            aria-labelledby="contact-title"
            className="container-site section-spacing"
        >
            <div className="surface-card flex flex-col items-center px-6 py-12 text-center sm:px-10 sm:py-16 md:py-20">
                <p className="text-label mb-4 font-mono text-accent">04 / CONTATO</p>

                <h2 id="contact-title" className="section-title max-w-2xl">
                    Vamos construir algo juntos?
                </h2>

                <p className="text-body mt-5 max-w-xl text-secondary">
                    Estou aberto a oportunidades, conexões profissionais e conversas sobre
                    tecnologia. Se quiser trocar uma ideia ou conhecer meu trabalho, entre em
                    contato.
                </p>

                <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                    <a
                        href="https://drive.google.com/file/d/18-_0123-abVLOlczYzshN0DhWkR85YaP/view?pli=1"
                        className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-accent px-6 py-3 font-medium text-[#06120C] transition-colors duration-200 hover:bg-[#9AEBCB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        Visualizar Currículo ↗
                    </a>

                    <a
                        href="mailto:wesleysantos.dev@gmail.com"
                        className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[#3A434F] bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#171C22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        E-mail ↗
                    </a>

                    <a
                        href="https://github.com/TitanCodeXD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[#3A434F] bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#171C22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        GitHub ↗
                    </a>

                    <a
                        href="https://www.linkedin.com/in/wesleysantosbrdev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[#3A434F] bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#171C22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        LinkedIn ↗
                    </a>
                </div>
            </div>
        </section>
    );
};
