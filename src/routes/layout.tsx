import { Link, Outlet } from '@modern-js/runtime/router';

export default function Layout() {
  return (
    <div style={{ fontFamily: 'system-ui', minHeight: '100vh' }}>
      <header
        style={{
          padding: 16,
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          gap: 24,
        }}
      >
        <strong>Apex</strong>
        <nav style={{ display: 'flex', gap: 16 }}>
          <Link to="/">Home</Link>
          <Link to="/memories">Memories</Link>
        </nav>
      </header>
      <main style={{ padding: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}
