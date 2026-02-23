export default function ContactPage() {
  return (
    <main>
      <section className="bg-gray-900 text-white py-20 px-6">
        <h1 className="max-w-7xl mx-auto text-5xl font-serif">
          Contact
        </h1>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-gray-700 mb-8">
          To help us best serve your inquiry, we recommend that you first
          describe the issue you’re having before telling us what you want
          to achieve. You may also email or call us to make an appointment.
          Our general response time is two business days.
        </p>

        <form className="space-y-6">
          <input className="w-full border p-3" placeholder="First Name" />
          <input className="w-full border p-3" placeholder="Last Name" />
          <input className="w-full border p-3" placeholder="Email" />
          <textarea
            className="w-full border p-3 h-40"
            placeholder="Message"
          />
          <button className="bg-gray-900 text-white px-8 py-3">
            Submit
          </button>
        </form>

        <div className="mt-12 text-gray-700 space-y-2">
          <p>(310) 727-3507</p>
          <p>1600 Rosecrans Ave., Media Center, 4th Floor</p>
          <p>Manhattan Beach, CA 90266</p>
        </div>
      </section>
    </main>
  );
}