import Head from 'next/head';
import { NextSeo } from 'next-seo';

// This would be dynamic - fetching doctor data from database
// For now, showing template structure

export default function DoctorProfile({ doctor }) {
  // SEO: Schema.org for doctor (Physician)
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doctor.name,
    "image": doctor.photoUrl,
    "medicalSpecialty": doctor.specialty,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": doctor.clinicAddress,
      "addressLocality": doctor.city,
      "addressRegion": doctor.region,
      "postalCode": doctor.postalCode,
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": doctor.latitude,
      "longitude": doctor.longitude
    },
    "priceRange": `Rs. ${doctor.consultationFee}`,
    "telephone": doctor.phone,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": doctor.averageRating,
      "reviewCount": doctor.totalReviews,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // SEO: Generate rich meta tags
  const pageTitle = `Dr. ${doctor.name} - ${doctor.specialty} in ${doctor.city} | Book Appointment`;
  const pageDescription = `Book appointment with Dr. ${doctor.name}, ${doctor.specialty} in ${doctor.city}. ${doctor.experience} years experience. ⭐ ${doctor.averageRating}/5 rating from ${doctor.totalReviews} patients. PMDC verified. Fee: Rs. ${doctor.consultationFee}`;

  return (
    <>
      {/* SEO Meta Tags */}
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={`https://yourwebsite.pk/doctor/${doctor.slug}`}
        openGraph={{
          type: 'profile',
          url: `https://yourwebsite.pk/doctor/${doctor.slug}`,
          title: pageTitle,
          description: pageDescription,
          images: [
            {
              url: doctor.photoUrl,
              width: 400,
              height: 400,
              alt: `Dr. ${doctor.name} - ${doctor.specialty}`,
            }
          ],
          profile: {
            firstName: doctor.firstName,
            lastName: doctor.lastName,
          }
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: `${doctor.name}, ${doctor.specialty} ${doctor.city}, best ${doctor.specialty}, doctor ${doctor.city}, ${doctor.specialty} near me`
          }
        ]}
      />

      {/* Structured Data */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
        />
      </Head>

      {/* Main Content */}
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumbs - Important for SEO */}
        <nav aria-label="Breadcrumb" className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="/" className="text-blue-600 hover:underline" itemProp="item">
                  <span itemProp="name">Home</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="/doctors" className="text-blue-600 hover:underline" itemProp="item">
                  <span itemProp="name">Doctors</span>
                </a>
                <meta itemProp="position" content="2" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href={`/doctors/${doctor.city.toLowerCase()}`} className="text-blue-600 hover:underline" itemProp="item">
                  <span itemProp="name">{doctor.city}</span>
                </a>
                <meta itemProp="position" content="3" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-gray-900" itemProp="name">Dr. {doctor.name}</span>
                <meta itemProp="position" content="4" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Doctor Profile Header */}
        <section className="bg-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Doctor Photo */}
              <div className="flex-shrink-0">
                <img
                  src={doctor.photoUrl}
                  alt={`Dr. ${doctor.name} - ${doctor.specialty} in ${doctor.city}`}
                  className="w-48 h-48 rounded-lg object-cover shadow-lg"
                  itemProp="image"
                  width="192"
                  height="192"
                />
              </div>

              {/* Doctor Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    {/* H1 - Most important SEO tag */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-2" itemProp="name">
                      Dr. {doctor.name}
                    </h1>
                    <p className="text-xl text-gray-600 mb-3" itemProp="medicalSpecialty">
                      {doctor.specialty}
                    </p>
                    <p className="text-gray-600 mb-2">
                      {doctor.qualifications}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {doctor.experience} years of experience
                    </p>
                  </div>

                  {/* PMDC Verified Badge */}
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold">
                    ✅ PMDC Verified
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl text-yellow-500">★★★★★</span>
                    <span className="ml-2 text-xl font-bold">{doctor.averageRating}</span>
                  </div>
                  <span className="text-gray-600">
                    ({doctor.totalReviews} patient reviews)
                  </span>
                </div>

                {/* Key Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold">{doctor.clinicName}</p>
                      <p className="text-sm text-gray-600">{doctor.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💰</span>
                    <div>
                      <p className="text-sm text-gray-500">Consultation Fee</p>
                      <p className="font-semibold text-blue-600">Rs. {doctor.consultationFee}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <p className="text-sm text-gray-500">Wait Time</p>
                      <p className="font-semibold">{doctor.avgWaitTime} minutes</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold text-lg">
                    Book Appointment Now
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-semibold">
                    Call Clinic
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Time Slots */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Available Time Slots</h2>
            
            {/* Date selector */}
            <div className="flex gap-2 mb-6 overflow-x-auto">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg whitespace-nowrap">
                Today
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 whitespace-nowrap">
                Tomorrow
              </button>
              {/* More dates... */}
            </div>

            {/* Time slots */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
              <button className="py-3 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-600">
                10:00 AM
              </button>
              <button className="py-3 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-600">
                11:00 AM
              </button>
              <button className="py-3 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-600">
                12:00 PM
              </button>
              {/* More slots... */}
            </div>
          </div>
        </section>

        {/* About Doctor - SEO Content */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">About Dr. {doctor.name}</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                {doctor.bio}
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Education & Qualifications</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {doctor.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">Specializations</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {doctor.specializations.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">Services Offered</h3>
              <div className="flex flex-wrap gap-2">
                {doctor.services.map((service, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Patient Reviews - SEO goldmine! */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Patient Reviews</h2>
            
            {/* Reviews with schema markup */}
            <div itemScope itemType="https://schema.org/Review">
              {doctor.reviews.map((review, index) => (
                <article key={index} className="border-b pb-6 mb-6 last:border-b-0" itemProp="review" itemScope itemType="https://schema.org/Review">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-bold" itemProp="author" itemScope itemType="https://schema.org/Person">
                            <span itemProp="name">{review.patientName}</span>
                          </p>
                          <p className="text-sm text-gray-500">
                            <time dateTime={review.date} itemProp="datePublished">{review.dateFormatted}</time>
                          </p>
                        </div>
                        <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                          <span className="text-yellow-500">
                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                          </span>
                          <meta itemProp="ratingValue" content={review.rating} />
                          <meta itemProp="bestRating" content="5" />
                        </div>
                      </div>
                      <p className="text-gray-700" itemProp="reviewBody">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Clinic Location - Local SEO */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Clinic Location</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">{doctor.clinicName}</h3>
                <p className="text-gray-700 mb-4" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">{doctor.clinicAddress}</span><br />
                  <span itemProp="addressLocality">{doctor.city}</span>, <span itemProp="addressRegion">{doctor.region}</span><br />
                  <span itemProp="addressCountry">Pakistan</span>
                </p>
                <p className="text-gray-700 mb-2">
                  📞 <a href={`tel:${doctor.phone}`} className="text-blue-600 hover:underline">{doctor.phone}</a>
                </p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${doctor.latitude},${doctor.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center"
                >
                  Get Directions →
                </a>
              </div>
              <div>
                {/* Embed Google Map */}
                <div className="aspect-video bg-gray-200 rounded-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${doctor.latitude},${doctor.longitude}`}
                    allowFullScreen
                    loading="lazy"
                    title={`Map showing location of ${doctor.clinicName}`}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Doctors - Internal linking for SEO */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Similar Doctors in {doctor.city}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Show 3 related doctors from same specialty/city */}
            {/* This helps SEO through internal linking */}
          </div>
        </section>
      </main>
    </>
  );
}

// Server-side data fetching (Next.js)
export async function getServerSideProps({ params }) {
  // Fetch doctor data from database based on params.slug
  // This makes the page SEO-friendly as content is rendered on server
  
  const doctor = {
    name: "Sara Khan",
    firstName: "Sara",
    lastName: "Khan",
    slug: "dr-sara-khan-dermatologist-sialkot",
    specialty: "Dermatologist",
    qualifications: "MBBS, FCPS (Dermatology)",
    experience: 8,
    photoUrl: "/images/doctors/dr-sara-khan.jpg",
    city: "Sialkot",
    region: "Punjab",
    postalCode: "51310",
    clinicName: "Clifton Medical Center",
    clinicAddress: "Main Road, Clifton Colony",
    phone: "+92-300-1234567",
    consultationFee: 1000,
    avgWaitTime: 15,
    averageRating: 4.9,
    totalReviews: 85,
    latitude: "32.4945",
    longitude: "74.5229",
    bio: "Dr. Sara Khan is a board-certified dermatologist with 8 years of experience treating various skin conditions...",
    education: [
      "MBBS - King Edward Medical University (2012)",
      "FCPS Dermatology - College of Physicians (2016)",
      "Fellowship - UK Dermatology Board (2018)"
    ],
    specializations: [
      "Acne Treatment",
      "Skin Allergies & Rashes",
      "Hair Loss Treatment",
      "Cosmetic Dermatology",
      "Laser Treatments"
    ],
    services: [
      "Acne Treatment",
      "Chemical Peels",
      "Laser Hair Removal",
      "Botox & Fillers",
      "Skin Allergy Testing"
    ],
    reviews: [
      {
        patientName: "Fatima Ahmed",
        rating: 5,
        date: "2026-02-23",
        dateFormatted: "February 23, 2026",
        comment: "Excellent doctor! Very patient and thorough. My acne improved significantly after following her treatment plan."
      },
      // More reviews...
    ]
  };

  return {
    props: {
      doctor
    }
  };
}
