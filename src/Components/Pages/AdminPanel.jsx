import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Package,
  Users,
  ShoppingCart,
  Settings,
  Bell,
  Search,
} from "lucide-react";
import { BarChart, Bar, Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart,  Pie, Cell,} from "recharts";

// Dummy Data
const performanceData = [
  { month: "Jan", views: 40, clicks: 24 },
  { month: "Feb", views: 30, clicks: 13 },
  { month: "Mar", views: 20, clicks: 98 },
  { month: "Apr", views: 27, clicks: 39 },
  { month: "May", views: 18, clicks: 48 },
  { month: "Jun", views: 23, clicks: 38 },
  { month: "Jul", views: 34, clicks: 43 },
  { month: "Aug", views: 44, clicks: 55 },
  { month: "Sep", views: 55, clicks: 65 },
  { month: "Oct", views: 70, clicks: 78 },
  { month: "Nov", views: 60, clicks: 66 },
  { month: "Dec", views: 80, clicks: 89 },
];

const pieData = [
  { name: "Returning", value: 65 },
  { name: "New", value: 35 },
];

const COLORS = ["#ff7849", "#ddd"];

// Sidebar Menu Config
const menuItems = [
  { name: "Dashboard", icon: <Home size={18} /> },
  { name: "Products", icon: <Package size={18} /> },
  { name: "Users", icon: <Users size={18} /> },
  { name: "Orders", icon: <ShoppingCart size={18} /> },
  { name: "Settings", icon: <Settings size={18} /> },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold text-orange-500">Larkon</h1>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 text-gray-700"
            >
              {item.icon} {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white p-4 shadow">
          <div className="flex items-center gap-2">
            <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <h2 className="font-semibold text-lg">WELCOME!</h2>
          </div>
          <div className="flex items-center gap-4">
            <Search className="text-gray-500" />
            <Bell className="text-gray-500" />
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Total Orders", value: "13,647" },
              { title: "New Leads", value: "9,526" },
              { title: "Deals", value: "976" },
              { title: "Booked Revenue", value: "$123.6k" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-gray-500">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
                <button className="text-orange-500 text-sm mt-2">
                  View More →
                </button>
              </div>
            ))}
          </div>

          {/* Performance Chart */}
          <div className="bg-white p-6 rounded-xl shadow h-96">
            <h3 className="mb-4 font-semibold">Performance</h3>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="views" fill="#ff7849" />
                <Line
                  type="monotone"
                  dataKey="clicks"
                  stroke="#4ade80"
                  strokeWidth={2}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Conversions & Sessions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Conversions */}
            <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
              <h3 className="mb-4 font-semibold">Conversions</h3>
              <PieChart width={200} height={200}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              <p className="mt-2 font-semibold">65.2% Returning Customers</p>
            </div>

            {/* Sessions by Country (Map placeholder) */}
            <div className="bg-white p-6 rounded-xl shadow flex items-center justify-center">
              <p className="text-gray-400">Map Placeholder</p>
            </div>

            {/* Top Pages */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="mb-4 font-semibold">Top Pages</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th>Page Path</th>
                    <th>Views</th>
                    <th>Exit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { path: "/ecommerce.html", views: 465, exit: "4.2%" },
                    { path: "/dashboard.html", views: 426, exit: "2.4%" },
                    { path: "/chat.html", views: 254, exit: "12.9%" },
                  ].map((row, i) => (
                    <tr key={i} className="border-t">
                      <td className="py-2">{row.path}</td>
                      <td>{row.views}</td>
                      <td>{row.exit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="mb-4 font-semibold">Recent Orders</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: "#RB5625",
                    date: "29 Apr 2024",
                    customer: "Anna H. Hines",
                    email: "anna.hines@mail.com",
                    status: "Completed",
                  },
                  {
                    id: "#RB5852",
                    date: "18 Apr 2024",
                    customer: "Judith Fristche",
                    email: "judith.fristche@mail.com",
                    status: "Processing",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2">{row.id}</td>
                    <td>{row.date}</td>
                    <td>{row.customer}</td>
                    <td>{row.email}</td>
                    <td>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          row.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
