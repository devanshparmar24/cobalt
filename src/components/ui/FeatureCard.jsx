import Image from "next/image";

export default function FeatureCard({
  image,
  alt,
  title,
  description,
  colSpan = "md:col-span-2",
  imageHeight = "h-44 md:h-40",
  className = "",
}) {
  return (
    <div
      className={`${colSpan} bg-gradient-to-b from-[#000000] to-[#00000010] 
                  rounded-2xl p-6 border border-white/5 
                  hover:border-white/10 transition 
                  flex flex-col ${className}`}
    >
      {/* Image */}
      <div className={`${imageHeight} mb-6 overflow-hidden rounded-xl`}>
        <Image
          src={image}
          alt={alt}
          width={800}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-medium">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-white/60 text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
}