import { useState, FormEvent } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // You'll need to replace these with your actual EmailJS credentials
      await emailjs.send(
        "service_q5njrpn", // Replace with your EmailJS service ID
        "template_bdgqh7q", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "mianahmad93000@gmail.com",
        },
        "U1WwZykWuyBgv5kjl" // Replace with your EmailJS public key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "",  message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mianahmad93000@gmail.com",
      href: "mailto:mianahmad93000@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 321 9300028",
      href: "tel:+923219300028",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Faisalabad, Punjab, Pakistan",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 text-lg">
              Have a project in mind? Let's work together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 glass"
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          className="flex items-start gap-4 group"
                        >
                          <div className="p-3 gradient-primary rounded-lg">
                            <info.icon className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{info.label}</div>
                            <div className="font-medium group-hover:text-primary transition-colors">
                              {info.value}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="p-3 gradient-primary rounded-lg">
                            <info.icon className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{info.label}</div>
                            <div className="font-medium">{info.value}</div>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-6 glass">
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently looking for new opportunities and my inbox is always open. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </Card>
            </div>

            <Card className="p-8 animate-fade-in glass" style={{ animationDelay: "0.2s" }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
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
                    placeholder="Tell me more about your project..."
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
