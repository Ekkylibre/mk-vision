import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/makey-profile.jpg"
              alt="Makey Siong"
              className="object-cover"
              style={{ width: '100%', height: '100%' }}
              priority
              fill
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">À propos</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                Avec plus de dix ans derrière la caméra, j'ai eu la chance de vivre des expériences variées, qui m'ont permis d'explorer ma créativité tout en me lançant des défis constants.
              </p>
              <p>
                Mon aventure a commencé dans l'univers du clip musicaux, un terrain fertile pour affiner mon regard et cultiver une véritable passion pour l'art de raconter des histoires en images. Peu à peu, j'ai élargi mes horizons, touchant à des projets aussi divers que des films publicitaires, interviews, documentaires …
              </p>
              <p>
                Pour moi, chaque projet est une rencontre, une occasion de créer quelque chose d'authentique et de marquant. Ce qui compte vraiment, c'est de capter l'essence de ce qui doit être racontée.
              </p>
              <p>
                Émouvoir, inspirer, et laisser une empreinte qui reste bien après que l'image se soit éteinte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}