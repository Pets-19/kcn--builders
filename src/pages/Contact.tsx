import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
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
                  <option value="vr-tour">Schedule VR Tour</option>
                  <option value="site-visit">Site Visit</option>
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
                    { icon: MapPin, title: 'Head Office', text: 'Green Vista Tower, Sultan Bathery Road, Wayanad, Kerala 673592' },
                    { icon: Phone, title: 'Phone', text: '+91 4936 123 456' },
                    { icon: Mail, title: 'Email', text: 'info@greenvistadevelopers.com' },
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

              <div id="careers" className="bg-forest rounded-2xl p-8 text-primary-foreground">
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
    </Layout>
  );
};

export default Contact;
