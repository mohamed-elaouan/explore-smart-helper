import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Car, Compass, Briefcase, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: MapPin,
    title: 'Tours & Accommodations',
    description: 'From luxury riads in ancient medinas to desert camps under the stars, we arrange the perfect accommodations for your journey. Our curated tours take you through Morocco\'s most captivating destinations.',
    features: [
      'Private guided tours',
      'Group travel options',
      'Traditional riads & hotels',
      'Desert glamping experiences',
      'Coastal resorts',
    ],
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=400&fit=crop',
  },
  {
    icon: Car,
    title: 'Transportation',
    description: 'Travel in comfort with our premium transportation services. From airport transfers to multi-day road trips through the Atlas Mountains, we ensure smooth and scenic journeys.',
    features: [
      'Airport transfers',
      'Private drivers',
      '4x4 desert vehicles',
      'Comfortable minivans',
      'Luxury car options',
    ],
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
  },
  {
    icon: Compass,
    title: 'Experiences',
    description: 'Immerse yourself in Moroccan culture with authentic experiences. From cooking classes to camel treks, we offer unique activities that create lasting memories.',
    features: [
      'Cooking classes',
      'Camel trekking',
      'Hot air balloon rides',
      'Medina walking tours',
      'Artisan workshops',
    ],
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&h=400&fit=crop',
  },
  {
    icon: Briefcase,
    title: 'Travel Consulting',
    description: 'Our expert team provides personalized travel planning services. We help you design the perfect itinerary based on your interests, budget, and travel style.',
    features: [
      'Custom itinerary design',
      'Budget planning',
      'Travel tips & advice',
      'Visa assistance',
      '24/7 support',
    ],
    image: 'https://images.unsplash.com/photo-1517137879013-d4bb8e29fc3b?w=600&h=400&fit=crop',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1920&h=800&fit=crop"
            alt="Morocco services"
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-xl text-background/80">Everything you need for the perfect Moroccan journey</p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to="/reservation">
                      Inquire Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">Need Help Planning Your Trip?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our travel experts are here to help you create the perfect Moroccan adventure.
              Get in touch for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/reservation">
                  Start Planning
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
