"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: "cover" | "contain";
  priority?: boolean;
  sizes?: string;
}

export function ImageWithSkeleton({
  src,
  alt,
  fill,
  width,
  height,
  className,
  objectFit = "cover",
  priority = false,
  sizes,
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", fill && "h-full w-full")}>
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse bg-surface-elevated"
          aria-hidden="true"
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={cn(
          objectFit === "contain" ? "object-contain" : "object-cover",
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setLoaded(true)}
        priority={priority}
        sizes={sizes}
        loading={priority ? undefined : "lazy"}
      />
    </div>
  );
}
