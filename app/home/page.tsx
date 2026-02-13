import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageCarousel from '../components/ImageCarousel';
import FeatureGrid from '../components/FeatureGrid';
import LocationSection from '../components/LocationSection';
import ParallaxCTA from '../components/ParallaxCTA';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { CarouselItem, FeatureBlock, SocialLink } from '../components/types';

// Data configuration

const carouselItems: CarouselItem[] = [
  {
    imageUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/bosque.webp',
    alt: '24.000 m2 de espacio y áreas verdes',
    caption: '24.000 m2 de espacio y áreas verdes',
  },
  {
    imageUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/jacuzzi.webp',
    alt: 'Hot tubs con vista a los jardines',
    caption: 'Hot tubs con vista a los jardines',
  },
  {
    imageUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/piscina.webp',
    alt: 'Piscina de adultos y de niños',
    caption: 'Piscina de adultos y de niños',
  },
  {
    imageUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Restaurant.webp',
    alt: 'Restaurant de comida típica',
    caption: 'Restaurant de comida típica',
  },
  {
    imageUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Salones-de-eventos.webp',
    alt: 'Amplios salones de eventos',
    caption: 'Amplios salones de eventos',
  },
  {
    imageUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Voley.webp',
    alt: 'Cancha de voley',
    caption: 'Cancha de voley',
  },
  {
    imageUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Futbol.webp',
    alt: 'Cancha de fútbol',
    caption: 'Cancha de fútbol',
  },
  {
    imageUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/tenis.webp',
    alt: 'Cancha de tenis',
    caption: 'Cancha de tenis',
  },
];

const mainFeatures: FeatureBlock[] = [
  {
    title: 'Nuestras Cabañas',
    subtitle: 'Escápate a la Serenidad',
    href: '/cabanas',
  },
  {
    title: 'Nosotros',
    subtitle: 'Espacios que Inspiran',
    href: '/about',
  },
  {
    title: 'Restaurante',
    subtitle: 'Sabores que Enamoran',
    href: '/restaurant',
  },
];

const eventFeatures: FeatureBlock[] = [
  {
    title: 'Matrimonios',
    subtitle: 'Tu Historia de Amor',
    href: '/events/matrimonios',
  },
  {
    title: 'Eventos Corporativos',
    subtitle: 'Eventos que Conectan',
    href: '/events/corporativos',
  },
  {
    title: 'Actividades Escolares',
    subtitle: 'Aventuras Inolvidables',
    href: '/events/paseos',
  },
];

const socialLinks: SocialLink[] = [
  {
    name: 'Tripadvisor',
    href: 'https://www.tripadvisor.cl/Hotel_Review-g3732316-d7155218-Reviews-Centro_de_Eventos_Valle_del_Sol-Quillon_Biobio_Region.html',
    icon: '🌐',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/valledelsolquillon',
    icon: '📘',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/valledelsolquillon.cl/',
    icon: '📷',
  },
  {
    name: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=%2B56976705424',
    icon: '💬',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <Hero
          staticText="Descubre en Valle del sol la Magia de la"
          animatedWords={['Naturaleza', 'Relajación', 'hospitalidad']}
        />

        {/* Image Carousel */}
        <ImageCarousel items={carouselItems} />

        {/* Main Features */}
        <FeatureGrid features={mainFeatures} columns={3} />

        {/* Event Features */}
        <FeatureGrid features={eventFeatures} columns={3} />

        {/* Location Section */}
        <LocationSection />

        {/* Parallax CTA */}
        <ParallaxCTA
          text="Déjate enamorar por la tranquilidad y el encanto de Valle del Sol."
          buttonText="Cotiza tu evento"
          buttonHref="/cotiza-tu-evento"
        />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        tagline="Vuelve a esos lugares donde fuiste feliz. Vuelve a Valle del Sol"
        contactEmail="contacto@valledelsolquillon.cl"
        socialLinks={socialLinks}
      />
    </div>
  );
}
