import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from '@/app/constants/faq';

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-white">F.A.Q</h3>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-4 py-2 hover:border-primary/30 transition-all duration-500 ease-in-out"
              >
                <AccordionTrigger className="text-left text-white hover:text-primary/90 transition-colors duration-500">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 