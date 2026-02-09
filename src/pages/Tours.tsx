import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Users, ArrowRight, Check } from 'lucide-react';

const tours = [
  {
    id: 'imperial',
    title: 'Imperial Cities Tour',
    duration: '8 Days / 7 Nights',
    groupSize: '2-12 people',
    price: 'From $1,200',
    description: 'Discover Morocco\'s historic royal cities - Marrakech, Fes, Meknes, and Rabat. Experience ancient medinas, stunning palaces, and vibrant souks.',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&h=500&fit=crop',
    highlights: [
      'Explore the red city of Marrakech',
      'Wander through Fes medina',
      'Visit Meknes and Volubilis ruins',
      'Discover Rabat\'s historic sites',
      'Traditional riad accommodations',
    ],
  },
  {
    id: 'desert',
    title: 'Sahara Desert Adventure',
    duration: '5 Days / 4 Nights',
    groupSize: '2-8 people',
    price: 'From $800',
    description: 'Experience the magic of the Sahara Desert with camel treks, overnight camping under the stars, and breathtaking sunrise views over the dunes.',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&h=500&fit=crop',
    highlights: [
      'Camel trek to desert camp',
      'Overnight in luxury desert tent',
      'Sunrise over the dunes',
      'Visit Todra Gorge',
      'Traditional Berber music & dinner',
    ],
  },
  {
    id: 'gems',
    title: 'Morocco Gems',
    duration: '12 Days / 11 Nights',
    groupSize: '2-10 people',
    price: 'From $2,400',
    description: 'The ultimate Moroccan experience combining imperial cities, the Sahara Desert, coastal towns, and the Atlas Mountains in one comprehensive journey.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&h=500&fit=crop',
    highlights: [
      'All major cities included',
      'Sahara Desert experience',
      'Coastal town of Essaouira',
      'Atlas Mountain villages',
      'Premium accommodations throughout',
    ],
  },
  {
    id: 'coastal',
    title: 'Coastal Escape',
    duration: '6 Days / 5 Nights',
    groupSize: '2-8 people',
    price: 'From $900',
    description: 'Relax on Morocco\'s beautiful Atlantic coast. Visit Essaouira, Agadir, and charming fishing villages while enjoying fresh seafood and ocean breezes.',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=500&fit=crop',
    highlights: [
      'Historic Essaouira medina',
      'Beach time in Agadir',
      'Fresh seafood dining',
      'Surfing opportunities',
      'Argan oil cooperatives',
    ],
  },
  {
    id: 'mountain',
    title: 'Atlas Mountain Trek',
    duration: '7 Days / 6 Nights',
    groupSize: '4-12 people',
    price: 'From $1,100',
    description: 'Adventure through the High Atlas Mountains, visiting Berber villages, staying in mountain lodges, and trekking to stunning viewpoints.',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&h=500&fit=crop',
    highlights: [
      'Toubkal National Park',
      'Traditional Berber villages',
      'Mountain lodge stays',
      'Guided trekking',
      'Local culture immersion',
    ],
  },
  {
    id: 'exotic',
    title: 'Exotic Morocco Journey',
    duration: '10 Days / 9 Nights',
    groupSize: '2-8 people',
    price: 'From $1,800',
    description: 'A carefully curated journey showcasing Morocco\'s most exotic and lesser-known destinations, perfect for adventurous travelers.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=500&fit=crop',
    highlights: [
      'Blue city of Chefchaouen',
      'Paradise Valley',
      'Ouzoud Waterfalls',
      'Off-the-beaten-path villages',
      'Unique local experiences',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Tours() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548018560-c7196548e84d?w=1920&h=800&fit=crop"
            alt="Morocco tours"
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Plan Your Trip</h1>
          <p className="text-xl text-background/80">Choose your perfect Moroccan adventure</p>
        </motion.div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">Our Tour Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From imperial cities to desert adventures, find the perfect journey for your Moroccan dream
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {tours.map((tour) => (
              <motion.div key={tour.id} variants={itemVariants} id={`tour-${tour.id}`}>
                <Card className="overflow-hidden hover-lift border-none shadow-lg h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover"
                      />
                      {/* <div className="absolute top-4 left-4">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {tour.price}
                        </span>
                      </div> */}
                    </div>
                    <CardContent className="p-6 flex flex-col">
                      <h3 className="text-2xl font-serif font-bold mb-2">{tour.title}</h3>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {tour.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {tour.groupSize}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {tour.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {tour.highlights.slice(0, 3).map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-accent" />
                            <span>{highlight}</span>
                          </div>  
                        ))}
                      </div>
                      
                      <Button asChild className="w-full">
                        <Link to="/reservation">
                          Start Planning
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Tours CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">Looking for Something Different?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              We specialize in creating custom itineraries tailored to your interests, 
              timeline, and budget. Tell us your travel dreams and we'll make them happen.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/reservation">
                Request Custom Tour
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
