export default function AttorneysPage() {
  const attorneys = Array.from({ length: 6 }).map((_, i) => ({
    name: `Attorney ${i + 1}`,
    text: "Experienced litigator focused on client outcomes and strategic solutions.",
  }));

  return (
    <main>
      <section className="bg-gray-900 text-white py-20 px-6">
        <h1 className="max-w-7xl mx-auto text-5xl font-serif">
          Attorneys
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        {attorneys.map((a) => (
          <div key={a.name} className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              Photo
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-serif mb-3">{a.name}</h2>
              <p className="text-gray-700">{a.text}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
