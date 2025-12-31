import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Menon',
    role: 'Business Owner',
    location: 'Mist Valley Residences, Wayanad',
    rating: 5,
    text: 'Moving to KCN\'s Mist Valley was the best decision we made. The quality of construction, the attention to sustainability, and the serene environment have transformed our lives. Our energy bills are 40% lower than our previous home!',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'IT Professional',
    location: 'Green Meadows Township',
    rating: 5,
    text: 'The VR tour experience was incredible – I could visualize my home perfectly before it was built. The smart home features and the community amenities make everyday living a joy. Highly recommend!',
  },
  {
    id: 3,
    name: 'Dr. Anand Kumar',
    role: 'Surgeon',
    location: 'Horizon Hills',
    rating: 5,
    text: 'After a hectic day at work, coming home to the tranquility of Horizon Hills is therapeutic. The infinity pool overlooking the mountains is my sanctuary. KCN truly understands luxury living.',
  },
  {
    id: 4,
    name: 'Meera Nair',
    role: 'Entrepreneur',
    location: 'Mist Valley Residences',
    rating: 5,
    text: 'I was skeptical about buying property remotely, but the KCN app and their transparent process made it seamless. From booking to possession, every step was professional and hassle-free.',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
            Happy Homeowners
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Voices of Our Community
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from families who have found their dream homes with KCN Builders.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card rounded-3xl shadow-elegant p-8 md:p-12 text-center animate-fade-in" key={activeIndex}>
            {/* Quote Icon */}
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Quote className="w-8 h-8 text-primary" />
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-serif italic">
              "{testimonials[activeIndex].text}"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 ring-4 ring-primary/20">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground text-lg">
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-muted-foreground text-sm">
                {testimonials[activeIndex].role}
              </p>
              <p className="text-primary text-sm font-medium mt-1">
                {testimonials[activeIndex].location}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-primary' : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnail Previews */}
          <div className="hidden md:flex justify-center gap-4 mt-10">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex 
                    ? 'scale-110 opacity-100' 
                    : 'scale-100 opacity-50 hover:opacity-75'
                }`}
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className={`w-12 h-12 rounded-full object-cover ring-2 ${
                    index === activeIndex ? 'ring-primary' : 'ring-transparent'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
