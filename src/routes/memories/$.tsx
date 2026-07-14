import { useEffect, useState } from 'react';
import { createRemoteAppComponent } from '@module-federation/modern-js-v3/react';
import { loadRemote } from '@module-federation/modern-js-v3/runtime';

const ErrorBoundary = ({ error }: { error: Error }) => (
  <div>
    <h2>Memories app failed to load</h2>
    <pre style={{ color: 'red' }}>{error.message}</pre>
  </div>
);

const MemoriesApp = createRemoteAppComponent({
  loader: () => loadRemote('memories/app'),
  fallback: ErrorBoundary,
  loading: <div>Loading memories...</div>,
});

// memories only publishes a browser-target remoteEntry (no Node/SSR build),
// so it must never be rendered on the server — mount it client-side only.
function ClientOnlyMemoriesApp() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <MemoriesApp /> : <div>Loading memories...</div>;
}

export default ClientOnlyMemoriesApp;
