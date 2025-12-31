import { MapPin, Phone, Mail } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Find Our Office
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Come visit us at our head office or get in touch with our team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7815.896566984894!2d76.09095961401673!3d11.627035726341486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60d0008718b13%3A0xb0ff3ba452e77862!2sKCN%20BUILDERS%20AND%20DEVELOPERS!5e0!3m2!1sen!2sin!4v1767099567417!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KCN Builders Location"
            />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Head Office</h3>
                  <p className="text-muted-foreground">
                    Mathilancheri Rd, Civil Station<br />
                    Kairali Nagar, Kalpetta<br />
                    Kerala 673122
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a 
                    href="tel:+919747770369" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 97477 70369
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a 
                    href="mailto:builderskcn@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    builderskcn@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
