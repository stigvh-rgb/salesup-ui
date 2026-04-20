import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Layout — app shell met sidebar, client selector en main content
 *
 * Props:
 * - children: page content
 * - navigation: array van { name, href, icon, internal? }
 * - clients: array van { id, name } (optioneel, voor multi-tenant)
 * - selectedClient: client id (optioneel)
 * - onClientChange: (clientId) => void (optioneel)
 * - brandName: string, default "salesUp"
 * - logoSrc: URL naar logo afbeelding (optioneel)
 */
export default function Layout({
  children,
  navigation = [],
  clients,
  selectedClient,
  onClientChange,
  brandName = 'salesUp',
  logoSrc,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  return (
    <div className="min-h-screen flex">
      <aside
        className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-up-blue-dark text-white transition-all duration-200 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-up-blue-800">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              {logoSrc ? (
                <img src={logoSrc} alt={brandName} className="h-7" />
              ) : (
                <h1 className="text-lg font-bold">
                  <span className="text-white">sales</span>
                  <span className="text-up-orange">Up</span>
                </h1>
              )}
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-up-blue-800 rounded"
            aria-label={sidebarOpen ? 'Sluit sidebar' : 'Open sidebar'}
          >
            {sidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>

        {sidebarOpen && clients && (
          <div className="p-3 border-b border-up-blue-800">
            <select
              value={selectedClient || ''}
              onChange={(e) => onClientChange && onClientChange(e.target.value)}
              className="w-full bg-up-blue-800 text-white text-sm rounded px-2 py-1.5 border border-up-blue-700"
            >
              <option value="">Alle klanten</option>
              {clients.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        )}

        <nav className="flex-1 py-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive =
              router.pathname === item.href ||
              (item.href !== '/' && router.pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-up-blue-800 text-white border-r-4 border-up-orange'
                    : 'text-blue-100 hover:bg-up-blue-800 hover:text-white'
                }`}
              >
                {Icon && <Icon size={18} />}
                {sidebarOpen && <span className="ml-3">{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 overflow-auto bg-ghost-white">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
