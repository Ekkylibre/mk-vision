export default function Services() {
  const services = [
    {
      title: "Film Production",
      description: "From concept to final cut, we bring your story to life with professional film production services.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
    },
    {
      title: "Commercial Videos",
      description: "Elevate your brand with compelling commercial content that resonates with your audience.",
      image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80",
    },
    {
      title: "Music Videos",
      description: "Creative music video production that captures the essence of your musical vision.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80",
    },
    {
      title: "Documentary",
      description: "Authentic storytelling that brings real stories to life through documentary filmmaking.",
      image: "https://images.unsplash.com/photo-1517799094725-e3453440724e?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Services</h1>
        <p className="text-xl text-gray-300 mb-16 max-w-3xl">
          Professional filmmaking services tailored to your vision. From concept development to final delivery,
          we ensure exceptional quality and creative excellence.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-video"
            >
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}