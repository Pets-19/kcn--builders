import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Message Sent!', description: 'Our team will contact you within 24 hours.' });
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  const handleApply = (role: string) => {
    toast({
      title: 'Application Received!',
      description: `Thank you for applying for ${role}. We'll review your application and get back to you soon.`,
    });
  };

  return (
    <Layout>
      <section className="pt-32 pb-12 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">Ready to find your dream home? Our team is here to help you every step of the way.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" />
                  <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" />
                </div>
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" />
                <select value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary outline-none">
                  <option value="">I'm interested in...</option>
                  <option value="site-visit">Schedule Site Visit</option>
                  <option value="investment">Investment Inquiry</option>
                  <option value="careers">Career Opportunities</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Your Message" rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none" />
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: 'Head Office', text: 'KCN Tower, Sultan Bathery Road, Wayanad, Kerala 673592' },
                    { icon: Phone, title: 'Phone', text: '+91 97477 70369' },
                    { icon: Mail, title: 'Email', text: 'info@kcnbuilders.com' },
                    { icon: Clock, title: 'Working Hours', text: 'Mon - Sat: 9:00 AM - 6:00 PM' },
                  ].map(item => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="careers" className="bg-forest r onClick={() => handleApply(role)}ounded-2xl p-8 text-primary-foreground">
                <h3 className="text-xl font-serif font-bold mb-4">Join Our Team</h3>
                <p className="text-primary-foreground/80 mb-6">We're always looking for passionate individuals who share our vision for sustainable development.</p>
                <div className="space-y-3">
                  {['Senior Architect', 'Sustainability Engineer', 'Sales Executive', 'Digital Marketing Manager'].map(role => (
                    <div key={role} className="flex justify-between items-center p-3 rounded-lg bg-primary-foreground/10">
                      <span>{role}</span>
                      <Button variant="hero" size="sm">Apply</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/919747770369?text=Hi%2C%20I%27m%20interested%20in%20KCN%20Builders%20projects"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute -top-12 right-0 bg-foreground text-background px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
          Chat with us
        </span>
      </a>
    </Layout>
  );
};

export default Contact;
