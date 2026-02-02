export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-4">
              Your Trusted Partner in <br /> Mobile Home Sales
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl mb-6">
              EverTrust Realty provides high-quality mobile homes with reliable
              nationwide delivery across the USA and Canada.
            </p>

            <div className="flex gap-4 flex-wrap">
  {/* Scroll Button */}
  <a 
    href="#featured-homes" 
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
  >
    View Available Homes
  </a>

  {/* SMS Button - Replace with your real number */}
  <a 
    href="sms:+13022301063?body=Hi, I would like to request a quote." 
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
  >
    Request a Quote
  </a>
</div>
            </div>
          </div>
          
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-4 items-center">
          
          {/* TEXT */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Who We Are
            </h2>

            <div className="w-12 h-1 bg-green-600 mb-4"></div>

            <p className="text-sm sm:text-base text-gray-700 mb-3">
              EverTrust Realty is a trusted mobile home sales company serving
              customers across the United States and Canada.
            </p>

            <p className="text-sm sm:text-base text-gray-700 mb-5">
              Our mission is to provide affordable, high-quality housing with
              honesty, transparency, and dependable service.
            </p>

            <a
              href="/about"
              className="inline-block bg-green-600 text-white px-5 py-2 rounded-md font-semibold text-sm"
            >
              Learn More About Us
            </a>
          </div>

          {/* IMAGE — ALWAYS SIDE */}
          <div className="relative h-[200px] sm:h-[260px] md:h-[360px] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/who-we-are.jpg"
              alt="EverTrust Realty Team"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>
{/* ================= WHAT WE DO ================= */}
<section className="bg-gray-50 py-14">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
        What We Do
      </h2>
      <div className="w-16 h-1 bg-green-600 mx-auto mt-3"></div>
      <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
        We make buying a mobile home simple, affordable, and stress-free.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
  <span className="inline-block border-b-2 border-green-600 pb-1">
    Mobile Home Sales
  </span>
</h3>
        <p className="text-gray-600 text-sm">
          Browse quality mobile homes across the USA and Canada.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
  <span className="inline-block border-b-2 border-green-600 pb-1">
    Nationwide Delivery
  </span>
</h3>

        <p className="text-gray-600 text-sm">
          Safe and reliable delivery handled from start to finish.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
       <h3 className="text-lg font-semibold text-gray-900 mb-2">
  <span className="inline-block border-b-2 border-green-600 pb-1">
    Trusted Guidance
  </span>
</h3>

        <p className="text-gray-600 text-sm">
          Transparent pricing and expert support every step of the way.
        </p>
      </div>

    </div>

  </div>
</section>
{/* ================= FEATURED HOMES ================= */}
<section
id="featured-homes"
className="bg-white py-10 sm:py-14 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Header */}
    <div className="text-center mb-10 sm:mb-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
        Featured Homes
      </h2>

      <div className="w-14 h-1 bg-green-600 mx-auto mt-3 mb-4 rounded-full" />

      <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
        Explore some of our most popular mobile homes available nationwide.
      </p>
    </div>

    {/* Homes Grid */}
   {/* Replace your existing Featured Homes grid with this entire block */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
  {/* Card 1: CM6622L */}
  <button
  className="
    absolute left-2 top-1/2 -translate-y-1/2
    bg-black/60 text-white
    p-2 rounded-full
    opacity-100 sm:opacity-0 sm:group-hover:opacity-100
    z-10
  "
>
  ‹
</button>

<button
  className="
    absolute right-2 top-1/2 -translate-y-1/2
    bg-black/60 text-white
    p-2 rounded-full
    opacity-100 sm:opacity-0 sm:group-hover:opacity-100
    z-10
  "
>
  ›
</button>

  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
    <div className="relative h-[220px]">
      <img src="/images/cm6622l/cm6622-1.jpg" alt="CM6622L" className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">$70,000</div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-1">Mobile Home for Sale – CM6622L</h3>
      <p className="text-sm text-gray-500 font-medium mb-3">Spacious 2-bedrooms, 2-bathrooms</p>
      <div className="space-y-2 mb-6 flex-grow">
        <p className="text-gray-600 text-sm">✅ Delivery and setup available</p>
        <p className="text-gray-600 text-sm">✅ Flexible payment plans offered</p>
        <p className="text-gray-600 text-sm font-semibold text-green-700">💰 Only 10% down payment required</p>
      </div>
      <div className="flex flex-col gap-3 mt-auto">
        <a href="/homes/cm6622l" className="text-center bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-black transition-colors">View Details</a>
       
      </div>
    </div>
  </div>

  {/* Card 2: RC2758 */}
  <button
  className="
    absolute left-2 top-1/2 -translate-y-1/2
    bg-black/60 text-white
    p-2 rounded-full
    opacity-100 sm:opacity-0 sm:group-hover:opacity-100
    z-10
  "
>
  ‹
</button>

<button
  className="
    absolute right-2 top-1/2 -translate-y-1/2
    bg-black/60 text-white
    p-2 rounded-full
    opacity-100 sm:opacity-0 sm:group-hover:opacity-100
    z-10
  "
>
  ›
</button>

  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
    <div className="relative h-[220px]">
      <img src="/images/rc2758/rc2758-1.jpg" alt="RC2758" className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">$150,000</div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-1">Mobile Home for Sale – RC2758</h3>
      <p className="text-sm text-gray-500 font-medium mb-3">Spacious 3-bedroom, 3-bathroom</p>
      <div className="space-y-2 mb-6 flex-grow">
        <p className="text-gray-600 text-sm">✅ Delivery and setup available</p>
        <p className="text-gray-600 text-sm">✅ Flexible payment plans offered</p>
        <p className="text-gray-600 text-sm font-semibold text-green-700">💰 Only 10% down payment required</p>
      </div>
      <div className="flex flex-col gap-3 mt-auto">
        <a href="/homes/rc2758" className="text-center bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-black transition-colors">View Details</a>
       
      </div>
    </div>
  </div>

  {/* Card 3: La Jolla */}
  <button
  className="
    absolute left-2 top-1/2 -translate-y-1/2
    bg-black/60 text-white
    p-2 rounded-full
    opacity-100 sm:opacity-0 sm:group-hover:opacity-100
    z-10
  "
>
  ‹
</button>

<button
  className="
    absolute right-2 top-1/2 -translate-y-1/2
    bg-black/60 text-white
    p-2 rounded-full
    opacity-100 sm:opacity-0 sm:group-hover:opacity-100
    z-10
  "
>
  ›
</button>

  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
    <div className="relative h-[220px]">
      <img src="/images/la-jolla/la-jolla-1.jpg" alt="La Jolla" className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">$185,000</div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-1">Mobile Home for Sale – La Jolla</h3>
      <p className="text-sm text-gray-500 font-medium mb-3">Spacious 4-bedroom, 3-bathroom</p>
      <div className="space-y-2 mb-6 flex-grow">
        <p className="text-gray-600 text-sm">✅ Delivery and setup available</p>
        <p className="text-gray-600 text-sm">✅ Flexible payment plans offered</p>
        <p className="text-gray-600 text-sm font-semibold text-green-700">💰 Only 10% down payment required</p>
      </div>
      <div className="flex flex-col gap-3 mt-auto">
        <a href="/homes/la-jolla" className="text-center bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-black transition-colors">View Details</a>
        
      </div>
    </div>
  </div>

</div>

  </div>
</section>
{/* WHY CHOOSE EVERTRUST REALTY */}
<section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
      Why Choose EverTrust Realty
    </h2>

    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
      We make owning a mobile home simple, affordable, and stress-free.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Nationwide Delivery
        </h3>
        <p className="text-gray-600 text-sm">
          Homes delivered and professionally set up anywhere in the USA.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Flexible Financing
        </h3>
        <p className="text-gray-600 text-sm">
          Low down payments with plans that fit your budget.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Trusted Quality
        </h3>
        <p className="text-gray-600 text-sm">
          High-quality homes from trusted manufacturers.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Dedicated Support
        </h3>
        <p className="text-gray-600 text-sm">
          Our team guides you from selection to move-in.
        </p>
      </div>

    </div>
  </div>
</section>
{/* HOW IT WORKS */}
<section className="py-20">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">
      How It Works
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {[
        { step: "1", title: "Choose a Home", text: "Browse our selection and pick the home that fits your needs." },
        { step: "2", title: "Apply for Financing", text: "Simple approval process with as little as 10% down." },
        { step: "3", title: "Delivery & Setup", text: "We deliver and professionally set up your home." },
        { step: "4", title: "Move In", text: "Enjoy your new home with peace of mind." },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
            {item.step}
          </div>
          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* ================= TESTIMONIALS ================= */}
<section className="bg-gray-50 py-14">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
        What Our Customers Say
      </h2>
      <div className="w-16 h-1 bg-green-600 mx-auto mt-3"></div>
      <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
        Trusted by families across the USA and Canada.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Testimonial */}
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
        {/* Stars */}
        <div className="flex gap-1 text-yellow-400 mb-3">
          ★★★★★
        </div>

        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          EverTrust Realty made buying our mobile home simple and stress-free.
          The team was honest, professional, and very helpful.
        </p>

        <div className="text-sm font-semibold text-gray-900">
          — Sarah M.
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="flex gap-1 text-yellow-400 mb-3">
          ★★★★★
        </div>

        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          Delivery was smooth and exactly as promised. I highly recommend
          EverTrust Realty to anyone looking for quality homes.
        </p>

        <div className="text-sm font-semibold text-gray-900">
          — James R.
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="flex gap-1 text-yellow-400 mb-3">
          ★★★★★
        </div>

        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          Affordable pricing, flexible payments, and amazing support from
          start to finish.
        </p>

        <div className="text-sm font-semibold text-gray-900">
          — Linda K.
        </div>
      </div>

    </div>
  </div>
</section>
{/* ================= FLOATING TEXT US BUTTON ================= */}
<a
  href="sms:+13022301063"
  className="fixed bottom-5 right-5 z-50 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold transition"
>
 💬 Chat With Us

</a>

    </main>
  );
}