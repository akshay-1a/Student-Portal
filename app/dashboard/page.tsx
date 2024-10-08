"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react"
import Image from "next/image"
import { NAV_ITEMS, STUDENT_INFO, CURRENT_COURSES, PAYMENT_STATUS, COURSES, AVAILABLE_COURSES, PAYMENT_SUMMARY, ATTENDANCE_DATA, APP_METADATA} from "../../lib/constants"

export default function HomePage() {
  const [activePage, setActivePage] = useState("dashboard")
  const [sidebarExpanded, setSidebarExpanded] = useState(true)

  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded)

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardPage />
      case "courses":
        return <CoursesPage />
      case "enroll":
        return <EnrollmentPage />
      case "payment":
        return <PaymentPage />
      case "attendance":
        return <AttendancePage />
      default:
        return <DashboardPage />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-indigo-700 text-white transition-all duration-300 ease-in-out ${sidebarExpanded ? "w-72" : "w-20"}`}>
        <div className="flex items-center justify-between p-4">
          {sidebarExpanded &&
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">{APP_METADATA.UNIVERSITY_NAME}</h1>
              <p>{APP_METADATA.APP_TITLE}</p>
            </div>
          }
          <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            {sidebarExpanded ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
          </button>
        </div>
        <nav className="mt-8">
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActivePage(item.id)}
                  className={`flex items-center w-full p-3 transition-colors ${activePage === item.id ? "bg-indigo-800" : "hover:bg-indigo-600"
                    } ${sidebarExpanded ? "justify-start" : "justify-center"}`}
                >
                  {item.icon}
                  {sidebarExpanded && <span className="ml-3">{item.name}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 w-72 p-4">
          <button className=" flex items-center w-full p-3 transition-colors hover:bg-indigo-600">
            <LogOut className="h-6 w-6" />
            {sidebarExpanded && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-3xl tracking-wide font-semibold text-gray-900">
                {NAV_ITEMS.find(item => item.id === activePage)?.name}
              </h1>
              <p className="italic">{APP_METADATA.APP_SUBTITLE}</p>
            </div>
            <div className="flex items-center">
              <span className="mr-4 font-bold text-xl text-gray-600">{STUDENT_INFO.name}</span>
              <Image src={STUDENT_INFO.user} alt={STUDENT_INFO.name} width={60} height={60} className="rounded-full border-4 border-indigo-700 border-solid p-[2px]" />
            </div>
          </div>
        </header>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderPage()}
        </div>
      </main>
    </div>
  )
}

function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Student Profile Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Replace hardcoded values with STUDENT_INFO */}
          <div>
            <p><strong>Name:</strong> {STUDENT_INFO.name}</p>
            <p><strong>Student ID:</strong> {STUDENT_INFO.id}</p>
            <p><strong>Major:</strong> {STUDENT_INFO.major}</p>
            <p><strong>GPA:</strong> {STUDENT_INFO.gpa}</p>
          </div>
          <div>
            <p><strong>Credits Completed:</strong> {STUDENT_INFO.creditsCompleted}</p>
            <p><strong>Total Credits Required:</strong> {STUDENT_INFO.totalCredits}</p>
            <p><strong>Progress:</strong> {((STUDENT_INFO.creditsCompleted / STUDENT_INFO.totalCredits) * 100).toFixed(1)}%</p>
            <p><strong>Academic Standing:</strong> {STUDENT_INFO.academicStanding}</p>
          </div>
        </div>
        <div className="mt-4 h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500"
            style={{ width: `${(STUDENT_INFO.creditsCompleted / STUDENT_INFO.totalCredits) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Current Courses</h3>
          <ul className="space-y-2">
            {CURRENT_COURSES.map((course, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{course.name}</span>
                <span className="text-sm text-gray-500">{course.progress}% complete</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Attendance</h3>
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 100">
                <circle className="text-gray-200 stroke-current" strokeWidth="10" cx="65" cy="65" r="55" fill="transparent" />
                <circle
                  className="text-green-500 progress-ring stroke-current"
                  strokeWidth="10"
                  strokeLinecap="round"
                  cx="65"
                  cy="65"
                  r="55"
                  fill="transparent"
                  strokeDasharray="330.2"
                  strokeDashoffset="50"
                  transform="rotate(270 65 65)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative text-3xl font-bold">80%</span>
              </div>
            </div>
          </div>
          <p className="text-center mt-4 text-sm text-gray-600">Overall Attendance</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Payment Status</h3>
          <div className="space-y-4">
            {PAYMENT_STATUS.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span className={`font-semibold ${item.status === "Paid" ? "text-green-500" : "text-red-500"}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">Enroll in a Course</button>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">Pay Fees</button>
        <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors">Update Attendance</button>
      </div>
    </div>
  )
}

function CoursesPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COURSES.map((course, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
            <p className="text-gray-600 mb-4">Course Code: {course.code}</p>
            <div className="mb-2 flex justify-between">
              <span>Progress:</span>
              <span>{course.progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full mb-4">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p><strong>Current Grade:</strong> {course.grade}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function EnrollmentPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Course Enrollment</h2>
      <div className="flex space-x-4 mb-4">
        <select className="border p-2 rounded-md">
          <option>All Departments</option>
          <option>Computer Science</option>
          <option>Mathematics</option>
          <option>Physics</option>
        </select>
        <select className="border p-2 rounded-md">
          <option>All Semesters</option>
          <option>Fall 2023</option>
          <option>Spring 2024</option>
        </select>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semester</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {AVAILABLE_COURSES.map((course, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{course.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.code}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.credits}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.semester}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">Enroll</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function PaymentPage() {
  const totalAmount = PAYMENT_SUMMARY.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Payment</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-4xl font-bold mb-6">Amount Due: ${totalAmount}</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700">Payment Method</label>
            <select id="payment-method" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>Credit Card</option>
              <option>PayPal</option>
              <option>Bank Transfer</option>
            </select>
          </div>
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">Pay Now</button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Payment Summary</h3>
        <div className="space-y-2">
          {PAYMENT_SUMMARY.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>{item.name}:</span>
              <span>${item.amount}</span>
            </div>
          ))}
          <div className="border-t pt-2 font-semibold flex justify-between">
            <span>Total:</span>
            <span>${totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function AttendancePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">My Attendance</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {ATTENDANCE_DATA.map((record, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{record.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${record.status === "Present" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}