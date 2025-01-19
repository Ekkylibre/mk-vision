export default function About() {
  return (
    <section id="about" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?auto=format&fit=crop&q=80"
              alt="James Miller"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">À propos</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                Avec plus d'une décennie d'expérience dans la réalisation et la cinématographie,
                j'ai eu le privilège de travailler sur des projets diversifiés qui défient la
                créativité et repoussent les limites.
              </p>
              <p>
                Mon parcours a commencé dans le cinéma indépendant, où j'ai développé un œil aiguisé
                pour la narration visuelle et une profonde appréciation du métier. Depuis, j'ai
                élargi mon portfolio pour inclure des travaux commerciaux, des clips musicaux et des
                documentaires.
              </p>
              <p>
                Je crois en la puissance de la narration visuelle pour émouvoir, inspirer et créer
                un impact durable. Chaque projet est une opportunité d'apporter une vision unique
                à travers la composition, l'éclairage et le mouvement de la caméra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}