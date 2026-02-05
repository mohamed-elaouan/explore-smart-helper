import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about sharing the beauty of Morocco with the world',
  },
  {
    icon: Users,
    title: 'Personalization',
    description: 'Every journey is tailored to your unique interests and preferences',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in every aspect of your trip',
  },
  {
    icon: Globe,
    title: 'Authenticity',
    description: 'Experience the real Morocco through genuine cultural connections',
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920&h=800&fit=crop"
            alt="Morocco architecture"
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-xl text-background/80">Your trusted partner for Moroccan adventures</p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517137879013-d4bb8e29fc3b?w=600&h=500&fit=crop"
                alt="RAD Morocco team"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  RAD Morocco was founded by Radouane El Aouan with a simple mission: 
                  to share the extraordinary beauty and rich culture of Morocco with 
                  travelers from around the world.
                </p>
                <p>
                  Growing up in Morocco, Radouane developed a deep appreciation for 
                  his country's diverse landscapes, ancient traditions, and warm 
                  hospitality. This passion inspired him to create a travel company 
                  that offers authentic, personalized experiences.
                </p>
                <p>
                  Today, RAD Morocco has helped thousands of travelers discover the 
                  magic of Morocco—from the vibrant medinas of Marrakech to the 
                  serene dunes of the Sahara Desert.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional travel experiences that connect visitors with 
                the authentic beauty, culture, and hospitality of Morocco. We strive 
                to create journeys that are not just trips, but transformative adventures 
                that leave lasting memories.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading travel company for Morocco, known for our commitment 
                to excellence, sustainability, and creating meaningful connections 
                between travelers and local communities. We envision a world where 
                travel brings people together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background moroccan-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at RAD Morocco
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-12">
              Our dedicated team of local experts is passionate about creating 
              unforgettable experiences for every traveler who visits Morocco.
            </p>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop"
              alt="RAD Morocco Team"
              className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
