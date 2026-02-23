import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HeroSlideshow />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl mb-10">Practice Areas</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Civil Litigation",
            "Employment Law",
            "Construction Law",
            "Insurance Defense",
            "Product Liability",
            "Professional Liability",
          ].map(area => (
            <div
              key={area}
              className="border p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl mb-2">{area}</h3>
              <p className="text-sm text-gray-600">
                Experienced counsel with a results-driven approach.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
