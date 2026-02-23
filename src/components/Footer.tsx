import { Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="text-white mb-3">Olsen & Brueggerman, APC.</h4>
          <p className="text-sm">
            Attorney Advertising. Prior results do not guarantee
            a similar outcome.
          </p>
        </div>

        <div>
          <h4 className="text-white mb-3">Location(s)</h4>
          <p className="text-sm">Los Angeles · San Diego · San Francisco</p>
        </div>

        <div>
          <h4 className="text-white mb-3">Contact</h4>
          <p className="text-sm">(310) 727-3507</p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Link
            href="https://www.linkedin.com/company/olsen-brueggemann-apc/"
            target="_blank"
            aria-label="Visit Olsen & Brueggemann LinkedIn"
            className="hover:opacity-80 transition"
          >
            <Linkedin size={28} />
          </Link>
        </div>
      </div>
    </footer>
  );
}