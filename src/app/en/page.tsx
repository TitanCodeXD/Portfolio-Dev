import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { TechStack } from '@/components/sections/tech-stack';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function EnglishHome() {
    return (
        <>
            <Header language="en" />
            <main className="pt-20">
                <Hero language="en" />
                <TechStack language="en" />
                <ProjectsSection language="en" />
                <ExperienceSection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
