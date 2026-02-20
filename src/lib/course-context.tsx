"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { courseData, Module, Lesson } from "@/lib/data/course-data";

interface SearchResult {
    module: Module;
    lesson: Lesson;
}

interface CourseContextType {
    currentModule: string | null;
    currentLesson: string | null;
    setCurrentModule: (id: string | null) => void;
    setCurrentLesson: (id: string | null) => void;
    completedLessons: Set<string>;
    toggleLesson: (lessonId: string) => void;
    trainerMode: boolean;
    setTrainerMode: (mode: boolean) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    searchResults: SearchResult[];
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

const CourseContext = createContext<CourseContextType | null>(null);

export function CourseProvider({ children }: { children: React.ReactNode }) {
    const [currentModule, setCurrentModule] = useState<string | null>(null);
    const [currentLesson, setCurrentLesson] = useState<string | null>(null);
    const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
    const [trainerMode, setTrainerMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Load completed lessons from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("exchange-completedLessons");
        if (saved) {
            try {
                setCompletedLessons(new Set(JSON.parse(saved)));
            } catch {
                // ignore
            }
        }
        const savedTrainer = localStorage.getItem("exchange-trainerMode");
        if (savedTrainer) {
            setTrainerMode(savedTrainer === "true");
        }
    }, []);

    // Save completed lessons
    useEffect(() => {
        if (completedLessons.size > 0) {
            localStorage.setItem(
                "exchange-completedLessons",
                JSON.stringify(Array.from(completedLessons))
            );
        }
    }, [completedLessons]);

    // Save trainer mode
    useEffect(() => {
        localStorage.setItem("exchange-trainerMode", String(trainerMode));
    }, [trainerMode]);

    const toggleLesson = useCallback((lessonId: string) => {
        setCompletedLessons((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(lessonId)) {
                newSet.delete(lessonId);
            } else {
                newSet.add(lessonId);
            }
            return newSet;
        });
    }, []);

    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) return [];
        const query = searchQuery.toLowerCase();
        const results: SearchResult[] = [];

        courseData.modules.forEach((module) => {
            module.lessons.forEach((lesson) => {
                const searchableText = [
                    lesson.title,
                    ...lesson.content.explanation,
                    ...lesson.content.keyPoints,
                    lesson.content.whyItMatters,
                ].join(" ").toLowerCase();

                if (searchableText.includes(query)) {
                    results.push({ module, lesson });
                }
            });
        });

        return results;
    }, [searchQuery]);

    const value = useMemo(
        () => ({
            currentModule,
            currentLesson,
            setCurrentModule,
            setCurrentLesson,
            completedLessons,
            toggleLesson,
            trainerMode,
            setTrainerMode,
            searchQuery,
            setSearchQuery,
            searchResults,
            sidebarOpen,
            setSidebarOpen,
        }),
        [
            currentModule,
            currentLesson,
            completedLessons,
            toggleLesson,
            trainerMode,
            searchQuery,
            searchResults,
            sidebarOpen,
        ]
    );

    return (
        <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
    );
}

export function useCourse() {
    const context = useContext(CourseContext);
    if (!context) {
        throw new Error("useCourse must be used within a CourseProvider");
    }
    return context;
}
