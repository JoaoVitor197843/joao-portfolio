"use client"
import { useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

const ScrollObserver = (setActive: Dispatch<SetStateAction<string>>) => useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id)
                }
            })
        },
        {threshold: 0.5}
    );

    document.querySelectorAll('div[id]').forEach((div) => {
        observer.observe(div)
    });
    return () => observer.disconnect()
}, [setActive])

export default ScrollObserver