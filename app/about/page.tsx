import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?auto=format&fit=crop&q=80"
              alt="James Miller"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">About Me</h1>
            <div className="space-y-6 text-gray-300">
              <p>
                With over a decade of experience in filmmaking and cinematography, I've had the privilege
                of working on diverse projects that challenge creativity and push boundaries.
              </p>
              <p>
                My journey began in independent film, where I developed a keen eye for visual
                storytelling and a deep appreciation for the craft. Since then, I've expanded my
                portfolio to include commercial work, music videos, and documentary features.
              </p>
              <p>
                I believe in the power of visual storytelling to move, inspire, and create lasting
                impact. Every project is an opportunity to bring a unique vision to life through
                thoughtful composition, lighting, and camera movement.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8">
              <div>
                <p className="text-4xl font-bold text-white">10+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">150+</p>
                <p className="text-gray-400">Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">15</p>
                <p className="text-gray-400">Awards</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">50+</p>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}