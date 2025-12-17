"use client";

import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import SubMenuNavItem from "../../components/Backend/SubMenuItem";
import {
  FiHome,
  FiBook,
  FiDollarSign,
  FiShield,
  FiFileText,
  FiLogOut,
  FiImage,
  FiInfo,
  FiGrid,
} from "react-icons/fi";
import { usePathname } from "next/navigation";
import { FaPersonBooth } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { BiMoney } from "react-icons/bi";
import { logout } from "@/actions/auth.actions";

export default function DashboardLayout({ children }) {
  const menuItems = [
    {
      title: "Dashboard",
      href: "/aws-backend",
      icon: <FiHome className="h-5 w-5" />,
    },
    {
      title: "Homepage Sections",
      icon: <FiGrid className="h-5 w-5" />,
      submenu: [
        { title: "Hero Section", href: "/aws-backend/hero" },
        { title: "About Section", href: "/aws-backend/about" },
        { title: "Products Section", href: "/aws-backend/products" },
      ],
    },
    {
      title: "News Section",
      icon: <FiFileText className="h-5 w-5" />,
      submenu: [
        { title: "News Posts", href: "/aws-backend/news-study" },
        { title: "Index Page Content", href: "/aws-backend/news-index" },
      ],
    },
    {
      title: "Case Study",
      icon: <FiBook className="h-5 w-5" />,
      submenu: [
        { title: "Case Studies", href: "/aws-backend/case-study" },
        { title: "Index Page Content", href: "/aws-backend/case-study-index" },
      ],
    },
    {
      title: "Mortgage",
      icon: <FiDollarSign className="h-5 w-5" />,
      submenu: [
        { title: "Mortgage", href: "/aws-backend/mortgage" },
        { title: "Sub Mortgage", href: "/aws-backend/submortgage" },
        { title: "Index Page Content", href: "/aws-backend/mortgage-index" },
      ],
    },
    {
      title: "Insurance",
      icon: <FiShield className="h-5 w-5" />,
      submenu: [
        { title: "Insurance", href: "/aws-backend/insurance" },
        { title: "Sub Insurance", href: "/aws-backend/subinsurance" },
        { title: "Insurance Index Page", href: "/aws-backend/insurance-index" },
      ],
    },
    {
      title: "Business Funding",
      icon: <IoBusiness className="h-5 w-5" />,
      submenu: [
        {
          title: "Business Funding Categories",
          href: "/aws-backend/business-funding-categories",
        },
        { title: "Business Funding", href: "/aws-backend/business-funding" },
        {
          title: "Index Page Content",
          href: "/aws-backend/business-funding-index",
        },
      ],
    },
    {
      title: "Commercial Finan..",
      icon: <BiMoney className="h-5 w-5" />,
      submenu: [
        {
          title: "Commercial Categories",
          href: "/aws-backend/commercial-finance",
        },
        {
          title: "Index Page Content",
          href: "/aws-backend/commercial-finance-index",
        },
      ],
    },
    {
      title: "Team Section",
      icon: <FaPersonBooth className="h-5 w-5" />,
      submenu: [
        { title: "Team Members", href: "/aws-backend/team" },
        { title: "Index Page Content", href: "/aws-backend/team-index" },
      ],
    },
  ];

  const handleLogout = async () => {
    const { success } = await logout();
    if (success) {
      window.location.href = "/login";
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen">
        <aside className="fixed inset-y-0 left-0 w-[17rem] bg-black shadow-xl overflow-y-scroll">
          <div className="flex items-center justify-center h-16 border-b border-white/30">
            <Image
              src="/aws-logo.png"
              width={120}
              height={120}
              alt="AWS Logo"
            />
          </div>

          <nav className="p-4 mt-4 flex flex-col justify-between h-[calc(100vh-100px)]">
            <ul className="space-y-2">
              {menuItems.map((item) =>
                item.submenu ? (
                  <SubMenuNavItem key={item.title} item={item} />
                ) : (
                  <NavItem key={item.title} href={item.href} icon={item.icon}>
                    {item.title}
                  </NavItem>
                )
              )}
            </ul>
            <div className="mt-auto">
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 text-white hover:bg-red-600 px-4 py-3 rounded-lg transition-all"
              >
                <FiLogOut className="h-5 w-5" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </nav>
        </aside>

        <div className="ml-64">
          <header className="bg-white shadow-md z-50 fixed right-0 left-64 h-16 flex items-center justify-end">
            <div className="flex items-center justify-end px-8">
              <div className="flex items-center space-x-6">
                <Link
                  href="/"
                  target="_blank"
                  className="bg-black text-[13px] text-white px-3 py-2 rounded"
                >
                  Go To Frontend
                </Link>
                <button className="text-gray-600 hover:text-[#154583] relative">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 font-medium">MS</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Mandeep Singh
                    </p>
                    <p className="text-xs text-gray-500">Administrator</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="p-8 pt-24">{children}</main>
        </div>
      </div>
    </>
  );
}

function NavItem({ href, icon, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`flex items-center space-x-3 ${
          isActive
            ? "bg-white text-black hover:bg-gray-100"
            : "text-white hover:bg-blue-800"
        } px-4 py-3 rounded-lg transition-all`}
      >
        {icon}
        <span className="text-sm font-medium">{children}</span>
      </Link>
    </li>
  );
}
