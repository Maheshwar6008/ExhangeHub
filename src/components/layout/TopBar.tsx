"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu,
    Home,
    ChevronRight,
    ChevronLeft,
    Settings,
} from "lucide-react";
import { courseData } from "@/lib/data/course-data";
import { useCourse } from "@/lib/course-context";

export function TopBar() {
    const pathname = usePathname();
    const { trainerMode, setTrainerMode, sidebarOpen, setSidebarOpen } = useCourse();

    const currentModule = courseData.modules.find((m) =>
        pathname.includes(`/course/${m.slug}/`)
    );
    const currentLesson = currentModule?.lessons.find((l) =>
        pathname.includes(`/${l.slug}`)
    );

    // Get flat list of all lessons for prev/next navigation
    const allLessons = courseData.modules.flatMap((m) =>
        m.lessons.map((l) => ({
            ...l,
            moduleSlug: m.slug,
            moduleTitle: m.title,
        }))
    );

    const currentIndex = allLessons.findIndex(
        (l) => l.slug === currentLesson?.slug && l.moduleSlug === currentModule?.slug
    );

    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

    return (
        <header
            className={`fixed top-0 right-0 z-30 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800 transition-all ${sidebarOpen ? "left-[320px]" : "left-0"
                }`}
        >
            <div className="flex items-center justify-between h-14 px-4">
                {/* Left side */}
                <div className="flex items-center gap-2 min-w-0">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                    <Link href="/" className="p-2 text-gray-400 hover:text-white">
                        <Home className="w-4 h-4" />
                    </Link>
                    {currentModule && (
                        <>
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-400 hidden sm:inline truncate">
                                {currentModule.title}
                            </span>
                        </>
                    )}
                    {currentLesson && (
                        <>
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-white truncate max-w-[200px]">
                                {currentLesson.title}
                            </span>
                        </>
                    )}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2">
                    {/* Prev/Next navigation */}
                    {prevLesson && (
                        <Link
                            href={`/course/${prevLesson.moduleSlug}/${prevLesson.slug}`}
                            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800"
                            title="Previous lesson"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Link>
                    )}
                    {nextLesson && (
                        <Link
                            href={`/course/${nextLesson.moduleSlug}/${nextLesson.slug}`}
                            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800"
                            title="Next lesson"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    )}

                    {/* Trainer mode toggle */}
                    <button
                        onClick={() => setTrainerMode(!trainerMode)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all ${trainerMode
                            ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                            : "text-gray-400 hover:text-white hover:bg-gray-800"
                            }`}
                    >
                        <Settings className="w-4 h-4" />
                        <span className="hidden sm:inline">Trainer Mode</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
