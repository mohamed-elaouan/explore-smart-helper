import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Plan a Trip', path: '/tours' },
  { name: 'Contact', path: '/contact' },
];

const tourLinks = [
  { name: 'Imperial Cities', path: '/tours#imperial' },
  { name: 'Desert Adventures', path: '/tours#desert' },
  { name: 'Coastal Escapes', path: '/tours#coastal' },
  { name: 'Mountain Treks', path: '/tours#mountain' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/radmorocco', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/radmorocco', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/radmorocco', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/radmorocco', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="text-3xl font-serif font-bold">
                <span className="text-primary">R</span>
                <span className="text-background">AD</span>
                <span className="text-background/60 text-lg ml-1">Morocco</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Discover the magic of Morocco with RAD Morocco. We create unforgettable 
              travel experiences that blend adventure, culture, and authentic Moroccan hospitality.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Types */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6">Popular Tours</h3>
            <ul className="space-y-3">
              {tourLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+212600000000"
                  className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>+212 600 000 000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@radmorocco.com"
                  className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>info@radmorocco.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70 text-sm">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Marrakech, Morocco</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© {new Date().getFullYear()} RAD Morocco. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
