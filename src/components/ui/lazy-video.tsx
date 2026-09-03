"use client";

import { useRef, useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

interface LazyVideoProps {
    src: string;
}

export function LazyVideo({ src }: LazyVideoProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <Box
            ref={containerRef}
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
        >
            {isVisible ? (
                <video
                    src={src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="none"
                    {...{ loading: "lazy" } as any}
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                />
            ) : null}
        </Box>
    );
}
