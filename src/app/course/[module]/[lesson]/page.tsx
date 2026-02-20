import { courseData } from "@/lib/data/course-data";
import { CourseLayout } from "@/components/layout";
import { LessonContent } from "@/components/ui";
import { Metadata } from "next";

type Params = Promise<{ module: string; lesson: string }>;

export async function generateStaticParams() {
    const params: { module: string; lesson: string }[] = [];
    courseData.modules.forEach((module) => {
        module.lessons.forEach((lesson) => {
            params.push({
                module: module.slug,
                lesson: lesson.slug,
            });
        });
    });
    return params;
}

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const { module: moduleSlug, lesson: lessonSlug } = await params;
    const module = courseData.modules.find((m) => m.slug === moduleSlug);
    const lesson = module?.lessons.find((l) => l.slug === lessonSlug);

    return {
        title: lesson
            ? `${lesson.title} | ${module?.title}`
            : "Lesson Not Found",
    };
}

export default async function LessonPage({
    params,
}: {
    params: Params;
}) {
    const { module: moduleSlug, lesson: lessonSlug } = await params;
    const module = courseData.modules.find((m) => m.slug === moduleSlug);
    const lesson = module?.lessons.find((l) => l.slug === lessonSlug);

    if (!module || !lesson) {
        return (
            <CourseLayout>
                <div className="flex items-center justify-center min-h-screen">
                    <p className="text-gray-400 text-lg">Lesson not found</p>
                </div>
            </CourseLayout>
        );
    }

    return (
        <CourseLayout>
            <LessonContent module={module} lesson={lesson} />
        </CourseLayout>
    );
}
