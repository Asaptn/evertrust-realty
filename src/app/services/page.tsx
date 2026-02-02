export default function ServicesPage() {
  return (
    <main className="bg-gray-300 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <h1 className="text-4xl font-bold text-green-700 mb-10">
          Our Services
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              New & Pre-Owned Mobile Homes
            </h2>
            <p>
              A wide selection of quality-inspected mobile homes to fit every
              budget and lifestyle.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              Nationwide & Canada-Wide Delivery
            </h2>
            <p>
              Reliable transportation and delivery across the USA and Canada.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              Setup & Installation Support
            </h2>
            <p>
              Professional setup services to ensure your home is move-in ready.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              Financing Assistance
            </h2>
            <p>
              Helping you explore flexible financing options that fit your needs.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
