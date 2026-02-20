"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Monitor,
    BookOpen,
    Clock,
    Award,
    ChevronRight,
    Users,
    CheckCircle,
    Map,
    FileText,
    Zap,
    Bell,
    Sparkles,
    Play,
    Mail,
    Shield,
    ArrowLeftRight,
    Truck,
    Globe,
    BarChart3,
    FolderOpen,
    Settings,
} from "lucide-react";
import { courseData } from "@/lib/data/course-data";

const moduleIcons: Record<string, React.ElementType> = {
    introduction: Map,
    "mail-flow": ArrowLeftRight,
    "message-hygiene": Shield,
    "mailbox-management": Mail,
    "migration-coexistence": Truck,
    "public-folders-shared": FolderOpen,
    "mobile-client-access": Globe,
    "monitoring-troubleshooting": BarChart3,
};

export default function CoursePage() {
    const totalLessons = courseData.modules.reduce(
        (acc, module) => acc + module.lessons.length,
        0
    );

    const totalDuration = courseData.modules.reduce((acc, module) => {
        return (
            acc +
            module.lessons.reduce((lessonAcc, lesson) => {
                const minutes = parseInt(lesson.duration) || 0;
                return lessonAcc + minutes;
            }, 0)
        );
    }, 0);

    const firstLesson = courseData.modules[0]?.lessons[0];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

                <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span>Interactive Training Platform</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {courseData.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
                            {courseData.subtitle}
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
                            <div className="flex items-center gap-2 text-gray-300">
                                <BookOpen className="w-5 h-5 text-orange-400" />
                                <span className="text-lg">{courseData.modules.length} Modules</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <FileText className="w-5 h-5 text-green-400" />
                                <span className="text-lg">{totalLessons} Lessons</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Clock className="w-5 h-5 text-amber-400" />
                                <span className="text-lg">{Math.round(totalDuration / 60)} Hours</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link
                            href={`/course/${courseData.modules[0]?.slug}/${firstLesson?.slug}`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25"
                        >
                            <Play className="w-5 h-5" />
                            Start Learning
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Trainer Section */}
            <section className="py-16 bg-gray-900/50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl"
                    >
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-3xl font-bold text-white">
                            {courseData.trainer.name.charAt(0)}
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold text-white mb-2">
                                Your Trainer: {courseData.trainer.name}
                            </h2>
                            <p className="text-lg text-gray-400 mb-3">{courseData.trainer.title}</p>
                            <p className="text-gray-400">Microsoft Exchange Online & Messaging Administration Expert</p>
                            {courseData.trainer.linkedin && (
                                <a
                                    href={courseData.trainer.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-4 text-orange-400 hover:text-orange-300 transition-colors"
                                >
                                    <Users className="w-4 h-4" />
                                    Connect on LinkedIn
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What You'll Learn */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            What You&apos;ll Learn
                        </h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {courseData.whatYouWillLearn.map((objective: string, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-xl"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300">{objective}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Prerequisites */}
            <section className="py-16 bg-gray-900/50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white text-center mb-8">
                            Prerequisites
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {courseData.prerequisites.map((prereq, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm"
                                >
                                    {prereq}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Modules */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            Course Modules
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {courseData.modules.map((module, index) => {
                                const IconComponent = moduleIcons[module.slug] || Monitor;
                                return (
                                    <motion.div
                                        key={module.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group"
                                    >
                                        <Link
                                            href={`/course/${module.slug}/${module.lessons[0]?.slug}`}
                                            className="block h-full p-6 bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl hover:border-orange-500/50 transition-all"
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                                                    <IconComponent className="w-6 h-6 text-orange-400" />
                                                </div>
                                                <div className="text-sm text-gray-400">
                                                    Module {index + 1}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                                {module.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-4">
                                                {module.description}
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <span>{module.lessons.length} Lessons</span>
                                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Certification */}
            <section className="py-16 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Prepare for MS-203 Certification
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                            This training aligns with the Microsoft MS-203: Microsoft 365
                            Messaging certification exam. Master Exchange Online administration,
                            mail flow, and messaging security to pass with confidence.
                        </p>
                        <Link
                            href={`/course/${courseData.modules[0]?.slug}/${firstLesson?.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all"
                        >
                            <Bell className="w-5 h-5" />
                            Begin Your Journey
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
                    <p>
                        © {new Date().getFullYear()} {courseData.trainer.name}. All rights
                        reserved.
                    </p>
                    <p className="mt-2">
                        {courseData.title} - Interactive Training Platform
                    </p>
                </div>
            </footer>
        </div>
    );
}
