import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { StatsSection } from '@/components/home/StatsSection';
import heroBg from '@/assets/hero-bg.jpg';

export default function About() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-64 overflow-hidden">
        <img
          src={heroBg}
          alt="About Us"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-heritage-charcoal/70" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-semibold text-heritage-gold md:text-5xl"
          >
            {t('nav.about')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-heritage-cream/80"
          >
            Know Us Better
          </motion.p>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-heritage-green">
                A Message
              </h2>
              <p className="text-sm uppercase tracking-wider text-heritage-gold">
                From The Proprietors
              </p>
              <div className="mt-2 h-0.5 w-12 bg-heritage-gold" />

              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="italic">
                  Thank you for taking the time to view our Product range. It would
                  give us immense pleasure if you would take the time to visit us at
                  our Showroom where we could introduce some of our unique items to
                  you. Our items are much more than exquisitely designed furniture
                  - In fact, these are splendid pieces of Historical Art!
                </p>
                <p>
                  We are passionate about our collection of Authentic Handmade Home
                  Décor, which reflects the depth & diversity of Indian Culture &
                  Art. Exquisitely designed & handcrafted by our talented artisans,
                  each piece is a unique blend of Indian Traditional &
                  Contemporary Collections.
                </p>
                <p>
                  Come, join us on this magical journey through the Past, where
                  the Philosophy and Dimensions of these multifaceted collections
                  leave you awestruck with a feeling of mystery, fascination, and
                  romance...
                </p>
              </div>

              <p className="mt-6 font-heading italic text-heritage-gold">
                -Valerina & Amanat Javed
              </p>
            </div>

            <div className="relative">
              <img
                src={heroBg}
                alt="Our Showroom"
                className="rounded-sm shadow-heritage-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-secondary py-16">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-heritage-green">
            The Founders
          </h2>

          <div className="space-y-16">
            {/* Founder 1 */}
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h3 className="font-heading text-2xl font-semibold text-heritage-green">
                  Dr Amanat Javed
                </h3>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    <strong>Amanat Javed</strong> is the pioneer of Indian Home Art.
                    Amanat Javed, who was a qualified Doctor in Herbal Medicines,
                    gave up his career to follow his passion for Art. He first
                    started out his Venture with humble beginnings in the year 1991
                    in the State of Kuwait.
                  </p>
                  <p>
                    He personally visits the Artisans who create these beautiful
                    Artefacts and dedicates a lot of time exploring different small
                    scale handicraft industries, and together they work on
                    contemporary designs, with a Vintage touch.
                  </p>
                </div>
              </div>
              <div className="order-1 flex justify-center lg:order-2">
                <div className="h-64 w-64 overflow-hidden rounded-sm bg-muted shadow-heritage" />
              </div>
            </div>

            {/* Founder 2 */}
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex justify-center">
                <div className="h-64 w-64 overflow-hidden rounded-sm bg-muted shadow-heritage" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-heritage-green">
                  Valerina Christine Fernandes
                </h3>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    <strong>Valerina Christine Fernandes</strong> joined her
                    husband, Amanat Javed in his Venture, in the year 2004 and
                    together they pursue this line of work with great enthusiasm.
                  </p>
                  <p>
                    Hailing from Goa, India she was exposed to Art & Music since
                    the time she was a child - and her family is also artistically
                    inclined. She attributes her deep passion for Arts and Music
                    to her Father who instilled the keen interest and enthusiasm
                    within her.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-heritage-charcoal/80" />
        </div>
        <div className="container relative z-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div />
            <div className="rounded-sm bg-heritage-charcoal/50 p-8 backdrop-blur">
              <h2 className="font-heading text-2xl font-semibold text-heritage-gold">
                Why Choose Us?
              </h2>
              <div className="mt-6 space-y-4 text-heritage-cream/80">
                <p>
                  Indian Home Art is one of the prominent suppliers of Artistic
                  Furniture and Home Décor Accessories since the year 2000 in
                  Kuwait. Our products are authentic handicrafts and are very
                  popular among the U.S. Military personnel deployed in the
                  Middle East.
                </p>
                <p>
                  We are in a position to offer you the best choices that the
                  Kuwaiti market has to offer, as we directly import our
                  Merchandise "at source" i.e. from the Artisans themselves. As
                  we have our own workshop/factory in India - we take
                  personalized orders and create designs according to client
                  requirements.
                </p>
                <p>
                  Our prices are very competitive and our quality is unsurpassed.
                  Our team of enthusiastic and professional personnel will assist
                  you with your Home Décor needs and queries if any.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
    </Layout>
  );
}
