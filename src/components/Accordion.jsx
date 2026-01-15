import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const AccordionComponent = ({ items }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-xl space-y-3"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="mb-3 last:mb-0"
        >
          <AccordionTrigger>
            {item.title}
          </AccordionTrigger>

          <AccordionContent>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
