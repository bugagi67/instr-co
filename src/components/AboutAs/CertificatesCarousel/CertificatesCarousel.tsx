import React, { useRef, useEffect, useState } from "react";
import styles from "./CertificatesCarousel.module.css";

type Props = {
    images: string[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
};

export const CertificatesCarousel: React.FC<Props> = ({ images, autoPlay = true, autoPlayInterval = 4000 }) => {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [isHover, setIsHover] = useState(false);
    const [modalSrc, setModalSrc] = useState<string | null>(null);

    const scrollNext = () => {
        const el = trackRef.current;
        if (!el) return;
        const step = el.clientWidth;
        el.scrollBy({ left: step, behavior: "smooth" });
    };

    const scrollPrev = () => {
        const el = trackRef.current;
        if (!el) return;
        const step = el.clientWidth;
        el.scrollBy({ left: -step, behavior: "smooth" });
    };

    useEffect(() => {
        if (!autoPlay) return;
        const id = setInterval(() => {
            if (!isHover) scrollNext();
        }, autoPlayInterval);
        return () => clearInterval(id);
    }, [isHover, autoPlay, autoPlayInterval]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setModalSrc(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <>
            <div className={styles.carousel} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <button className={styles.btn} onClick={scrollPrev} aria-label="Предыдущий">
                    ‹
                </button>
                <div className={styles.track} ref={trackRef}>
                    {images.map((src, i) => (
                        <div
                            className={styles.item}
                            key={`${src}-${i}`}
                            onClick={() => setModalSrc(src)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === "Enter") setModalSrc(src); }}
                            style={{ cursor: "pointer" }}
                        >
                            <img src={src} alt={`Сертификат ${i + 1}`} loading="lazy" />
                        </div>
                    ))}
                </div>
                <button className={styles.btn} onClick={scrollNext} aria-label="Следующий">
                    ›
                </button>
            </div>

            {modalSrc && (
                <div
                    role="dialog"
                    aria-modal="true"
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000,
                    }}
                    onClick={() => setModalSrc(null)}
                >
                    <div
                        style={{
                            position: "relative",
                            maxWidth: "90vw",
                            maxHeight: "90vh",
                            width: "auto",
                            height: "auto",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setModalSrc(null)}
                            aria-label="Закрыть"
                            style={{
                                position: "absolute",
                                top: -12,
                                right: -12,
                                background: "#fff",
                                border: "none",
                                borderRadius: "50%",
                                width: 36,
                                height: 36,
                                cursor: "pointer",
                                fontSize: 18,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            ✕
                        </button>
                        <img
                            src={modalSrc}
                            alt="Просмотр сертификата"
                            style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: 6, display: "block" }}
                        />
                    </div>
                </div>
            )}
        </>
    );
};