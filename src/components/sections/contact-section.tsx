import { translations, type Language } from '@/i18n/translations';

export const ContactSection = ({ language }: { language: Language }) => {
    const t = translations[language];

    const buttonClass =
        'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-center text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent';

    const resumeButtonClass = `${buttonClass} border border-transparent bg-accent text-[#06120C] hover:bg-[#9AEBCB] sm:flex-1`;

    const socialButtonClass = `${buttonClass} border border-[#3A434F] bg-black text-white hover:bg-[#171C22] sm:w-auto`;

    return (
        <section
            id="contato"
            aria-labelledby="contact-title"
            className="container-site section-spacing"
        >
            <div className="surface-card flex flex-col items-center px-6 py-12 text-center sm:px-10 sm:py-16 md:py-20">
                <p className="text-label mb-4 font-mono! text-accent">{t.contact.label}</p>

                <h2 id="contact-title" className="section-title max-w-2xl">
                    {t.contact.title}
                </h2>

                <p className="text-body mt-5 max-w-xl text-secondary">{t.contact.description}</p>

                <div className="mt-8 flex w-full max-w-3xl flex-col gap-3">
                    {/* Currículos */}
                    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                        <a
                            href="https://drive.google.com/file/d/18-_0123-abVLOlczYzshN0DhWkR85YaP/view?pli=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={resumeButtonClass}
                        >
                            <span>{t.contact.resumeButtonPT}</span>
                            <span aria-hidden="true">↗</span>
                        </a>

                        <a
                            href="https://drive.google.com/file/d/1Qr0mLYaVC-7MbCYhY1pswf9OBIZa9rtN/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={resumeButtonClass}
                        >
                            <span>{t.contact.resumeButtonEN}</span>
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>

                    {/* Contato e redes profissionais */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <a href="mailto:wesleysantos.dev@gmail.com" className={socialButtonClass}>
                            <span>{t.contact.emailButton}</span>
                            <span aria-hidden="true">↗</span>
                        </a>

                        <a
                            href="https://github.com/TitanCodeXD"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={socialButtonClass}
                        >
                            <span>{t.contact.githubButton}</span>
                            <span aria-hidden="true">↗</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/wesleysantosbrdev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={socialButtonClass}
                        >
                            <span>{t.contact.linkedinButton}</span>
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
