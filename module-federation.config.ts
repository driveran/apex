import { createModuleFederationConfig } from '@module-federation/modern-js-v3';

export default createModuleFederationConfig({
  name: 'apex',
  remotes: {
    memories: 'memories@http://localhost:8081/mf-manifest.json',
  },
  shared: {
    react: { singleton: true },
    'react-dom/': { singleton: true },
  },
});
