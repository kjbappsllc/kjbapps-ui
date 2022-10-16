import { About } from './components/about';
import { Contact } from './components/contact';
import { Header } from './components/header';
import { Section } from './components/section';

export const App = () => {
  return (
    <div className="h-full">
      <Section sectionId="header">
        <Header />
      </Section>
      <Section sectionId="about">
        <About />
      </Section>
      <Section sectionId="contact">
        <Contact />
      </Section>
    </div>
  );
};
