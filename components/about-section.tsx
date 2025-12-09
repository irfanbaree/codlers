export default function AboutSection() {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-2xl opacity-50" />
            <img
              src="/ai-technology-abstract-digital-innovation.jpg"
              alt="AI Innovation"
              className="relative rounded-2xl border border-border w-full h-auto object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                Our Vision
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We empower businesses by building intelligent, scalable, and automation-driven AI SaaS products. Our goal is to integrate machine learning, automation, and modern engineering to create software that solves real-world problems.
            </p>

            <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
              {[
                'Machine Learning Integration',
                'Scalable Cloud Architecture',
                'Real-time Data Automation',
                'End-to-End Development',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground pt-2 md:pt-4 text-sm md:text-base">
              From concept to deployment, we handle every aspect of AI product development with precision and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
