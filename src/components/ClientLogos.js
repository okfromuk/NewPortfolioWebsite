import React from "react";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4f/TCS_New_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e3/Cognizant_Logo_2022.svg"
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white" id="clients">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Clients & Companies</h2>
        <div className="flex justify-center flex-wrap gap-8 items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Client Logo"
              className="h-12 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}