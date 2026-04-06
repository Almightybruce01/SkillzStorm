import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function gamesNavActive(pathname: string, search: string) {
  if (pathname.startsWith('/game/')) return true;
  if (!pathname.startsWith('/games')) return false;
  if (pathname === '/games' && search.includes('view=new')) return false;
  return true;
}

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_0_40px_rgba(0,0,0,0.35)]">
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] gradient-rainbow animate-rainbow opacity-80" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/images/logo.png" alt="SkillzStorm" className="h-8 sm:h-9 w-auto object-contain group-hover:brightness-110 transition-all duration-300" />
          </Link>
          
          {/* Desktop Nav Links */}
          <div className="hidden sm:flex items-center gap-1">
            <NavLink to="/" active={location.pathname === '/'} icon="🏠">Home</NavLink>
            <NavLink to="/games" active={gamesNavActive(location.pathname, location.search)} icon="🎮">Games</NavLink>
            <NavLink
              to="/games?view=new"
              active={location.pathname === '/games' && location.search.includes('view=new')}
              icon="✨"
            >
              New
            </NavLink>
            <NavLink to="/arcade" active={location.pathname === '/arcade'} icon="🕹️" highlight>Arcade</NavLink>
            <NavLink to="/learn" active={location.pathname === '/learn' || location.pathname.startsWith('/learn/')} icon="📘">Learn</NavLink>
            <NavLink to="/vr" active={location.pathname === '/vr'} icon="🥽">VR</NavLink>
            <NavLink to="/store" active={location.pathname === '/store'} icon="🛒">Store</NavLink>
            <Link
              to="/premium"
              className={`relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 overflow-hidden ${
                location.pathname === '/premium'
                  ? 'bg-gradient-to-r from-amber-500/30 to-orange-500/25 text-amber-200 border border-amber-400/40 shadow-md'
                  : 'bg-gradient-to-r from-amber-500/15 to-orange-500/10 text-amber-200/90 hover:from-amber-500/25 hover:to-orange-500/20 border border-amber-400/25 hover:border-amber-300/40'
              }`}
            >
              <span className="relative z-10 flex items-center gap-1">
                👑 Premium
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="sm:hidden text-slate-400 hover:text-cyan-200 p-2 rounded-lg hover:bg-white/5 transition-all active:scale-90"
          >
            <div className="space-y-1.5">
              <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
              <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 pt-2 space-y-1 bg-slate-950/98 backdrop-blur-xl border-t border-cyan-500/15">
          <MobileNavLink to="/" active={location.pathname === '/'} icon="🏠" onClick={() => setMobileOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/games" active={gamesNavActive(location.pathname, location.search)} icon="🎮" onClick={() => setMobileOpen(false)}>Games</MobileNavLink>
          <MobileNavLink to="/games?view=new" active={location.search.includes('view=new')} icon="✨" onClick={() => setMobileOpen(false)}>New games</MobileNavLink>
          <MobileNavLink to="/arcade" active={location.pathname === '/arcade'} icon="🕹️" onClick={() => setMobileOpen(false)}>Arcade</MobileNavLink>
          <MobileNavLink to="/learn" active={location.pathname === '/learn' || location.pathname.startsWith('/learn/')} icon="📘" onClick={() => setMobileOpen(false)}>Learn</MobileNavLink>
          <MobileNavLink to="/schools" active={location.pathname === '/schools'} icon="🏫" onClick={() => setMobileOpen(false)}>For Schools</MobileNavLink>
          <MobileNavLink to="/store" active={location.pathname === '/store'} icon="🛒" onClick={() => setMobileOpen(false)}>Store</MobileNavLink>
          <MobileNavLink to="/vr" active={location.pathname === '/vr'} icon="🥽" onClick={() => setMobileOpen(false)}>VR</MobileNavLink>
          <MobileNavLink to="/about" active={location.pathname === '/about'} icon="ℹ️" onClick={() => setMobileOpen(false)}>About</MobileNavLink>
          <MobileNavLink to="/premium" active={location.pathname === '/premium'} icon="👑" onClick={() => setMobileOpen(false)}>Premium</MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, active, icon, children, highlight }: { to: string; active: boolean; icon: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <Link
      to={to}
      className={`relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 group ${
        active
          ? 'bg-cyan-500/15 text-cyan-300 shadow-sm border border-cyan-500/25'
          : highlight
            ? 'text-fuchsia-300 hover:text-fuchsia-200 hover:bg-fuchsia-500/10 font-extrabold'
            : 'text-slate-400 hover:text-cyan-200 hover:bg-white/5'
      }`}
    >
      {active && (
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
      )}
      <span className="flex items-center gap-1.5">
        <span className={`text-xs transition-transform duration-300 ${active ? '' : 'group-hover:scale-125'}`}>{icon}</span>
        {children}
      </span>
    </Link>
  );
}

function MobileNavLink({ to, active, icon, onClick, children }: { to: string; active: boolean; icon: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-200 active:scale-[0.98] ${
        active
          ? 'bg-cyan-500/15 text-cyan-300'
          : 'text-slate-400 hover:text-cyan-200 hover:bg-white/5'
      }`}
    >
      <span className="text-lg">{icon}</span>
      {children}
    </Link>
  );
}
