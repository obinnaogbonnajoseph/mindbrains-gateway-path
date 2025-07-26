import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, FileText, Plane, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Admission Guidance",
      description:
        "Expert counseling to help you choose the right school and program that matches your goals and qualifications.",
      features: ["University Selection", "Program Matching", "Entry Requirements", "Academic Planning"],
    },
    {
      icon: FileText,
      title: "Application Processing",
      description: "Complete application management from document preparation to submission tracking.",
      features: ["Document Review", "Application Forms", "Essay Assistance", "Deadline Management"],
    },
    {
      icon: Plane,
      title: "Visa Assistance",
      description: "Comprehensive visa support to ensure smooth approval process for your educational journey.",
      features: ["Visa Documentation", "Interview Preparation", "Application Tracking", "Legal Compliance"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational consulting services designed to guide you from application to graduation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h3>
            <p className="text-lg opacity-90">A proven approach that gets results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Understanding your goals and background" },
              { step: "2", title: "Planning", desc: "Creating your personalized roadmap" },
              { step: "3", title: "Application", desc: "Preparing and submitting applications" },
              { step: "4", title: "Success", desc: "Celebrating your acceptance and next steps" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to Start Your Journey?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you achieve your educational dreams with our expert guidance
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
            <a href="#contact">Schedule a Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
