"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    ChevronRight,
    Check,
    Shield,
    Tags,
    ShieldAlert,
    Cog,
    BarChart3,
    BookOpen,
    Search,
    GraduationCap,
    X,
    KeyRound,
    Users,
    UserCheck,
    ShieldCheck,
    RefreshCw,
    AppWindow,
    Globe,
    Monitor,
    Settings,
    Mail,
    ArrowLeftRight,
    Truck,
    FolderOpen,
    Map,
} from "lucide-react";
import { courseData } from "@/lib/data/course-data";
import { useCourse } from "@/lib/course-context";

const iconMap: Record<string, React.ElementType> = {
    Shield,
    Tags,
    ShieldAlert,
    Cog,
    BarChart3,
    BookOpen,
    KeyRound,
    Users,
    UserCheck,
    ShieldCheck,
    RefreshCw,
    AppWindow,
    Globe,
    Monitor,
    Settings,
    Mail,
    ArrowLeftRight,
    Truck,
    FolderOpen,
    Map,
};

export function Sidebar() {
    const pathname = usePathname();
    const { completedLessons, searchQuery, setSearchQuery, searchResults, sidebarOpen, setSidebarOpen } = useCourse();
    const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set(courseData.modules.map(m => m.id)));

    const toggleModule = (moduleId: string) => {
        setExpandedModules((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(moduleId)) {
                newSet.delete(moduleId);
            } else {
                newSet.add(moduleId);
            }
            return newSet;
        });
    };

    const getModuleProgress = (moduleId: string) => {
        const module = courseData.modules.find((m) => m.id === moduleId);
        if (!module) return { completed: 0, total: 0 };
        const completed = module.lessons.filter((l) => completedLessons.has(l.id)).length;
        return { completed, total: module.lessons.length };
    };

    const getTotalProgress = () => {
        let completed = 0;
        let total = 0;
        courseData.modules.forEach((module) => {
            module.lessons.forEach((lesson) => {
                total++;
                if (completedLessons.has(lesson.id)) completed++;
            });
        });
        return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
    };

    const progress = getTotalProgress();

    return (
        <>
            {/* Mobile overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{
                    x: sidebarOpen ? 0 : -320,
                    width: 320,
                }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className={`fixed top-0 left-0 h-full bg-gray-900 border-r border-gray-800 z-50 flex flex-col overflow-hidden`}
            >
                {/* Header */}
                <div className="p-4 border-b border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="font-bold text-white text-sm">Exchange Online</h1>
                                <p className="text-xs text-gray-400">Training Platform</p>
                            </div>
                        </Link>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search lessons..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                        />
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4">
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                            <span>Progress</span>
                            <span>{progress.completed}/{progress.total} lessons ({progress.percentage}%)</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress.percentage}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-orange-500 to-amber-600"
                            />
                        </div>
                    </div>
                </div>

                {/* Search results */}
                {searchQuery && (
                    <div className="flex-1 overflow-y-auto p-4">
                        <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">
                            Search Results ({searchResults.length})
                        </h3>
                        {searchResults.length === 0 ? (
                            <p className="text-sm text-gray-500">No lessons found</p>
                        ) : (
                            <div className="space-y-1">
                                {searchResults.map(({ module, lesson }) => (
                                    <Link
                                        key={lesson.id}
                                        href={`/course/${module.slug}/${lesson.slug}`}
                                        onClick={() => {
                                            setSearchQuery("");
                                            setSidebarOpen(false);
                                        }}
                                        className="block p-2 rounded-lg hover:bg-gray-800 transition-colors"
                                    >
                                        <p className="text-sm text-white">{lesson.title}</p>
                                        <p className="text-xs text-gray-500">{module.title}</p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Module list */}
                {!searchQuery && (
                    <nav className="flex-1 overflow-y-auto p-4">
                        <div className="space-y-2">
                            {courseData.modules.map((module) => {
                                const IconComponent = iconMap[module.icon] || Monitor;
                                const isExpanded = expandedModules.has(module.id);
                                const moduleProgress = getModuleProgress(module.id);
                                const isModuleComplete = moduleProgress.completed === moduleProgress.total && moduleProgress.total > 0;

                                return (
                                    <div key={module.id} className="space-y-1">
                                        {/* Module header */}
                                        <button
                                            onClick={() => toggleModule(module.id)}
                                            className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors group"
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isModuleComplete
                                                ? "bg-green-500/20 text-green-400"
                                                : "bg-orange-500/20 text-orange-400"
                                                }`}>
                                                <IconComponent className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <p className="text-sm font-medium text-white group-hover:text-orange-400 transition-colors">
                                                    {module.title}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {moduleProgress.completed}/{moduleProgress.total} completed • {module.duration}
                                                </p>
                                            </div>
                                            {isExpanded ? (
                                                <ChevronDown className="w-4 h-4 text-gray-400" />
                                            ) : (
                                                <ChevronRight className="w-4 h-4 text-gray-400" />
                                            )}
                                        </button>

                                        {/* Lessons */}
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="ml-4 pl-4 border-l border-gray-700 space-y-1">
                                                        {module.lessons.map((lesson) => {
                                                            const isActive = pathname === `/course/${module.slug}/${lesson.slug}`;
                                                            const isComplete = completedLessons.has(lesson.id);

                                                            return (
                                                                <Link
                                                                    key={lesson.id}
                                                                    href={`/course/${module.slug}/${lesson.slug}`}
                                                                    onClick={() => setSidebarOpen(false)}
                                                                    className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${isActive
                                                                        ? "bg-orange-500/20 text-orange-400"
                                                                        : "hover:bg-gray-800 text-gray-300 hover:text-white"
                                                                        }`}
                                                                >
                                                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isComplete
                                                                        ? "bg-green-500 text-white"
                                                                        : isActive
                                                                            ? "border-2 border-orange-400"
                                                                            : "border border-gray-600"
                                                                        }`}>
                                                                        {isComplete && <Check className="w-3 h-3" />}
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <p className="text-sm truncate">{lesson.title}</p>
                                                                        <p className="text-xs text-gray-500">{lesson.duration}</p>
                                                                    </div>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </nav>
                )}

                {/* Footer */}
                <div className="p-4 border-t border-gray-800">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                        <BookOpen className="w-4 h-4" />
                        Back to Course Home
                    </Link>
                </div>
            </motion.aside>
        </>
    );
}
