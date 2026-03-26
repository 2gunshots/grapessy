"use client";
import { useState, useEffect, memo, useRef } from "react";
import { Blurhash } from "react-blurhash";

function ProgressiveImage({
    url,
    blurhash,
    width,
    height,
    optimize = true,
    alt = "Resort Media",
}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const optimizedUrl =
        optimize ? url.replace("/upload/", "/upload/f_auto,q_auto,w_800/") : url;

    const imgRef = useRef(null);

    useEffect(() => {
        setIsLoaded(false);
        setHasError(false);
        if (imgRef.current?.complete) {
            setIsLoaded(true);
        }
    }, [url]);

    if (hasError)
        return (
            <div
                style={{ aspectRatio: width / height }}
                className="w-full h-full bg-muted"
            />
        );

    return (
        <div
            style={{ aspectRatio: width / height }}
            className="w-full h-full relative overflow-hidden bg-foreground"
        >
            {/* Blurhash placeholder */}
            {!isLoaded && blurhash != null && (
                <Blurhash
                    style={{ width: "100%", height: "100%" }}
                    hash={blurhash}
                    resolutionX={40}
                    resolutionY={40}
                    punch={1.2}
                    className="absolute inset-0 w-full h-full blur-xl scale-110"
                />
            )}
            <img
                ref={imgRef}
                src={optimizedUrl}
                // srcSet={srcSet}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                aria-label={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => {
                    requestAnimationFrame(() => {
                        setIsLoaded(true);
                    });
                }}
                onError={() => {
                    setHasError(true);
                    setIsLoaded(true);
                }}
                // crossOrigin="anonymous"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 will-change-opacity ${
                    isLoaded ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );
}
export default memo(ProgressiveImage);
