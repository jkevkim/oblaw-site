export default function PracticeAreasPage() {
  const areas = [
    {
      id: "commercial-litigation",
      title: "Commercial Litigation",
      text: `Our team is comprised of firmly established litigators. We harness this expertise to help clients through even the most complex of civil litigation matters, including the defense of personal injury, employment, and breach of contract claims.
            From the start of a legal proceeding through to its resolution, Olsen & Brueggemann will fight for your business so that it can continue to thrive.`,
    },
    {
      id: "business-corporate-law",
      title: "Business and Corporate Law",
      text: `We aim to minimize risk for our clients and work relentlessly to provide creative solutions to the most pressing transactional and regulatory matters.
            Are you looking to expand your business, revise its policies, or break into a new industry? Let Olsen & Brueggemann’s experts guide you.`,
    },
    {
      id: "employment",
      title: "Employment",
      text: `Olsen & Brueggemann represent, advise and counsel clients in connection with employment claims. We regularly provide compliance and strategic planning advice to employment clients.`,
    },
    {
      id: "entertainment",
      title: "Entertainment",
      text: `The entertainment industry is ever-changing and so are the laws and practices that govern it. We anticipate risk and liability so that you can focus on creating.`,
    },
    {
      id: "startups",
      title: "Startups",
      text: `We pride ourselves on our entrepreneurial spirit and work together with clients to help them realize their dream enterprise.`,
    },
    {
      id: "real-estate",
      title: "Real Estate",
      text: `Real estate can present complex issues for businesses of all sizes. Our lawyers provide guidance in commercial real estate transactions and due diligence.`,
    },
  ];

  return (
    <main>
      <section className="bg-gray-900 text-white py-20 px-6">
        <h1 className="max-w-7xl mx-auto text-5xl font-serif">
          Practice Areas
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        {areas.map((a) => (
          <div 
            key={a.id}
            id={a.id} 
            className="grid md:grid-cols-2 gap-10"
          >
              <div>
                <h2 className="text-2xl font-serif mb-4">{a.title}</h2>
                <p className="text-gray-700 whitespace-pre-line">{a.text}</p>
              </div>
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                Image Placeholder
              </div>
          </div>
        ))}
      </section>
    </main>
  );
}