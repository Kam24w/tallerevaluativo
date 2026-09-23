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
          fill="#69E2FF"
        />
      </svg>
      <span className="relative z-10 font-black text-white text-lg">★</span>
    </div>
  );
}


/* ------------------------------------------------------------------ */
/* Componente Principal                                               */
/* ------------------------------------------------------------------ */

export default function Dashboard() {
  const [active, setActive] = useState("Reporting");

  return (
    <main className="min-h-screen bg-[#EEF1F5] p-4 md:p-8 flex items-center justify-center font-sans">
      {/* TARJETA BLANCA CONTENEDORA DE TODO EL APLICATIVO */}
      <div className="w-full max-w-[1440px] rounded-[36px] bg-white p-6 md:p-8 shadow-xl border border-gray-100 flex gap-8">
        
        {/* SIDEBAR DENTRO DE LA TARJETA BLANCA */}
        <aside className="hidden w-56 shrink-0 flex-col pr-4 border-r border-gray-100/80 md:flex">
          <div className="mb-8 flex items-center gap-3 px-2">
            <FlexLogo />
            <span className="text-2xl font-black tracking-tight text-[#111827]">Boardto</span>
          </div>

          <nav className="flex flex-col gap-1">
            {[
              { label: "Boards", icon: HomeIcon },
              { label: "Plan Schdule", icon: ShoppingBag},
              { label: "Reporting", icon: Package},
              { label: "menssages", icon: BarChart2 },
              { label: "Team Member", icon: Megaphone},
              { label: "Tools Plugin", icon: MessageSquare},
              { label: "Roadmao", icon: HomeIcon },
              { label: "Setting", icon: HomeIcon },
            ].map(({ label, icon: Icon, hasSub, badge }) => {
              const isActive = active === label;
              return (
                <button
                  key={label}
                  onClick={() => setActive(label)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition-all ${
                    isActive
                      ? "bg-[#69E2FF] text-white shadow-lg shadow-[#69E2FF]/25"
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
          <div className="flex flex-col gap-1">
            {[
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

              <div className="flex flex-1 items-center gap-2 rounded-full bg-[#F2F4F7] px-4 py-2.5">
                <Search size={16} className="text-gray-400" />
                <input
                  placeholder="Search"
                  className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex items-center gap-5">
              <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#] text-gray-400">
                <Bell size={18} />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FE8330] text-[9px] font-bold text-white">
                  1
                </span>
              </button>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-amber-200 bg-amber-100">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-sm font-bold text-[#111827]">Augista Ryan</span>


              </div>
            </div>
          </header>

          {/* CONTENEDOR INTERNO GRIS */}

          <div className="rounded-[28px] bg-[#F2F4F7] p-6 flex-1">
            {/* TARGETAS DE MÉTRICAS (KPIs) */}
            <div className="mb-6 grid gap-6 sm:grid-cols-3">
              {[
                { label: "App Development", icon: ShoppingCart },
                { label: "Web Desing",icon: Users },
                { label: "Landing Page", icon: ShoppingBag },
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
              
                {/* GRÁFICO CONVERSION */}
                <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                  <h2 className="font-bold text-[#111827]">Conversion</h2>
                 

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
          
        </section>
      </div>
    </main>
  );
}