export default function Testimonial() {

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Product Manager",
            review:
                "This dashboard completely transformed how we track our analytics. Clean, fast and intuitive.",
        },
        {
            name: "Michael Chen",
            role: "Founder, SaaSFlow",
            review:
                "The UI feels premium. The gradient typography and layout are incredibly well crafted.",
        },
        {
            name: "Emily Rodriguez",
            role: "UX Designer",
            review:
                "Performance is amazing and the design language feels modern and scalable.",
        },
    ];

    return (


        <section className="py-20 sm:py-24 md:py-28 px-6 bg-[#09090B] text-white">
            <div className="max-w-7xl mx-auto">

                <h2 className="
      text-3xl sm:text-4xl md:text-5xl 
      font-semibold text-center leading-tight mb-12
      bg-gradient-to-b from-[#F4F4F5] to-[#52525B]
      bg-clip-text text-transparent
    ">
                    What People Are Saying
                </h2>

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="
            flex flex-col justify-between
            bg-gradient-to-b from-[black] to-[#0001]
            border border-white/5
            rounded-2xl p-6
            hover:border-white/10
            transition duration-300
          "
                        >
                            <p className="text-white/60 mb-6 leading-relaxed">
                                “{item.review}”
                            </p>

                            <div>
                                <h4 className="font-semibold text-white">
                                    {item.name}
                                </h4>
                                <p className="text-sm text-white/40">
                                    {item.role}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}