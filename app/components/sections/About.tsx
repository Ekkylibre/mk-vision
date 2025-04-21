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
                Je suis Makey Siong, vidéaste-réalisateur passionné par l&apos;image qui a du sens.
              </p>
              
              <p>
                🎬 Ma vision : mêler esthétique cinématographique, stratégie marketing et émotion vraie pour produire des vidéos qui marquent.
              </p>

              <p>
                📍 Basé à Paris, j&apos;interviens partout en France et à l&apos;international.
              </p>

              <p>
                👉 Chaque film que je réalise est une création sur-mesure, pensée pour refléter l&apos;âme de votre marque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}