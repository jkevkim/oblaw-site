export default function LocationsPage() {
  return (
    <main>
      <section className="bg-gray-900 text-white py-20 px-6">
        <h1 className="max-w-7xl mx-auto text-5xl font-serif">
          Location
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-serif mb-4">Office Address</h2>
          <p className="text-gray-700 leading-relaxed">
            1600 Rosecrans Ave., Media Center, 4th Floor<br />
            Manhattan Beach, CA 90266
          </p>

          <div className="mt-8 bg-gray-200 h-64 flex items-center justify-center">
            Office Photo Placeholder
          </div>
        </div>

        <div className="w-full h-[400px]">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            src="https://www.google.com/maps?q=1600+Rosecrans+Ave+Manhattan+Beach+CA&output=embed"
          />
        </div>
      </section>
    </main>
  );
}