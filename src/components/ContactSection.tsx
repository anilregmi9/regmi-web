import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Feel free to reach out for collaboration opportunities, consulting services, or to discuss how my geological expertise can benefit your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-earth">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <MessageSquare className="w-6 h-6" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4">
                Your information will only be used to respond to your inquiry and will not be shared with third parties.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">
                      <a 
                        href="mailto:anilr3gmi9@gmail.com" 
                        className="hover:text-accent transition-colors"
                      >
                        anilr3gmi9@gmail.com
                      </a>
                      {" / "}
                      <a 
                        href="mailto:anilregmi9@outlook.com" 
                        className="hover:text-accent transition-colors"
                      >
                        anilregmi9@outlook.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Linkedin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/anilregmi9/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      linkedin.com/in/anilregmi9
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Twitter className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Twitter</h4>
                    <a 
                      href="https://x.com/midhillnepal" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      x.com/midhillnepal
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-3">Looking for geological consulting?</h4>
                <p className="text-muted-foreground mb-4">
                  I provide specialized consulting services for mineral exploration, geotechnical investigations, and disaster risk assessment.
                </p>
                <Button variant="outline" className="w-full">
                  <a href="#contact">Request a Consultation</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;