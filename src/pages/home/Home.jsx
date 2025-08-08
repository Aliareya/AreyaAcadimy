import React from 'react';
import {
  CalendarDays,
  ClipboardList,
  Users,
  BookOpen,
  UserPlus,
  CheckSquare,
  ClipboardCheck,
  CalendarPlus,
} from 'lucide-react';

import bg  from "../../assets/images/Dbg.jpg";
import { useUser } from '../../contex/UserContext';

export default function Home() {
  const {user} = useUser();
  console.log("user: ",user);
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div style={{backgroundImage:`url(${bg})`}} className="h-48 bg-cover bg-center bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-blue-950">Welcome back, Admin!</h1>
        <p className="text-base text-blue-950 pt-3">Here's what's happening at your academy today</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
        <StatCard title="Total Students" value="1,234" subtitle="+12% from last month" icon={<Users />} />
        <StatCard title="Teachers" value="87" subtitle="+3% from last month" icon={<BookOpen />} />
        <StatCard title="Attendance Rate" value="94.2%" subtitle="+2.1% from last month" icon={<ClipboardCheck />} />
        <StatCard title="Active Courses" value="45" subtitle="+5% from last month" icon={<ClipboardList />} />
      </div>

      {/* Activities and Events */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-3">Recent Activities</h2>
          <ul className="space-y-3 text-sm">
            <ActivityItem text="New student John Doe enrolled in Computer Science" time="5 minutes ago" status="success" />
            <ActivityItem text="Weekly attendance report generated" time="1 hour ago" status="info" />
            <ActivityItem text="Low attendance alert for Mathematics class" time="2 hours ago" status="warning" />
            <ActivityItem text="Science Fair event scheduled for next week" time="3 hours ago" status="success" />
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-3">Upcoming Events</h2>
          <ul className="space-y-3 text-sm">
            <EventItem name="Parent-Teacher Conference" time="Tomorrow, 9:00 AM" tag="meeting" />
            <EventItem name="Science Fair" time="Friday, 10:00 AM" tag="event" />
            <EventItem name="Monthly Assessment" time="Next Monday, 2:00 PM" tag="exam" />
          </ul>
          <button className="text-blue-600 mt-3 hover:underline text-sm">View All Events</button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
        <ActionButton icon={<UserPlus />} label="Add Student" />
        <ActionButton icon={<CheckSquare />} label="Mark Attendance" />
        <ActionButton icon={<ClipboardCheck />} label="New Enrollment" />
        <ActionButton icon={<CalendarPlus />} label="Schedule Event" />
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow flex items-center space-x-4">
      <div className="p-2 bg-blue-100 text-blue-700 rounded-full">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{value}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-xs text-green-500">{subtitle}</p>
      </div>
    </div>
  );
}

function ActivityItem({ text, time, status }) {
  const colors = {
    success: 'text-green-600',
    info: 'text-blue-600',
    warning: 'text-yellow-600',
  };
  return (
    <li className="flex items-start gap-2">
      <span className={`w-2 h-2 mt-2 rounded-full ${colors[status]} bg-opacity-80`} />
      <div>
        <p>{text}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </li>
  );
}

function EventItem({ name, time, tag }) {
  return (
    <li className="border-l-4 border-blue-500 pl-3">
      <div className="flex justify-between">
        <p>{name}</p>
        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">{tag}</span>
      </div>
      <p className="text-xs text-gray-500">{time}</p>
    </li>
  );
}

function ActionButton({ icon, label }) {
  return (
    <button className="bg-white shadow rounded-2xl p-4 flex flex-col items-center space-y-2 hover:bg-gray-50">
      <div className="text-blue-600">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
