import Image from "next/image";
import type { SiteImage } from "@/content/images";
type MediaFrameProps = {
  image: SiteImage;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function MediaFrame({
  image,
  sizes,
  priority = false,
  className,
  imageClassName = "object-cover",
}: MediaFrameProps) {
  return (
    <div className={className}>
      <div className="relative h-full overflow-hidden bg-mist">
        <span className="absolute top-0 left-0 z-10 h-full w-0.5 bg-signal" aria-hidden="true" />
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClassName}
        />
      </div>
    </div>
  );
}
