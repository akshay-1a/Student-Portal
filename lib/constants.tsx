import { BookOpen, BookPlus, Calendar, CreditCard, Home, LayoutDashboard, PlusCircle, Users } from "lucide-react"

export const APP_METADATA = {
    UNIVERSITY_NAME: "Rowan University",
    APP_TITLE: "Student Portal",
    APP_SUBTITLE: "Your Gateway to Academic Success",
}

export const STUDENT_INFO = {
    name: "John Doe",
    user: "/user.jpg",
    id: "RU2023001",
    major: "Computer Science",
    gpa: 3.8,
    creditsCompleted: 75,
    totalCredits: 120,
    academicStanding: "Good Standing",
}

export const NAV_ITEMS = [
    { name: "Dashboard", icon: <Home className="h-6 w-6" />, id: "dashboard" },
    { name: "My Courses", icon: <BookOpen className="h-6 w-6" />, id: "courses" },
    { name: "Attendance", icon: <Calendar className="h-6 w-6" />, id: "attendance" },
    { name: "Payment Status", icon: <CreditCard className="h-6 w-6" />, id: "payment" },
    { name: "Enroll in a Course", icon: <PlusCircle className="h-6 w-6" />, id: "enroll" },
]

export const CURRENT_COURSES = [
    { name: "Advanced Algorithms", progress: 75 },
    { name: "Database Systems", progress: 60 },
    { name: "Machine Learning", progress: 40 },
]

export const PAYMENT_STATUS = [
    { name: "Tuition Fee", status: "Paid" },
    { name: "Library Fee", status: "Paid" },
    { name: "Lab Fee", status: "Pending" },
]

export const COURSES = [
    { name: "Advanced Algorithms", code: "CS401", progress: 75, grade: "A-" },
    { name: "Database Systems", code: "CS402", progress: 60, grade: "B+" },
    { name: "Machine Learning", code: "CS403", progress: 40, grade: "A" },
    { name: "Web Development", code: "CS404", progress: 90, grade: "A+" },
]

export const AVAILABLE_COURSES = [
    { name: "Artificial Intelligence", code: "CS501", credits: 3, semester: "Fall 2023" },
    { name: "Computer Networks", code: "CS502", credits: 4, semester: "Fall 2023" },
    { name: "Software Engineering", code: "CS503", credits: 3, semester: "Spring 2024" },
    { name: "Data Mining", code: "CS504", credits: 3, semester: "Spring 2024" },
]

export const PAYMENT_SUMMARY = [
    { name: "Tuition Fee", amount: 3000 },
    { name: "Library Fee", amount: 200 },
    { name: "Technology Fee", amount: 300 },
]

export const ATTENDANCE_DATA = [
    { date: "2023-05-01", status: "Present" },
    { date: "2023-05-03", status: "Present" },
    { date: "2023-05-05", status: "Absent" },
    { date: "2023-05-08", status: "Present" },
    { date: "2023-05-10", status: "Present" },
]

export const LANDING_PAGE_FEATURES = [
    {
        icon: <LayoutDashboard className="h-6 w-6" />,
        title: "Dashboard Summary",
        description: "Get an overview of your academic progress"
    },
    {
        icon: <BookOpen className="h-6 w-6" />,
        title: "My Courses",
        description: "Access and manage your enrolled courses"
    },
    {
        icon: <Users className="h-6 w-6" />,
        title: "Attendance",
        description: "Track your attendance for all classes"
    },
    {
        icon: <CreditCard className="h-6 w-6" />,
        title: "Payment Status",
        description: "View and manage your tuition payments"
    },
    {
        icon: <BookPlus className="h-6 w-6" />,
        title: "Enroll in a Course",
        description: "Browse and enroll in new courses"
    },
    {
        icon: <Calendar className="h-6 w-6" />,
        title: "Academic Calendar",
        description: "Stay updated with important dates and events"
    },
]
