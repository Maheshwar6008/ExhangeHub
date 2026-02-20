"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Clock,
    CheckCircle,
    ChevronRight,
    ChevronLeft,
    BookOpen,
    Lightbulb,
    AlertTriangle,
    MessageSquare,
    Award,
    GraduationCap,
    ArrowRight,
} from "lucide-react";
import { Module, Lesson } from "@/lib/data/course-data";
import { courseData } from "@/lib/data/course-data";
import { useCourse } from "@/lib/course-context";

interface LessonContentProps {
    module: Module;
    lesson: Lesson;
}

export function LessonContent({ module, lesson }: LessonContentProps) {
    const { completedLessons, toggleLesson, trainerMode } = useCourse();
    const isCompleted = completedLessons.has(lesson.id);

    // Get all lessons for navigation
    const allLessons = courseData.modules.flatMap((m) =>
        m.lessons.map((l) => ({
            ...l,
            moduleSlug: m.slug,
            moduleTitle: m.title,
        }))
    );

    const currentIndex = allLessons.findIndex(
        (l) => l.slug === lesson.slug && l.moduleSlug === module.slug
    );
    const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
        >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <span>{module.title}</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-orange-400">{lesson.title}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {lesson.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{lesson.duration}</span>
                </div>
                <button
                    onClick={() => toggleLesson(lesson.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${isCompleted
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-orange-500/50"
                        }`}
                >
                    <CheckCircle className="w-4 h-4" />
                    {isCompleted ? "Completed" : "Mark Complete"}
                </button>
            </div>

            {/* Explanation */}
            <section className="mb-10">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
                    <BookOpen className="w-5 h-5 text-orange-400" />
                    Understanding the Concept
                </h2>
                <div className="space-y-4">
                    {lesson.content.explanation.map((paragraph, index) => (
                        <p key={index} className="text-gray-300 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </section>

            {/* Trainer Notes */}
            {trainerMode && lesson.trainerNotes && (
                <motion.section
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-10 p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl"
                >
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-orange-400 mb-4">
                        <GraduationCap className="w-5 h-5" />
                        Trainer Notes
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-semibold text-orange-300 uppercase mb-2">
                                Talking Points
                            </h3>
                            <ul className="space-y-1">
                                {lesson.trainerNotes.talkingPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                        <span className="text-orange-400 mt-1">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-orange-300 uppercase mb-2">
                                Real-World Examples
                            </h3>
                            <ul className="space-y-1">
                                {lesson.trainerNotes.realExamples.map((example, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                        <span className="text-amber-400 mt-1">→</span>
                                        {example}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-orange-300 uppercase mb-2">
                                Questions to Ask
                            </h3>
                            <ul className="space-y-1">
                                {lesson.trainerNotes.questionsToAsk.map((q, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                        <span className="text-yellow-400 mt-1">?</span>
                                        {q}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.section>
            )}

            {/* Key Points */}
            <section className="mb-10">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Key Points
                </h2>
                <div className="grid gap-3 md:grid-cols-2">
                    {lesson.content.keyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-xl"
                        >
                            <span className="text-orange-400 mt-0.5">•</span>
                            <span className="text-gray-300 text-sm">{point}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Architecture */}
            {lesson.content.architecture && (
                <section className="mb-10">
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
                        <ArrowRight className="w-5 h-5 text-orange-400" />
                        {lesson.content.architecture.title}
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {lesson.content.architecture.steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex-1 min-w-[150px] p-4 bg-gray-900/50 border border-gray-800 rounded-xl text-center"
                            >
                                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold">
                                    {step.step}
                                </div>
                                <h3 className="text-white font-medium text-sm mb-1">{step.title}</h3>
                                <p className="text-gray-400 text-xs">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Why It Matters */}
            <section className="mb-10">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                    Why This Matters
                </h2>
                <div className="p-6 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border border-yellow-500/20 rounded-2xl">
                    <p className="text-gray-300 leading-relaxed">{lesson.content.whyItMatters}</p>
                </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-10">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    Common Mistakes to Avoid
                </h2>
                <div className="space-y-3">
                    {lesson.content.commonMistakes.map((mistake, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl"
                        >
                            <span className="text-red-400 mt-0.5">✗</span>
                            <span className="text-gray-300 text-sm">{mistake}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interview Tips */}
            <section className="mb-10">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                    Interview Discussion Points
                </h2>
                <div className="space-y-3">
                    {lesson.content.interviewTips.map((tip, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl"
                        >
                            <span className="text-blue-400 mt-0.5">💡</span>
                            <span className="text-gray-300 text-sm">{tip}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Exam Tips */}
            <section className="mb-10">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
                    <Award className="w-5 h-5 text-orange-400" />
                    MS-203 Exam Tips
                </h2>
                <div className="space-y-3">
                    {lesson.content.examTips.map((tip, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-orange-500/5 border border-orange-500/20 rounded-xl"
                        >
                            <span className="text-orange-400 mt-0.5">📝</span>
                            <span className="text-gray-300 text-sm">{tip}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-800">
                {prevLesson ? (
                    <Link
                        href={`/course/${prevLesson.moduleSlug}/${prevLesson.slug}`}
                        className="flex items-center gap-2 px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-orange-500/50 transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4 text-gray-400" />
                        <div className="text-left">
                            <p className="text-xs text-gray-500">Previous</p>
                            <p className="text-sm text-white">{prevLesson.title}</p>
                        </div>
                    </Link>
                ) : (
                    <div />
                )}
                {nextLesson && (
                    <Link
                        href={`/course/${nextLesson.moduleSlug}/${nextLesson.slug}`}
                        className="flex items-center gap-2 px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-orange-500/50 transition-colors"
                    >
                        <div className="text-right">
                            <p className="text-xs text-gray-500">Next</p>
                            <p className="text-sm text-white">{nextLesson.title}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Link>
                )}
            </div>
        </motion.div>
    );
}
