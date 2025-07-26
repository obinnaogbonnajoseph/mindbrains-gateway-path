import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@eternalmindbrains.com",
      description: "Send us your questions anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak with our consultants",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Education Ave, City, State 12345",
      description: "Schedule an in-person meeting",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 9AM-6PM",
      description: "We're here to help",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your educational journey? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                <Input type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Service Interest</label>
                <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm">
                  <option>Select a service</option>
                  <option>Admission Guidance</option>
                  <option>Application Processing</option>
                  <option>Visa Assistance</option>
                  <option>All Services</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell us about your educational goals and how we can help..."
                  className="min-h-[120px]"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h3>
              <p className="text-muted-foreground">
                Get in touch with us through any of these channels. We're committed to responding quickly and helping
                you with your educational needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-sm font-medium text-primary">{info.details}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Preview */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Answers</h4>
              <div className="space-y-3">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">How long does the application process take?</span>
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground px-3">
                    Typically 4-8 weeks depending on the complexity and number of applications.
                  </p>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Do you guarantee admission?</span>
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground px-3">
                    While we can't guarantee admission, our success rate is 95% due to our thorough preparation process.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
