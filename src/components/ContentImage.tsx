type ContentImageProps = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

export default function ContentImage({
  src,
  alt,
  className = "",
  eager = false,
}: ContentImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`h-full w-full rounded-xl object-cover transition-transform duration-500 ease-out hover:scale-[1.03] ${className}`}
    />
  );
}
