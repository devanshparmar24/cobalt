'use client'
import Form from "../ui/Form";
export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#09090B] pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden">

      {/* Subtle dashboard glow */}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <div className="w-40 h-px bg-white/10 mx-auto mb-16" />

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight bg-gradient-to-b from-[#F4F4F5] to-[#52525B] bg-clip-text text-transparent">
          See where financial automation can
          <br className="hidden sm:block"/>
          take your business.
        </h2>

        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          The first financial tool you'll love. And the last one you'll ever need.
        </p>

        <div className="mt-10 flex justify-center">
          <Form />
        </div>

      </div>
    </section>
  );
}