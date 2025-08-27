import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full stack developer with a love for creating
                efficient, scalable, and user-friendly web applications. With
                expertise in modern JavaScript technologies, I bring ideas to life
                through clean code and thoughtful design.
              </p>
              <p>
                My journey in web development started with a curiosity about how
                things work on the internet. Today, I specialize in React for
                frontend development and Node.js for backend services, always
                staying updated with the latest industry trends and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-card shadow-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Frontend Development
                </h3>
                <p className="text-muted-foreground">
                  Crafting responsive and interactive user interfaces with React,
                  modern CSS, and cutting-edge frontend technologies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-accent">
                  Backend Development
                </h3>
                <p className="text-muted-foreground">
                  Building robust server-side applications with Node.js, creating
                  RESTful APIs, and managing databases efficiently.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Problem Solving
                </h3>
                <p className="text-muted-foreground">
                  Approaching complex challenges with analytical thinking and
                  creative solutions to deliver optimal results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;