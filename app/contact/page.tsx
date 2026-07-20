import ContactHero from '@/components/ContactHero';
import ContactFormSection from '@/components/ContactFormSection';
import ContactMap from '@/components/ContactMap';

export const metadata = {
  title: 'Contact Us | Bingodee Co. Ltd.',
  description: 'Get in touch with our team for engineering expertise, industrial materials or fabrication services.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <ContactHero />
      <ContactFormSection />
      <ContactMap />
    </div>
  );
}
