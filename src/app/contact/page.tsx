export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-300 pt-28 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Contact EverTrust Realty
        </h1>
        <p className="text-gray-600 mb-8">
          Have questions about a mobile home or financing options? Fill out the
          form below and we’ll get back to you shortly.
        </p>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3
                         text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3
                         text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3
                       text-gray-900 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            rows={5}
            placeholder="Tell us what you're looking for..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3
                       text-gray-900 placeholder-gray-400 resize-none
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3
                       rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 border-t pt-6 text-sm text-gray-700 space-y-2">
          <p>📞 Phone: (302) 230-1063</p>
          <p>📧 Email: info@evertrustrealty.com</p>
        </div>
      </div>
    </main>
  );
}
