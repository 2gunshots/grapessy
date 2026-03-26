"use client";
import { useState, useEffect, memo, useRef } from "react";
import { Blurhash } from "react-blurhash";

function ProgressiveVideo({
    url,
    blurhash,
    width,
    height,
    alt = "Resort Media",
}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const videoRef = useRef(null);

    useEffect(() => {
        setIsLoaded(false);
        if (videoRef.current?.readyState >= 2) {
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

            <video
                ref={videoRef}
                src={url}
                alt={alt}
                preload="auto"
                autoPlay
                muted
                playsInline
                loop
                onLoadedData={() =>
                    requestAnimationFrame(() => setIsLoaded(true))
                }
                // onCanPlay={() => {
                //     requestAnimationFrame(() => {
                //         setIsLoaded(true);
                //     });
                // }}
                onError={() => {
                    setHasError(true);
                    setIsLoaded(true);
                }}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 will-change-opacity ${
                    isLoaded ? "opacity-100" : "opacity-[0.01]"
                }`}
            />
        </div>
    );
}
export default memo(ProgressiveVideo);
