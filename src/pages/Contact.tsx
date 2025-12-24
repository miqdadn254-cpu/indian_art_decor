import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import heroBg from '@/assets/hero-bg.jpg';

export default function Contact() {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-64 overflow-hidden">
        <img
          src={heroBg}
          alt="Contact Us"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-heritage-charcoal/70" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-semibold text-heritage-gold md:text-5xl"
          >
            {t('nav.contact')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-heritage-cream/80"
          >
            Get in Touch With Us
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl font-semibold text-heritage-green">
                Send Us a Message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Have a question? We'd love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Your Name (required)
                    </label>
                    <Input
                      required
                      placeholder="Enter your name"
                      className="border-border bg-card"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Your Email (required)
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="border-border bg-card"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your Contact Number (required)
                  </label>
                  <Input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="border-border bg-card"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    placeholder="What is this about?"
                    className="border-border bg-card"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    rows={5}
                    placeholder="Type your message here..."
                    className="border-border bg-card"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-heritage-green text-heritage-cream hover:bg-heritage-green-light"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="overflow-hidden rounded-sm bg-heritage-charcoal p-8 text-heritage-cream">
                <h2 className="font-heading text-2xl font-semibold text-heritage-gold">
                  Contact Information
                </h2>
                <p className="mt-2 text-heritage-cream/70">
                  Feel free to reach out to us through any of these channels.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-heritage-gold/20">
                      <MapPin className="h-5 w-5 text-heritage-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-heritage-gold">Address</h3>
                      <p className="mt-1 text-heritage-cream/70">
                        Showroom Location
                        <br />
                        Kuwait City, Kuwait
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-heritage-gold/20">
                      <Phone className="h-5 w-5 text-heritage-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-heritage-gold">Phone</h3>
                      <p className="mt-1 text-heritage-cream/70">
                        +965 1234 5678
                        <br />
                        +965 8765 4321
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-heritage-gold/20">
                      <Mail className="h-5 w-5 text-heritage-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-heritage-gold">Email</h3>
                      <p className="mt-1 text-heritage-cream/70">
                        info@heritagehomeart.com
                        <br />
                        sales@heritagehomeart.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-heritage-gold/20">
                      <Clock className="h-5 w-5 text-heritage-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-heritage-gold">
                        Business Hours
                      </h3>
                      <p className="mt-1 text-heritage-cream/70">
                        Saturday - Thursday: 10:00 AM - 9:00 PM
                        <br />
                        Friday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video overflow-hidden rounded-sm bg-muted">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <MapPin className="mr-2 h-5 w-5" />
                  Map Integration Coming Soon
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
