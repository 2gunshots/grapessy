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
    const optimizedUrl = url.replace("/upload/", "/upload/vc_h264/");

    useEffect(() => {
        const vid = videoRef.current;
        if (!vid) return;

        setIsLoaded(false);

        // Already has data (cached)
        if (vid.readyState >= 2) {
            setIsLoaded(true);
            return;
        }

        // Safari iOS sometimes only fires loadedmetadata, not loadeddata
        const handleReady = () =>
            requestAnimationFrame(() => setIsLoaded(true));
        vid.addEventListener("loadeddata", handleReady);
        vid.addEventListener("loadedmetadata", handleReady);

        // Fallback: if nothing fires in 2s, show it anyway
        const timeout = setTimeout(() => setIsLoaded(true), 2000);

        return () => {
            vid.removeEventListener("loadeddata", handleReady);
            vid.removeEventListener("loadedmetadata", handleReady);
            clearTimeout(timeout);
        };
    }, [url]);

    if (hasError)
        return (
            <div
                style={{ aspectRatio: width / height }}
                className="w-full h-full bg-muted"
            >
                has error
            </div>
        );

    return (
        <div
            style={{ aspectRatio: width / height }}
            className="hidden md:block w-full h-full relative overflow-hidden bg-foreground "
        >
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
                src={optimizedUrl}
                preload="auto"
                autoPlay
                muted
                playsInline
                loop
                // onLoadedData={() => requestAnimationFrame(() => setIsLoaded(true))}
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
