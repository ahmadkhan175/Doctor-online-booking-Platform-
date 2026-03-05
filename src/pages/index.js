import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function Home() {
  // SEO: Schema.org structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "YourWebsite - Doctor Appointment Booking",
    "description": "Book appointments with top doctors in Pakistan. No waiting, verified doctors, instant booking.",
    "url": "https://yourwebsite.pk",
    "telephone": "+92-300-1234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Street",
      "addressLocality": "Sialkot",
      "addressRegion": "Punjab",
      "postalCode": "51310",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.4945",
      "longitude": "74.5229"
    },
    "priceRange": "Rs. 500 - Rs. 2000",
    "paymentAccepted": "Cash, JazzCash, EasyPaisa, Credit Card",
    "currenciesAccepted": "PKR",
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "450"
    }
  };

  return (
    <>
      {/* SEO: Meta tags using next-seo library */}
      <NextSeo
        title="Book Doctor Appointments Online in Pakistan | No Waiting, Verified Doctors"
        description="Book appointments with top doctors in Sialkot, Lahore, Karachi. Skip the queue. 500+ verified doctors. Instant booking. Reviews from real patients."
        canonical="https://yourwebsite.pk"
        openGraph={{
          type: 'website',
          locale: 'en_PK',
          url: 'https://yourwebsite.pk',
          site_name: 'YourWebsite',
          title: 'Book Doctor Appointments Online in Pakistan',
          description: 'Skip the waiting room. Book appointments with verified doctors instantly.',
          images: [
            {
              url: 'https://yourwebsite.pk/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Doctor appointment booking in Pakistan',
            }
          ],
        }}
        twitter={{
          handle: '@yourwebsite',
          site: '@yourwebsite',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'doctor appointment Pakistan, book doctor online, doctor Sialkot, online doctor booking, medical appointment, healthcare Pakistan, verified doctors'
          },
          {
            name: 'author',
            content: 'YourWebsite'
          },
          {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          },
          {
            name: 'geo.region',
            content: 'PK-PB'
          },
          {
            name: 'geo.placename',
            content: 'Sialkot'
          }
        ]}
      />

      {/* SEO: Structured data (JSON-LD) */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Performance: Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PWA: Manifest for mobile */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4285F4" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      {/* Main content with semantic HTML for SEO */}
      <main className="min-h-screen">
        {/* Hero Section - Above the fold content */}
        <section className="hero-section bg-gradient-to-br from-blue-50 to-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* SEO: H1 tag - most important heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Book Doctor Appointments Online in Pakistan
            </h1>
            
            {/* SEO: Subtitle with keywords */}
            <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Skip the waiting room. Book appointments with verified doctors in Sialkot, Lahore & Karachi. 
              Instant booking, no queue, save 3 hours of your time.
            </p>

            {/* Search Box - Primary CTA */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <form action="/doctors" method="GET" className="flex flex-col md:flex-row gap-4">
                {/* SEO: Labeled inputs for accessibility */}
                <div className="flex-1">
                  <label htmlFor="search" className="sr-only">Search doctors or specialties</label>
                  <input
                    id="search"
                    name="q"
                    type="text"
                    placeholder="Search doctors, specialties, or conditions..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-label="Search for doctors"
                  />
                </div>
                
                <div className="flex-1">
                  <label htmlFor="city" className="sr-only">Select city</label>
                  <select
                    id="city"
                    name="city"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    aria-label="Select city"
                  >
                    <option value="">All Cities</option>
                    <option value="sialkot">Sialkot</option>
                    <option value="lahore">Lahore</option>
                    <option value="karachi">Karachi</option>
                    <option value="islamabad">Islamabad</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  aria-label="Search for doctors"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-gray-600">Verified Doctors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">5,000+</p>
                <p className="text-gray-600">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">4.8★</p>
                <p className="text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Browse by Specialty - Internal linking for SEO */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* SEO: H2 tag for section heading */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Browse Doctors by Specialty
            </h2>
            
            {/* SEO: Grid of specialty links */}
            <nav aria-label="Medical specialties" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* SEO: Each link is crawlable and keyword-rich */}
              <a 
                href="/doctors/general-physician" 
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center group"
                aria-label="Find General Physicians"
              >
                <div className="text-4xl mb-2">🩺</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">General Physician</h3>
                <p className="text-sm text-gray-500 mt-1">120 doctors</p>
              </a>

              <a 
                href="/doctors/dentist" 
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center group"
                aria-label="Find Dentists"
              >
                <div className="text-4xl mb-2">🦷</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Dentist</h3>
                <p className="text-sm text-gray-500 mt-1">85 doctors</p>
              </a>

              <a 
                href="/doctors/dermatologist" 
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center group"
                aria-label="Find Dermatologists"
              >
                <div className="text-4xl mb-2">💊</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Dermatologist</h3>
                <p className="text-sm text-gray-500 mt-1">45 doctors</p>
              </a>

              <a 
                href="/doctors/gynecologist" 
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center group"
                aria-label="Find Gynecologists"
              >
                <div className="text-4xl mb-2">👶</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Gynecologist</h3>
                <p className="text-sm text-gray-500 mt-1">38 doctors</p>
              </a>

              <a 
                href="/doctors/pediatrician" 
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center group"
                aria-label="Find Pediatricians"
              >
                <div className="text-4xl mb-2">🧸</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Pediatrician</h3>
                <p className="text-sm text-gray-500 mt-1">52 doctors</p>
              </a>

              {/* More specialties... */}
            </nav>

            <div className="text-center mt-8">
              <a 
                href="/specialties" 
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
              >
                View All Specialties →
              </a>
            </div>
          </div>
        </section>

        {/* How It Works - Content for SEO */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* SEO: Article tags for content sections */}
              <article className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2">1. Search Doctor</h3>
                <p className="text-gray-600">
                  Search by specialty, name, or condition. See verified doctors with real patient reviews and ratings.
                </p>
              </article>

              <article className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-xl font-bold mb-2">2. Book Appointment</h3>
                <p className="text-gray-600">
                  Choose available time slot, fill in details, and confirm booking. Get instant confirmation via SMS and email.
                </p>
              </article>

              <article className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-2">3. Visit Doctor</h3>
                <p className="text-gray-600">
                  Arrive at scheduled time, skip the queue, see doctor immediately. No waiting, save 3+ hours of your day.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Featured Doctors - Dynamic content for SEO */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Top Rated Doctors in Sialkot
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* SEO: Each doctor card is crawlable with structured data */}
              <article 
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                itemScope 
                itemType="https://schema.org/Physician"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src="/images/doctors/dr-sara-khan.jpg" 
                    alt="Dr. Sara Khan - Dermatologist in Sialkot"
                    className="w-20 h-20 rounded-full object-cover"
                    itemProp="image"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900" itemProp="name">
                      Dr. Sara Khan
                    </h3>
                    <p className="text-gray-600" itemProp="medicalSpecialty">Dermatologist</p>
                    <p className="text-sm text-gray-500">MBBS, FCPS</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="text-sm text-gray-600" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                    <span itemProp="ratingValue">4.9</span> (<span itemProp="reviewCount">85</span> reviews)
                  </span>
                </div>
                
                <p className="text-gray-600 mb-2">
                  <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    📍 <span itemProp="addressLocality">Clifton, Sialkot</span>
                  </span>
                </p>
                <p className="text-blue-600 font-semibold mb-4">Rs. 1,000</p>
                
                <a 
                  href="/doctor/dr-sara-khan-dermatologist-sialkot" 
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label="Book appointment with Dr. Sara Khan"
                >
                  Book Appointment
                </a>
              </article>

              {/* More featured doctors... */}
            </div>
          </div>
        </section>

        {/* Cities Section - Local SEO */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Find Doctors in Your City
            </h2>
            
            <div className="grid md:grid-cols-4 gap-4">
              <a 
                href="/doctors/sialkot" 
                className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="font-bold text-lg mb-2">Sialkot</h3>
                <p className="text-gray-600 text-sm">150+ Doctors</p>
              </a>

              <a 
                href="/doctors/lahore" 
                className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="font-bold text-lg mb-2">Lahore</h3>
                <p className="text-gray-600 text-sm">250+ Doctors</p>
              </a>

              <a 
                href="/doctors/karachi" 
                className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="font-bold text-lg mb-2">Karachi</h3>
                <p className="text-gray-600 text-sm">300+ Doctors</p>
              </a>

              <a 
                href="/doctors/islamabad" 
                className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="font-bold text-lg mb-2">Islamabad</h3>
                <p className="text-gray-600 text-sm">180+ Doctors</p>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section - Great for SEO */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            {/* SEO: FAQ Schema markup */}
            <div itemScope itemType="https://schema.org/FAQPage">
              <article className="mb-6 pb-6 border-b" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold mb-2" itemProp="name">
                  How do I book an appointment?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    Simply search for a doctor, select an available time slot, fill in your details, and confirm. 
                    You'll receive instant confirmation via SMS and email. The entire process takes less than 2 minutes.
                  </p>
                </div>
              </article>

              <article className="mb-6 pb-6 border-b" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold mb-2" itemProp="name">
                  Are the doctors verified?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    Yes, all doctors on our platform are PMDC (Pakistan Medical Council) verified. 
                    We verify their medical licenses, qualifications, and clinic addresses before listing them.
                  </p>
                </div>
              </article>

              <article className="mb-6 pb-6 border-b" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold mb-2" itemProp="name">
                  Do I still visit the doctor physically?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    Yes, you visit the doctor at their clinic at your scheduled time. We don't replace the physical visit - 
                    we just make booking easier and eliminate waiting time. You can also choose online video consultations 
                    with selected doctors.
                  </p>
                </div>
              </article>

              {/* More FAQs... */}
            </div>
          </div>
        </section>

        {/* SEO: Footer with important links */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <nav aria-label="About">
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
                  <li><a href="/how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">For Doctors</h3>
              <nav aria-label="For doctors">
                <ul className="space-y-2">
                  <li><a href="/doctors/join" className="text-gray-400 hover:text-white">Join as Doctor</a></li>
                  <li><a href="/doctor/login" className="text-gray-400 hover:text-white">Doctor Login</a></li>
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Popular Cities</h3>
              <nav aria-label="Cities">
                <ul className="space-y-2">
                  <li><a href="/doctors/sialkot" className="text-gray-400 hover:text-white">Sialkot</a></li>
                  <li><a href="/doctors/lahore" className="text-gray-400 hover:text-white">Lahore</a></li>
                  <li><a href="/doctors/karachi" className="text-gray-400 hover:text-white">Karachi</a></li>
                  <li><a href="/doctors/islamabad" className="text-gray-400 hover:text-white">Islamabad</a></li>
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://facebook.com/yourwebsite" aria-label="Facebook" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="https://instagram.com/yourwebsite" aria-label="Instagram" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2026 YourWebsite.pk - All rights reserved</p>
          </div>
        </footer>
      </main>
    </>
  );
}
