import * as React from "react";
import Link from "next/link";

// interface EmailTemplateProps {
//   firstName: string;
// }

export function EmailTemplate() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center border border-gray-100">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Welcome, <span className="text-primary">Hubbbba!</span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
          This is a test email template built using Tailwind CSS. It’s fully
          responsive and designed to look good on any device.
        </p>

        <Link
          href="#"
          className="inline-block bg-primary text-white px-5 py-2.5 rounded-lg text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors duration-300"
        >
          Get Started
        </Link>

        <p className="text-xs text-gray-400 mt-6">
          © 2025 Hubbbba. All rights reserved.
        </p>
      </div>
    </div>
  );
}
