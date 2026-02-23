export default function FirmPage() {
  return (
    <main>
      {/* Banner */}
      <section className="relative bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-serif max-w-4xl">
            Offering Multi-Industry Litigation and Transactional Support
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        {/* Text */}
        <div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Olsen & Brueggemann represents clients in numerous industries
            ranging from construction and real estate to startups and
            entertainment.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Anchored by a team of experienced practitioners, we offer
            clients next-level litigation support and peace of mind in
            navigating complex business obstacles.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="bg-gray-200 h-80 md:h-full flex items-center justify-center">
          <span className="text-gray-500 text-sm">
            Image Placeholder
          </span>
        </div>
      </section>
    </main>
  );
}