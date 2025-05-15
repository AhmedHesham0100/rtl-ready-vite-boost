
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Table, FormInput } from "lucide-react";

const DashboardLayout = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: "/", icon: <LayoutDashboard className="h-5 w-5" />, label: t('navigation.dashboard') },
    { path: "/table", icon: <Table className="h-5 w-5" />, label: t('navigation.table') },
    { path: "/form", icon: <FormInput className="h-5 w-5" />, label: t('navigation.form') }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Sidebar */}
      <div className={`hidden md:flex flex-col w-64 bg-white/90 dark:bg-gray-950/90 shadow-lg ${currentLanguage.dir === 'rtl' ? 'border-r' : 'border-l'} border-gray-200 dark:border-gray-800`}>
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-xl font-bold">{t('app.title')}</h1>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-gray-100 dark:bg-gray-800 text-primary'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white/80 dark:bg-gray-950/80 backdrop-blur z-10 px-4 py-3 shadow">
          <div className="container mx-auto flex justify-between items-center">
            <button className="md:hidden">
              {/* Mobile menu button */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className={`${currentLanguage.dir === 'rtl' ? 'mr-auto' : 'ml-auto'}`}>
              <LanguageSwitcher />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
