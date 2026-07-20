interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const mainImage = images[0] ?? '/src/assets/hero-illustration.svg';

  return (
    <div className="space-y-4">
      <img src={mainImage} alt={name} className="h-[380px] w-full rounded-[28px] object-cover shadow-lg" loading="eager" />
      <div className="grid grid-cols-3 gap-3">
        {images.map((image) => (
          <img key={image} src={image} alt={`${name} visual`} className="h-24 w-full rounded-[18px] object-cover" loading="lazy" />
        ))}
      </div>
    </div>
  );
}
