"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + images.length) % images.length);
    },
    [images.length]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  if (images.length === 0) return null;

  const currentImage = images[current];

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface-elevated">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <a
              href={currentImage}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full cursor-zoom-in"
              aria-label={`Open ${title} screenshot ${current + 1} in new tab`}
            >
              <ImageWithSkeleton
                src={currentImage}
                alt={`${title} — screenshot ${current + 1}`}
                fill
                objectFit="contain"
                priority={current === 0}
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </a>
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div
          className="flex gap-3 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Gallery thumbnails"
        >
          {images.map((image, index) => (
            <button
              key={image}
              role="tab"
              aria-selected={index === current}
              aria-label={`View screenshot ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 bg-surface-elevated transition-all duration-200",
                index === current
                  ? "border-accent shadow-lg shadow-accent/20"
                  : "border-border opacity-60 hover:opacity-100"
              )}
            >
              <ImageWithSkeleton
                src={image}
                alt=""
                fill
                objectFit="contain"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
