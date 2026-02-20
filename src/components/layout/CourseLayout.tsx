"use client";

import React, { useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { CourseProvider } from "@/lib/course-context";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { courseData } from "@/lib/data/course-data";

export function CourseLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const allLessons = courseData.modules.flatMap((m) =>
        m.lessons.map((l) => ({
            ...l,
            moduleSlug: m.slug,
        }))
    );

    const currentIndex = allLessons.findIndex((l) =>
        pathname.includes(`/course/${l.moduleSlug}/${l.slug}`)
    );

    const handleKeyNavigation = useCallback(
        (e: KeyboardEvent) => {
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

            if (e.altKey && e.key === "ArrowRight" && currentIndex < allLessons.length - 1) {
                const next = allLessons[currentIndex + 1];
                router.push(`/course/${next.moduleSlug}/${next.slug}`);
            } else if (e.altKey && e.key === "ArrowLeft" && currentIndex > 0) {
                const prev = allLessons[currentIndex - 1];
                router.push(`/course/${prev.moduleSlug}/${prev.slug}`);
            }
        },
        [currentIndex, allLessons, router]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyNavigation);
        return () => window.removeEventListener("keydown", handleKeyNavigation);
    }, [handleKeyNavigation]);

    return (
        <CourseProvider>
            <div className="min-h-screen bg-gray-950">
                <Sidebar />
                <TopBar />
                <main className="pt-14 transition-all lg:pl-[320px]">
                    <div className="max-w-5xl mx-auto p-6">{children}</div>
                </main>
            </div>
        </CourseProvider>
    );
}
