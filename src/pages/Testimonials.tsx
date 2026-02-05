import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Our trip to Morocco with RAD was absolutely incredible! From the moment we arrived, everything was perfectly organized. Our guide was knowledgeable and friendly, and the experiences were authentic and memorable. The desert camp under the stars was a highlight we\'ll never forget.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    tour: 'Morocco Gems - 12 Days',
  },
  {
    id: 2,
    name: 'Emma Thompson',
    location: 'London, UK',
    rating: 5,
    text: 'I traveled solo through Morocco with RAD and felt completely safe and well taken care of. The itinerary was perfectly paced, the accommodations were charming, and the local insights made all the difference. Highly recommend for solo travelers!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    tour: 'Imperial Cities Tour - 8 Days',
  },
  {
    id: 3,
    name: 'David & Lisa Chen',
    location: 'Sydney, Australia',
    rating: 5,
    text: 'We celebrated our anniversary in Morocco and RAD made it absolutely special. From the private desert dinner to the gorgeous riads, every detail was thoughtful. The team went above and beyond to make our trip romantic and unforgettable.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    tour: 'Sahara Desert Adventure - 5 Days',
  },
  {
    id: 4,
    name: 'Marcus Weber',
    location: 'Berlin, Germany',
    rating: 5,
    text: 'As a photographer, I needed flexibility and access to unique locations. RAD understood this perfectly and customized my tour to include the best spots at the right times. The results were stunning photos and amazing memories.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    tour: 'Custom Photography Tour - 10 Days',
  },
  {
    id: 5,
    name: 'The Martinez Family',
    location: 'Madrid, Spain',
    rating: 5,
    text: 'Traveling with kids can be challenging, but RAD made it seamless. The family-friendly activities, comfortable transportation, and kid-approved food options made this our best family vacation yet. The kids still talk about the camel ride!',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop',
    tour: 'Family Morocco Adventure - 9 Days',
  },
  {
    id: 6,
    name: 'Jennifer Williams',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'I\'ve traveled extensively, and Morocco with RAD was one of my best trips. The attention to detail, local expertise, and genuine hospitality made all the difference. Already planning my return trip!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    tour: 'Exotic Morocco Journey - 10 Days',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featured = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517137879013-d4bb8e29fc3b?w=1920&h=800&fit=crop"
            alt="Happy travelers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-background"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Happy Travelers</h1>
          <p className="text-xl text-background/80">Stories from our guests around the world</p>
        </motion.div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                <p className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground/90">
                  "{featured.text}"
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={featured.image}
                      alt={featured.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{featured.name}</h4>
                      <p className="text-muted-foreground">{featured.location}</p>
                      <p className="text-sm text-primary">{featured.tour}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(featured.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <span className="text-muted-foreground">
                {currentIndex + 1} / {testimonials.length}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">What Our Guests Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read more stories from travelers who have experienced Morocco with us
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <Card className="h-full border-none shadow-lg hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-6 line-clamp-4">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Create Your Own Story?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              Join thousands of satisfied travelers who have discovered Morocco with RAD Morocco.
              Your adventure awaits!
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/reservation">
                Start Planning Your Trip
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
