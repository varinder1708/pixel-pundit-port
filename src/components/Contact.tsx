import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone:"",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      //const response = await fetch("http://localhost:3000/send-mail-post", {
        const response = await fetch("https://send-mail-topaz.vercel.app/send-mail-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Contact Form Message",
          text: formData.message,
          name: formData.name,
          fromEmail: formData.email,
          phone: formData.phone,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
  
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
  
      setFormData({ name: "", email: "", message: "", phone: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="bg-card shadow-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">varinder.sadana@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
  <div className="w-2 h-2 bg-accent rounded-full"></div>
  <span className="text-muted-foreground">
    LinkedIn:{" "}
    <a
      href="https://www.linkedin.com/in/varinder-s-b503b55/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      in/varinder-s-b503b55/
    </a>
  </span>
</div>
                  {/* <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">GitHub: /yourusername</span>
                  </div> */}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-accent">What I Can Help With</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full stack web application development</li>
                  <li>• React | Javascript frontend development</li>
                  <li>• Node.js | python backend services</li>
                  <li>• API design and development</li>
                  <li>• Code review and optimization</li>
                  <li>• Technical consulting</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card shadow-card border-border">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="phone"
                    name="phone"
                    placeholder="Your Phone No"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;