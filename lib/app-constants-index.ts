export const APP_TITLE = "Rowan University"

// Sidebar
export const SIDEBAR_ITEMS = [
  { name: "'Dashboard'", id: "'dashboard'" },
  { name: "'My Courses'", id: "'courses'" },
  { name: "'Attendance'", id: "'attendance'" },
  { name: "'Payment Status'", id: "'payment'" },
  { name: "'Enroll in a Course'", id: "'enroll'" },
]

export const LOGOUT_TEXT = "Logout"

// Dashboard
export const DASHBOARD = {
  PROFILE_SUMMARY: "Student Profile Summary",
  STUDENT_INFO: {
    NAME: "Name",
    ID: "Student ID",
    MAJOR: "Major",
    GPA: "GPA",
    CREDITS_COMPLETED: "Credits Completed",
    TOTAL_CREDITS: "Total Credits Required",
    PROGRESS: "Progress",
    ACADEMIC_STANDING: "Academic Standing",
  },
  CURRENT_COURSES: "Current Courses",
  ATTENDANCE: "Attendance",
  OVERALL_ATTENDANCE: "Overall Attendance",
  PAYMENT_STATUS: "Payment Status",
  PAYMENT_ITEMS: {
    TUITION_FEE: "Tuition Fee",
    LIBRARY_FEE: "Library Fee",
    LAB_FEE: "Lab Fee",
  },
  PAYMENT_STATUS_PAID: "Paid",
  PAYMENT_STATUS_PENDING: "Pending",
  BUTTONS: {
    ENROLL: "Enroll in a Course",
    PAY_FEES: "Pay Fees",
    UPDATE_ATTENDANCE: "Update Attendance",
  },
}

// Courses Page
export const COURSES = {
  TITLE: "My Courses",
  COURSE_CODE: "Course Code",
  PROGRESS: "Progress",
  CURRENT_GRADE: "Current Grade",
}

// Enrollment Page
export const ENROLLMENT = {
  TITLE: "Course Enrollment",
  FILTERS: {
    ALL_DEPARTMENTS: "All Departments",
    ALL_SEMESTERS: "All Semesters",
  },
  TABLE_HEADERS: {
    COURSE_NAME: "Course Name",
    COURSE_CODE: "Course Code",
    CREDITS: "Credits",
    SEMESTER: "Semester",
    ACTION: "Action",
  },
  ENROLL_BUTTON: "Enroll",
}

// Payment Page
export const PAYMENT = {
  TITLE: "Payment",
  AMOUNT_DUE: "Amount Due",
  PAYMENT_METHOD: "Payment Method",
  PAYMENT_OPTIONS: {
    CREDIT_CARD: "Credit Card",
    PAYPAL: "PayPal",
    BANK_TRANSFER: "Bank Transfer",
  },
  PAY_NOW_BUTTON: "Pay Now",
  PAYMENT_SUMMARY: "Payment Summary",
  FEE_TYPES: {
    TUITION: "Tuition Fee",
    LIBRARY: "Library Fee",
    TECHNOLOGY: "Technology Fee",
  },
  TOTAL: "Total",
}

// Attendance Page
export const ATTENDANCE = {
  TITLE: "My Attendance",
  TABLE_HEADERS: {
    DATE: "Date",
    STATUS: "Status",
  },
  STATUS: {
    PRESENT: "Present",
    ABSENT: "Absent",
  },
}

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: "An error occurred. Please try again.",
  NOT_FOUND: "Page not found.",
  UNAUTHORIZED: "You are not authorized to view this page.",
}

// Success Messages
export const SUCCESS_MESSAGES = {
  ENROLLMENT: "Successfully enrolled in the course.",
  PAYMENT: "Payment processed successfully.",
  ATTENDANCE_UPDATE: "Attendance updated successfully.",
}

// Placeholder Text
export const PLACEHOLDERS = {
  SEARCH: "Search...",
  SELECT_COURSE: "Select a course",
  SELECT_DATE: "Select a date",
}