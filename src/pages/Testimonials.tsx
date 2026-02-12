import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Our trip to Morocco with RAD was absolutely incredible! From the moment we arrived, everything was perfectly organized. Our guide was knowledgeable and friendly, and the experiences were authentic and memorable. The desert camp under the stars was a highlight we\'ll never forget.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
    tour: 'Morocco Gems - 12 Days',
  },
  {
    id: 2,
    name: 'Emma Thompson',
    location: 'London, UK',
    rating: 5,
    text: 'I traveled solo through Morocco with RAD and felt completely safe and well taken care of. The itinerary was perfectly paced, the accommodations were charming, and the local insights made all the difference. Highly recommend for solo travelers!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format',
    tour: 'Imperial Cities Tour - 8 Days',
  },
  {
    id: 3,
    name: 'David & Lisa Chen',
    location: 'Sydney, Australia',
    rating: 5,
    text: 'We celebrated our anniversary in Morocco and RAD made it absolutely special. From the private desert dinner to the gorgeous riads, every detail was thoughtful. The team went above and beyond to make our trip romantic and unforgettable.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
    tour: 'Sahara Desert Adventure - 5 Days',
  },
  {
    id: 4,
    name: 'Marcus Weber',
    location: 'Berlin, Germany',
    rating: 5,
    text: 'As a photographer, I needed flexibility and access to unique locations. RAD understood this perfectly and customized my tour to include the best spots at the right times. The results were stunning photos and amazing memories.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format',
    tour: 'Custom Photography Tour - 10 Days',
  },
  {
    id: 5,
    name: 'The Martinez Family',
    location: 'Madrid, Spain',
    rating: 5,
    text: 'Traveling with kids can be challenging, but RAD made it seamless. The family-friendly activities, comfortable transportation, and kid-approved food options made this our best family vacation yet. The kids still talk about the camel ride!',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop&auto=format',
    tour: 'Family Morocco Adventure - 9 Days',
  },
  {
    id: 6,
    name: 'Jennifer Williams',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'I\'ve traveled extensively, and Morocco with RAD was one of my best trips. The attention to detail, local expertise, and genuine hospitality made all the difference. Already planning my return trip!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&auto=format',
    tour: 'Exotic Morocco Journey - 10 Days',
  },
];

// Curated Morocco tourism gallery images with captions
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1564569727270-92e9db5a5c65?w=1200&h=900&fit=crop&q=85&auto=format',
    thumb: 'https://images.unsplash.com/photo-1564569727270-92e9db5a5c65?w=300&h=225&fit=crop&q=80&auto=format',
    subHtml: '<h4>Marrakech Medina</h4><p>Vibrant streets of the ancient medina</p>',
    alt: 'Marrakech Medina streets',
  },
  {
    src: 'https://images.unsplash.com/photo-1517824804958-7c72e476d348?w=1200&h=900&fit=crop&q=85&auto=format',
    thumb: 'https://images.unsplash.com/photo-1517824804958-7c72e476d348?w=300&h=225&fit=crop&q=80&auto=format',
    subHtml: '<h4>Chefchaouen Blue City</h4><p>The famous blue-washed streets of Chefchaouen</p>',
    alt: 'Chefchaouen blue streets',
  },
  {
    src: 'https://images.unsplash.com/photo-1503088537571-2a4e3d5a8f5c?w=1200&h=900&fit=crop&q=85&auto=format',
    thumb: 'https://images.unsplash.com/photo-1503088537571-2a4e3d5a8f5c?w=300&h=225&fit=crop&q=80&auto=format',
    subHtml: '<h4>Sahara Desert</h4><p>Golden dunes of the Merzouga desert at sunset</p>',
    alt: 'Sahara desert dunes',
  },
  {
    src: 'https://images.unsplash.com/photo-1499858678009-4b7a4a0a0e0a?w=1200&h=900&fit=crop&q=85&auto=format',
    thumb: 'https://images.unsplash.com/photo-1499858678009-4b7a4a0a0e0a?w=300&h=225&fit=crop&q=80&auto=format',
    subHtml: '<h4>Fes Tanneries</h4><p>Ancient leather tanneries of Fes</p>',
    alt: 'Fes tanneries',
  },
  {
    src: 'https://images.unsplash.com/photo-1566190866002-9f2e3d5a8f5c?w=1200&h=900&fit=crop&q=85&auto=format',
    thumb: 'https://images.unsplash.com/photo-1566190866002-9f2e3d5a8f5c?w=300&h=225&fit=crop&q=80&auto=format',
    subHtml: '<h4>Atlas Mountains</h4><p>Breathtaking views of the High Atlas range</p>',
    alt: 'Atlas Mountains landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1547806090885-3a4e3d5a8f5c?w=1200&h=900&fit=crop&q=85&auto=format',
    thumb: 'https://images.unsplash.com/photo-1547806090885-3a4e3d5a8f5c?w=300&h=225&fit=crop&q=80&auto=format',
    subHtml: '<h4>Traditional Tagine</h4><p>Authentic Moroccan cuisine</p>',
    alt: 'Moroccan tagine dish',
  },
  {
    src: 'https://images.unsplash.com/photo-1526066965373-7f0f5a7a2e9e?w=1200&h=900&fit=crop&q=85&auto=format',
    thumb: 'https://images.unsplash.com/photo-1526066965373-7f0f5a7a2e9e?w=300&h=225&fit=crop&q=80&auto=format',
    subHtml: '<h4>Ait Ben Haddou</h4><p>UNESCO World Heritage kasbah fortress</p>',
    alt: 'Ait Ben Haddou kasbah',
  },
  {
    src: 'https://images.unsplash.com/photo-1543588543811-2e8b8e51a0c8?w=1200&h=900&fit=crop&q=85&auto=format',
    thumb: 'https://images.unsplash.com/photo-1543588543811-2e8b8e51a0c8?w=300&h=225&fit=crop&q=80&auto=format',
    subHtml: '<h4>Essaouira Coast</h4><p>Atlantic coastline and historic port</p>',
    alt: 'Essaouira beach',
  },
  {
    src: 'https://images.unsplash.com/photo-1518690543811-2e8b8e51a0c8?w=1200&h=900&fit=crop&q=85&auto=format',
    thumb: 'https://images.unsplash.com/photo-1518690543811-2e8b8e51a0c8?w=300&h=225&fit=crop&q=80&auto=format',
    subHtml: '<h4>Jemaa el-Fnaa Square</h4><p>Heart of Marrakech with vibrant atmosphere</p>',
    alt: 'Jemaa el-Fnaa square',
  },
  {
    src: 'https://images.unsplash.com/photo-1564767609953-9f3e9e8b8c3e?w=1200&h=900&fit=crop&q=85&auto=format',
    thumb: 'https://images.unsplash.com/photo-1564767609953-9f3e9e8b8c3e?w=300&h=225&fit=crop&q=80&auto=format',
    subHtml: '<h4>Merzouga Camel Ride</h4><p>Traditional desert transportation experience</p>',
    alt: 'Camel ride in desert',
  },
  {
    src: 'https://images.unsplash.com/photo-1566784455117-42c821865187?w=1200&h=900&fit=crop&q=85&auto=format',
    thumb: 'https://images.unsplash.com/photo-1566784455117-42c821865187?w=300&h=225&fit=crop&q=80&auto=format',
    subHtml: '<h4>Volubilis Ruins</h4><p>Ancient Roman archaeological site</p>',
    alt: 'Volubilis Roman ruins',
  },
  {
    src: 'https://images.unsplash.com/photo-1517144349795-1a6c0b4c3d4a?w=1200&h=900&fit=crop&q=85&auto=format',
    thumb: 'https://images.unsplash.com/photo-1517144349795-1a6c0b4c3d4a?w=300&h=225&fit=crop&q=80&auto=format',
    subHtml: '<h4>Riad Courtyard</h4><p>Traditional Moroccan architecture and design</p>',
    alt: 'Riad interior courtyard',
  },
  {
    src: 'https://images.unsplash.com/photo-1566190866002-9f2e3d5a8f5c?w=1200&h=900&fit=crop&q=85&auto=format&crop=right',
    thumb: 'https://images.unsplash.com/photo-1566190866002-9f2e3d5a8f5c?w=300&h=225&fit=crop&q=80&auto=format&crop=right',
    subHtml: '<h4>Dades Valley</h4><p>Dramatic rock formations and oasis landscapes</p>',
    alt: 'Dades Valley scenery',
  },
  {
    src: 'https://images.unsplash.com/photo-1503088537571-2a4e3d5a8f5c?w=1200&h=900&fit=crop&q=85&auto=format&crop=left',
    thumb: 'https://images.unsplash.com/photo-1503088537571-2a4e3d5a8f5c?w=300&h=225&fit=crop&q=80&auto=format&crop=left',
    subHtml: '<h4>Zagora Sunset</h4><p>Mesmerizing desert sunset views</p>',
    alt: 'Desert sunset',
  },
  {
    src: 'https://images.unsplash.com/photo-1547806090885-3a4e3d5a8f5c?w=1200&h=900&fit=crop&q=85&auto=format&crop=center',
    thumb: 'https://images.unsplash.com/photo-1547806090885-3a4e3d5a8f5c?w=300&h=225&fit=crop&q=80&auto=format&crop=center',
    subHtml: '<h4>Spice Market</h4><p>Colorful souks and aromatic spices</p>',
    alt: 'Moroccan spice market',
  },
  {
    src: 'https://images.unsplash.com/photo-1526066965373-7f0f5a7a2e9e?w=1200&h=900&fit=crop&q=85&auto=format&crop=bottom',
    thumb: 'https://images.unsplash.com/photo-1526066965373-7f0f5a7a2e9e?w=300&h=225&fit=crop&q=80&auto=format&crop=bottom',
    subHtml: '<h4>Desert Camp</h4><p>Traditional Berber camp under the stars</p>',
    alt: 'Desert camp at night',
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
            src="https://images.unsplash.com/photo-1517137879013-d4bb8e29fc3b?w=1920&h=800&fit=crop&auto=format"
            alt="Happy travelers in Morocco"
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
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
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
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
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

      {/* Gallery Section with LightGallery.js */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-600">
              Moroccan Memories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Authentic moments captured across the vibrant landscapes, ancient medinas, and golden deserts of Morocco
            </p>
          </motion.div>

          {/* LightGallery Component */}
          <div className="max-w-6xl mx-auto">
            <LightGallery
              speed={400}
              plugins={[lgThumbnail, lgZoom]}
              download={false}
              counter={true}
              elementClassNames="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {galleryImages.map((image, index) => (
                <a
                  key={index}
                  className="gallery-item group relative block overflow-hidden rounded-xl shadow-md cursor-pointer mb-4"
                  href={image.src}
                  data-sub-html={image.subHtml}
                  data-src={image.src}
                >
                  <img
                    src={image.thumb}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading={index > 8 ? "lazy" : "eager"}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-serif font-medium text-lg">
                        {image.subHtml.replace(/<[^>]*>/g, '').split(':')[0]}
                      </p>
                      <div className="flex mt-1 text-amber-300">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Decorative border */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-300 rounded-xl" />
                </a>
              ))}
            </LightGallery>
          </div>

          {/* Callout badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <Star className="w-5 h-5 text-amber-400 mr-2" />
              <span className="font-medium text-primary">Every journey crafted with authentic Moroccan soul</span>
            </div>
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
