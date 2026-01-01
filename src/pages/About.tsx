import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Target,
    Heart,
    Leaf,
    Users,
    Award,
    Calendar,
} from "lucide-react";

const About = () => {
    const values = [
        {
            icon: Leaf,
            title: "Sustainability First",
            description:
                "Every decision we make is filtered through our commitment to environmental stewardship.",
        },
        {
            icon: Heart,
            title: "Customer Centricity",
            description:
                "We build homes around the lives our customers want to live, not the other way around.",
        },
        {
            icon: Target,
            title: "Innovation",
            description:
                "We embrace technology and new ideas to continuously improve how we build and serve.",
        },
        {
            icon: Users,
            title: "Community",
            description:
                "We create neighborhoods, not just houses – fostering connections that last generations.",
        },
    ];

    const team = [
        {
            name: "Noufal K C",
            role: "CEO & Founder",
            image: "/Team/Noufal K C.png",
            phone: "+91 97477 70369",
        },
        {
            name: "Fabi Fathima",
            role: "Managing Partner & Coordinator",
            image: "/Team/Fabi Fathima.png",
            phone: "+91 8589 928153",
        },
        {
            name: "Anzil K K",
            role: "Interior Consultant",
            image: "/Team/Anzil K K.png",
            phone: "+91 8075108175",
        },
        {
            name: "Ahsan K",
            role: "Interior Consultant & Flooring Designer",
            image: "/Team/Ahsan K.png",
            phone: "+91 9995269615",
        },
        {
            name: "Abin Baiju",
            role: "Landscape Consultant",
            image: "/Team/Abin Baiju.png",
            phone: "+91 92077 86646",
        },
        {
            name: "Akash VB",
            role: "Civil Engineer",
            image: "/Team/Akash VB.png",
            phone: "+91 7561846123",
        },
        {
            name: "Shahila Muhammed",
            role: "Accountant",
            image: "/Team/Shahila Muhammed.png",
            phone: "+91 9061931171",
        },
        {
            name: "Janfishan",
            role: "Industrial Consultant",
            image: "/Team/Janfishan.png",
            phone: "+91 8921489425",
        },
        {
            name: "Jasna K",
            role: "Accountant",
            image: "/Team/Jasna K.png",
            phone: "+91 7025418403",
        },
    ];

    const milestones = [
        {
            year: "2009",
            title: "Founded in Wayanad",
            description: "KCN begins with a vision for sustainable development",
        },
        {
            year: "2012",
            title: "First LEED Certification",
            description:
                "Became one of Kerala's first LEED-certified developers",
        },
        {
            year: "2015",
            title: "Township Launch",
            description: "Green Meadows Township breaks ground",
        },
        {
            year: "2018",
            title: "Tech Integration",
            description: "Launched smart home platform and digital services",
        },
        {
            year: "2021",
            title: "50th Project",
            description: "Celebrated delivering 50 successful projects",
        },
        {
            year: "2024",
            title: "National Expansion",
            description: "Entered Bangalore and Kochi markets",
        },
        {
            year: "2025",
            title: "Middle East Entry",
            description: "Partnership for Dubai developments",
        },
    ];

    const certifications = [
        {
            name: "LEED Gold",
            description: "Leadership in Energy and Environmental Design",
        },
        { name: "IGBC Member", description: "Indian Green Building Council" },
        { name: "ISO 14001", description: "Environmental Management" },
        {
            name: "GRIHA Rated",
            description: "Green Rating for Integrated Habitat Assessment",
        },
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-muted">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl">
                        <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
                            Our Story
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                            Rooted in Wayanad,
                            <br />
                            <span className="text-primary">
                                Growing Globally
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            For over 15 years, KCN Builders has been crafting
                            sustainable living spaces that honor Kerala's
                            natural heritage while embracing innovation and
                            modern luxury.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="bg-primary rounded-2xl p-10 text-primary-foreground">
                            <Award className="w-12 h-12 text-gold mb-6" />
                            <h2 className="text-3xl font-serif font-bold mb-4">
                                Our Mission
                            </h2>
                            <p className="text-primary-foreground/80 text-lg leading-relaxed">
                                To create sustainable, innovative living spaces
                                that enhance quality of life while preserving
                                our planet for future generations. We believe
                                luxury and environmental responsibility are not
                                mutually exclusive.
                            </p>
                        </div>
                        <div className="bg-ocean rounded-2xl p-10 text-secondary-foreground">
                            <Target className="w-12 h-12 text-gold mb-6" />
                            <h2 className="text-3xl font-serif font-bold mb-4">
                                Our Vision
                            </h2>
                            <p className="text-secondary-foreground/80 text-lg leading-relaxed">
                                To be India's most trusted name in sustainable
                                real estate, expanding our footprint from
                                Kerala's hills to global cities, setting the
                                standard for green development worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-muted">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
                            What Drives Us
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <value.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
                            Leadership
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                            Meet Our Team
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {team.map((member, index) => (
                            <div
                                key={member.name}
                                className="text-center group"
                            >
                                <div className="relative mb-6 inline-block">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow"
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-gold font-medium mb-3">
                                    {member.role}
                                </p>
                                {member.phone && (
                                    <p className="text-muted-foreground text-sm">
                                        {member.phone}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-forest text-primary-foreground">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
                            Our Journey
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold">
                            Milestones & Achievements
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-foreground/20 -translate-x-1/2 hidden lg:block" />

                        <div className="space-y-8 lg:space-y-0">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={milestone.year}
                                    className={`relative lg:flex lg:items-center ${
                                        index % 2 === 0
                                            ? "lg:flex-row"
                                            : "lg:flex-row-reverse"
                                    }`}
                                >
                                    {/* Content */}
                                    <div
                                        className={`lg:w-1/2 ${
                                            index % 2 === 0
                                                ? "lg:pr-16 lg:text-right"
                                                : "lg:pl-16"
                                        }`}
                                    >
                                        <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
                                            <span className="text-white font-bold text-2xl font-serif">
                                                {milestone.year}
                                            </span>
                                            <h3 className="text-lg font-bold mt-2">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-primary-foreground/70 text-sm mt-1">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Dot */}
                                    <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
                                        <div className="w-4 h-4 rounded-full bg-gold border-4 border-forest" />
                                    </div>

                                    {/* Spacer */}
                                    <div className="lg:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
                            Credentials
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                            Certifications & Standards
                        </h2>
                        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                            Our commitment to quality and sustainability is
                            recognized by leading industry bodies.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert) => (
                            <div
                                key={cert.name}
                                className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary hover:shadow-md transition-all"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-bold text-foreground mb-2">
                                    {cert.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {cert.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-muted">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                        Ready to Be Part of Our Story?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Whether you're looking for your dream home or want to
                        join our team, we'd love to hear from you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="hero" size="lg" asChild>
                            <Link to="/projects">
                                Explore Projects{" "}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a
                                href="https://wa.me/919747770369?text=Hello%20KCN%20Builders%2C%20I'm%20interested%20in%20career%20opportunities%20with%20your%20team."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join Our Team
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;
