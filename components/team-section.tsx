const teamMembers = [
  {
    name: 'Salaser Babu',
    role: 'CEO & Co-Founder',
    image: '/salaser babu.jpeg',
  },
  {
    name: 'Zahid Ali',
    role: 'Backend Developer',
    image: '/zahid ali.jpeg',
  },
  {
    name: 'Irfan Bari',
    role: 'Backend Developer',
    image: '/irfan.jpeg',
  },
  {
    name: 'Jackson Harry',
    role: 'AI Expert',
    image: '/jackson.jpeg',
  },
  {
    name: 'Sobal Naseeb',
    role: 'Frontend Developer',
    image: '/sobal.png',
  },
];

export default function TeamSection() {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Meet Our Team
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Talented professionals dedicated to building the future of AI and SaaS
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group text-center"
            >
              {/* Image */}
              <div className="relative mb-2 md:mb-4 overflow-hidden rounded-xl bg-muted border border-border group-hover:border-accent/50 transition-colors">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>

              {/* Info */}
              <h3 className="text-sm md:text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
