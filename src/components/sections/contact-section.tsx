import React from 'react';
//Translations manualmente com i18n, ioteu por não utilizar nenhuma lib
import { translations, type Language } from '@/i18n/translations';

export const ContactSection = ({ language }: { language: Language }) => {
    const t = translations[language];

    return (
        <section
            id="contato"
            aria-labelledby="contact-title"
            className="container-site section-spacing"
        >
            <div className="surface-card flex flex-col items-center px-6 py-12 text-center sm:px-10 sm:py-16 md:py-20">
                <p className="text-label mb-4 font-mono text-accent">{t.contact.label}</p>

                <h2 id="contact-title" className="section-title max-w-2xl">
                    {t.contact.title}
                </h2>

                <p className="text-body mt-5 max-w-xl text-secondary">{t.contact.description}</p>

                <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                    {/* Currículos */}
                    <div className="flex w-full flex-wrap justify-center gap-3">
                        <a
                            href="https://drive.google.com/file/d/18-_0123-abVLOlczYzshN0DhWkR85YaP/view?pli=1"
                            className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-accent px-4 py-3 text-center font-medium whitespace-normal text-[#06120C] transition-colors duration-200 hover:bg-[#9AEBCB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-40"
                        >
                            {t.contact.resumeButtonPT} ↗
                        </a>

                        <a
                            href="https://drive.google.com/drive/folders/1hPB4VB56LwuoSNs8vv6HakONn9JguaqY?hl=pt-br"
                            className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-accent px-4 py-3 text-center font-medium whitespace-normal text-[#06120C] transition-colors duration-200 hover:bg-[#9AEBCB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-40"
                        >
                            {t.contact.resumeButtonEN} ↗
                        </a>
                    </div>

                    <a
                        href="mailto:wesleysantos.dev@gmail.com"
                        className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[#3A434F] bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#171C22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        {t.contact.emailButton} ↗
                    </a>

                    <a
                        href="https://github.com/TitanCodeXD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[#3A434F] bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#171C22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        {t.contact.githubButton} ↗
                    </a>

                    <a
                        href="https://www.linkedin.com/in/wesleysantosbrdev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[#3A434F] bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#171C22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        {t.contact.linkedinButton} ↗
                    </a>
                </div>
            </div>
        </section>
    );
};
