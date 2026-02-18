import { HelmetProvider, Helmet } from 'react-helmet-async';
import { FaWhatsapp } from 'react-icons/fa';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Founders from './components/Founders';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Factory from './components/Factory';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: 'New Lucky Furniture Industries',
  description:
    'Premium furniture manufacturer in Solapur, Maharashtra. Specializing in home furniture, office furniture, and customized solutions since 1995.',
  url: 'https://newluckyfurniture.com',
  telephone: '+919876543210',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Industrial Area',
    addressLocality: 'Solapur',
    addressRegion: 'Maharashtra',
    postalCode: '413001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.680429,
    longitude: 75.918252,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  foundingDate: '1995',
  priceRange: '₹₹',
  image: 'https://newluckyfurniture.com/logo.png',
  sameAs: [],
};

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>New Lucky Furniture Industries | Premium Furniture Manufacturer in Solapur</title>
        <meta
          name="description"
          content="New Lucky Furniture Industries — Solapur's trusted furniture manufacturer since 1995. Custom home & office furniture crafted with premium materials and expert craftsmanship. Get a free consultation today."
        />
        <meta
          name="keywords"
          content="furniture manufacturer Solapur, custom furniture, home furniture, office furniture, New Lucky Furniture, furniture shop Solapur, wooden furniture, modular furniture"
        />
        <meta name="author" content="New Lucky Furniture Industries" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="New Lucky Furniture Industries | Premium Furniture Since 1995" />
        <meta
          property="og:description"
          content="Transform your space with bespoke furniture from Solapur's most trusted manufacturer. 25+ years of excellence."
        />
        <meta property="og:url" content="https://newluckyfurniture.com" />
        <meta property="og:site_name" content="New Lucky Furniture Industries" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New Lucky Furniture Industries" />
        <meta
          name="twitter:description"
          content="Premium furniture manufacturer in Solapur since 1995."
        />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero />
        <About />
        <Founders />
        <Services />
        <WhyChooseUs />
        <Factory />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918482993385?text=Hi!%20I'm%20interested%20in%20your%20furniture.%20Can%20I%20get%20more%20details%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-float"
      >
        <FaWhatsapp size={28} color="white" />
      </a>
    </HelmetProvider>
  );
}
