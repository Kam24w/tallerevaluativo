"use client";

import { useState } from "react";
import {
  Search,
  ChevronLeft,
  Bell,
  Home as HomeIcon,
  ShoppingCart,
  ShoppingBag,
  Package,
  BarChart2,
  Megaphone,
  MessageSquare,
  LogOut,
  ChevronDown,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  Users,
  Calendar,
  Check,
  Upload,
  ArrowUpRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* SVG Logos & Icons                                                  */
/* ------------------------------------------------------------------ */

function FlexLogo() {
  return (
    <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <path
          d="M 50 2 C 58 2, 88 18, 93 25 C 98 32, 98 68, 93 75 C 88 82, 58 98, 50 98 C 42 98, 12 82, 7 75 C 2 68, 2 32, 7 25 C 12 18, 42 2, 50 2 Z"
          fill="#FF9F00"
        />
      </svg>
      <span className="relative z-10 font-black text-white text-lg">R</span>
    </div>
  );
}

function JiraIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M11.571 11.429H0a11.571 11.571 0 0 0 11.571 11.571V11.429z" fill="#2684FF" />
      <path d="M12.429 0h11.571a11.571 11.571 0 0 1-11.571 11.571V0z" fill="#2684FF" />
      <path d="M12.429 11.429h11.571A11.571 11.571 0 0 1 12.429 23V11.429z" fill="#0052CC" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path d="M6 15a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1.5a2.5 2.5 0 1 1 5 0V20a2.5 2.5 0 1 1-5 0v-3.5z" fill="#E01E5A" />
      <path d="M9 6a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm-1.5 0a2.5 2.5 0 1 1 0 5H4a2.5 2.5 0 1 1 0-5h3.5z" fill="#36C5F0" />
      <path d="M18 9a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0-1.5a2.5 2.5 0 1 1-5 0V4a2.5 2.5 0 1 1 5 0v3.5z" fill="#2EB67D" />
      <path d="M15 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm1.5 0a2.5 2.5 0 1 1 0-5H20a2.5 2.5 0 1 1 0 5h-3.5z" fill="#ECB22E" />
    </svg>
  );
}

function IntercomIcon() {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#1F8DED]">
      <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.63-.78A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Gráficos                                                           */
/* ------------------------------------------------------------------ */

function SessionsChart() {
  const pathD = "M 0 82 C 20 80, 25 50, 45 50 C 65 50, 75 75, 95 75 C 120 75, 135 40, 160 40 C 185 40, 200 78, 225 78 C 255 78, 275 10, 300 8";

  return (
    <div className="relative h-40 w-full pt-2">
      <div className="absolute left-0 top-0 flex h-full flex-col justify-between text-[11px] font-semibold text-gray-400">
        <span>15</span>
        <span>10</span>
        <span>5</span>
        <span>0</span>
      </div>

      <svg
        viewBox="0 0 300 90"
        preserveAspectRatio="none"
        className="ml-6 h-full w-[calc(100%-1.5rem)] overflow-visible"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#4F46E5" floodOpacity="0.35" />
          </filter>
        </defs>

        <line x1="0" y1="5" x2="300" y2="5" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="0" y1="33" x2="300" y2="33" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="0" y1="61" x2="300" y2="61" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="0" y1="88" x2="300" y2="88" stroke="#E5E7EB" strokeWidth="1" />

        <path
          d={pathD}
          fill="none"
          stroke="#4F46E5"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
}

function ConversionGauge() {
  return (
    <div className="relative flex flex-col items-center justify-center pt-2">
      <svg viewBox="0 0 200 110" className="w-60">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#EEF2FF"
          strokeWidth="28"
          strokeLinecap="round"
        />
        <path
          d="M 20 100 A 80 80 0 0 1 160 55"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="28"
          strokeLinecap="round"
        />
      </svg>
      <div className="-mt-14 text-center">
        <p className="text-3xl font-extrabold text-[#111827]">58,19%</p>
        <p className="mt-1 flex items-center justify-center gap-0.5 text-xs font-bold text-emerald-500">
          <ArrowUp size={12} /> 3.5%
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Componente Principal                                               */
/* ------------------------------------------------------------------ */

export default function Dashboard() {
  const [active, setActive] = useState("Dashboard");

  return (
    <main className="min-h-screen bg-[#EEF1F5] p-4 md:p-8 flex items-center justify-center font-sans">
      {/* TARJETA BLANCA CONTENEDORA DE TODO EL APLICATIVO */}
      <div className="w-full max-w-[1440px] rounded-[36px] bg-white p-6 md:p-8 shadow-xl border border-gray-100 flex gap-8">
        
        {/* SIDEBAR DENTRO DE LA TARJETA BLANCA */}
        <aside className="hidden w-56 shrink-0 flex-col pr-4 border-r border-gray-100/80 md:flex">
          <div className="mb-8 flex items-center gap-3 px-2">
            <FlexLogo />
            <span className="text-2xl font-black tracking-tight text-[#111827]">flex</span>
          </div>

          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
            Menu
          </p>

          <nav className="flex flex-col gap-1">
            {[
              { label: "Dashboard", icon: HomeIcon },
              { label: "Orders", icon: ShoppingBag, hasSub: true },
              { label: "Products", icon: Package, hasSub: true },
              { label: "Analytics", icon: BarChart2 },
              { label: "Marketing", icon: Megaphone, hasSub: true },
              { label: "Messages", icon: MessageSquare, badge: 25 },
            ].map(({ label, icon: Icon, hasSub, badge }) => {
              const isActive = active === label;
              return (
                <button
                  key={label}
                  onClick={() => setActive(label)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition-all ${
                    isActive
                      ? "bg-[#4F46E5] text-white shadow-lg shadow-[#4F46E5]/25"
                      : "text-slate-800 hover:bg-gray-100"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} className={isActive ? "text-white" : "text-slate-800"} />
                    {label}
                  </span>
                  {badge && (
                    <span className="rounded-full bg-[#10B981] px-2 py-0.5 text-[10px] font-bold text-white">
                      {badge}
                    </span>
                  )}
                  {hasSub && (
                    <ChevronDown size={14} className={isActive ? "text-white" : "text-slate-800"} />
                  )}
                </button>
              );
            })}
          </nav>

          <p className="mb-3 mt-8 px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
            Integrations
          </p>
          <div className="flex flex-col gap-1">
            {[
              { label: "Jira", icon: JiraIcon },
              { label: "Slack", icon: SlackIcon },
              { label: "Intercom", icon: IntercomIcon },
            ].map(({ label, icon: Icon }) => (
              <button
                key={label}
                className="flex items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-gray-100"
              >
                <Icon />
                {label}
              </button>
            ))}
          </div>

          <button className="mt-auto flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-slate-800 hover:bg-gray-100">
            <LogOut size={18} className="text-slate-800" />
            Logout
          </button>
        </aside>

        {/* SECCIÓN DE CONTENIDO DENTRO DE LA TARJETA BLANCA */}
        <section className="flex-1 min-w-0 flex flex-col">
          {/* BARRA SUPERIOR DE BÚSQUEDA */}
          <header className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 max-w-md">
              <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F4F7] text-gray-400 hover:bg-gray-200">
                <ChevronLeft size={18} />
              </button>

              <div className="flex flex-1 items-center gap-2 rounded-full bg-[#F2F4F7] px-4 py-2.5">
                <Search size={16} className="text-gray-400" />
                <input
                  placeholder="Search"
                  className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex items-center gap-5">
              <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F4F7] text-gray-400">
                <Bell size={18} />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#4F46E5] text-[9px] font-bold text-white">
                  1
                </span>
              </button>

              <div className="text-right">
                <p className="text-[10px] font-bold uppercase text-gray-400">Your Balance</p>
                <p className="text-sm font-black text-[#4F46E5]">$5.456</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-amber-200 bg-amber-100">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-sm font-bold text-[#111827]">Hi, Lay</span>
              </div>
            </div>
          </header>

          {/* TÍTULO Y BOTONES SUPERIORES */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#281838] text-white">
                <HomeIcon size={20} fill="currentColor" />
              </div>
              <h1 className="text-2xl font-extrabold tracking-tight text-[#111827]">Dashboard</h1>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm">
                <Calendar size={14} className="text-gray-400" />
                This Month
                <ChevronDown size={14} className="text-gray-400" />
              </button>
              <button className="flex items-center gap-2 rounded-full bg-[#10B981] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#10B981]/20 hover:bg-emerald-600 transition">
                <Upload size={14} />
                Download Report
              </button>
            </div>
          </div>

          {/* CONTENEDOR INTERNO GRIS */}
          <div className="rounded-[28px] bg-[#F2F4F7] p-6 flex-1">
            {/* TARGETAS DE MÉTRICAS (KPIs) */}
            <div className="mb-6 grid gap-6 sm:grid-cols-3">
              {[
                { label: "Total Sales", value: "263k", delta: "15.6%", up: true, icon: ShoppingCart },
                { label: "Total Visitors", value: "35k", delta: "6.2%", up: false, icon: Users },
                { label: "Total Orders", value: "165k", delta: "3.5%", up: true, icon: ShoppingBag },
              ].map(({ label, value, delta, up, icon: Icon }) => (
                <div key={label} className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF2FF] text-[#4F46E5]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400">{label}</p>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-2xl font-extrabold text-[#111827]">{value}</span>
                        <span
                          className={`flex items-center text-xs font-bold ${
                            up ? "text-emerald-500" : "text-rose-400"
                          }`}
                        >
                          {up ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                          {delta}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              {/* GRÁFICO DE SESIONES */}
              <div className="rounded-2xl bg-white p-6 xl:col-span-2 shadow-sm border border-gray-100">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="font-bold text-[#111827]">Online Store Sessions</h2>
                  <button className="rounded-full border border-gray-200 px-4 py-1.5 text-xs font-semibold text-gray-500">
                    View Report
                  </button>
                </div>

                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF2FF] text-[#4F46E5]">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-gray-400">Visitors</p>
                    <p className="text-2xl font-black text-[#111827]">68</p>
                  </div>

                  <div className="ml-auto flex items-center gap-5">
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-500">
                      <ArrowUp size={12} /> 15.6%
                    </span>
                    <span className="text-xs font-bold text-[#4F46E5]">26</span>
                    <span className="flex items-center gap-1 text-xs font-bold text-rose-400">
                      <ArrowDown size={12} /> 1.6%
                    </span>
                  </div>
                </div>

                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-semibold text-gray-500">Sessions Over Time</p>
                  <button className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500">
                    <Calendar size={12} className="text-gray-400" />
                    February
                    <ChevronDown size={12} />
                  </button>
                </div>

                <SessionsChart />

                <div className="mt-6 flex items-center justify-center gap-3">
                  <button className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-400">
                    <ChevronLeft size={14} />
                  </button>
                  {["21", "22", "23", "24", "25"].map((day, i) => (
                    <span
                      key={day}
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                        i === 0
                          ? "bg-[#4F46E5] text-white shadow-md shadow-[#4F46E5]/30"
                          : "text-gray-400"
                      }`}
                    >
                      {day}
                    </span>
                  ))}
                  <button className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-400">
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              {/* COLUMNA DERECHA */}
              <div className="flex flex-col gap-6">
                {/* BANNER PRO - USANDO LA IMAGEN 'fondo' DE LA CARPETA /public */}
                <div className="relative overflow-hidden rounded-3xl bg-[#5252F0] p-6 text-white shadow-md min-h-[170px] flex items-center">
                  <img
                    src="/fondo.svg" 
                    alt="Background Illustration"
                    className="absolute inset-0 h-full w-full object-cover object-right pointer-events-none select-none"
                  />
                  <div className="relative z-10 max-w-[55%]">
                    <h2 className="text-xl font-black leading-tight text-white">
                      Need More Stats?
                    </h2>
                    <p className="mt-1.5 text-xs font-medium text-white/80">
                      Upgrade to pro for added benefits.
                    </p>
                    <button className="mt-4 flex items-center gap-2 rounded-full bg-[#10B981] px-5 py-2.5 text-xs font-black text-white shadow-md hover:bg-emerald-600 transition">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/40 bg-white/20 text-[10px]">
                        ↑
                      </span>
                      Go Pro Now
                    </button>
                  </div>
                </div>

                {/* GRÁFICO CONVERSION */}
                <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                  <h2 className="font-bold text-[#111827]">Conversion</h2>
                  <ConversionGauge />

                  <div className="mt-8 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-medium text-gray-500">
                      <Check size={14} className="text-emerald-500" /> Income{" "}
                      <strong className="text-[#111827] font-bold">$542,317</strong>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium text-gray-500">
                      <ArrowUpRight size={14} className="text-gray-400" /> Expences{" "}
                      <strong className="text-[#111827] font-bold">$497,456</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}