import { AccordionComponent } from '@/components/Accordion';
import { aboutItems } from '@/data/aboutItems';

export const AboutPage = () => {
  return (
    <section className="flex justify-center">
      <AccordionComponent items={aboutItems} />
    </section>
  );
}
