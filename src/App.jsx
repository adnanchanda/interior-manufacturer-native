import { HelmetProvider, Helmet } from 'react-helmet-async';
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
          content="Transform your space with bespoke furniture from Solapur's most trusted manufacturer. 30+ years of excellence."
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
        href="https://wa.me/918482993385"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-float"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.13 6.742 3.05 9.378L1.054 31.29l6.124-1.96A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.35 22.6c-.396 1.116-1.95 2.042-3.2 2.312-.852.182-1.964.328-5.71-1.228-4.798-1.99-7.882-6.86-8.122-7.18-.228-.318-1.924-2.562-1.924-4.888 0-2.326 1.218-3.47 1.65-3.942.396-.432.924-.594 1.218-.594.148 0 .282.008.402.014.432.018.648.044 .934.724.358.852 1.228 3.008 1.336 3.228.108.218.216.518.066.818-.136.308-.256.5-.478.77-.218.268-.43.474-.648.768-.2.256-.424.53-.176.962.248.432 1.104 1.82 2.372 2.948 1.632 1.452 3.006 1.902 3.432 2.112.33.162.72.134.978-.134.328-.342.732-.912 1.142-1.476.292-.402.662-.452 1.024-.308.366.136 2.318 1.092 2.714 1.292.396.2.66.296.758.462.096.166.096.962-.3 2.078z" />
        </svg>
      </a>
    </HelmetProvider>
  );
}
