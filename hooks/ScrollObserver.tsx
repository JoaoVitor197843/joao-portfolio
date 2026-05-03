"use client"
import { useEffect } from "react";
import type { Dispatch, SetStateAction, RefObject } from "react";

const useScrollObserver = (setActive: Dispatch<SetStateAction<string>>, isScrolling: RefObject<boolean>) => useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isScrolling?.current) {
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
}, [setActive, isScrolling])

export default useScrollObserver