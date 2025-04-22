'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TrustedBy() {
  const clients = [
    {
      name: "Gigafit Orléans",
      logo: "/gigafit.jpg",
    },
    {
      name: "KFBC Clichy",
      logo: "/kfbc_clichy.png",
    },
    {
      name: "En coaching Simone",
      logo: "/En_coaching_simone.PNG",
    },
    {
      name: "BJJO",
      logo: "/BJJO.jpeg",
    },
    {
      name: "Association Hmong Rhône-Alpes",
      logo: "/association_hmong-rhône_alpes.jpg",
    },
    {
      name: "I2P Hmong",
      logo: "/i2p_hmong.jpg",
    }
  ];

  return (
    <section className="bg-black py-16" id="trusted-by">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-white text-center mb-8">
          Ils m&apos;ont fait confiance
        </h3>

        <div className="grid grid-cols-3 gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative grayscale hover:grayscale-0 transition-all duration-500"
            >
              <Image
                src={client.logo}
                alt={`Logo ${client.name}`}
                width={200}
                height={80}
                className="w-full h-32 object-contain opacity-50 hover:opacity-80 transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}