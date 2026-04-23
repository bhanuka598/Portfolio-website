import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppShell from './AppShell';
import pluginConfig from '../config/plugins';

// All available plugins
const allPlugins = {
  about:    lazy(() => import('../plugins/about')),
  projects: lazy(() => import('../plugins/projects')),
  blog:     lazy(() => import('../plugins/blog')),
  contact:  lazy(() => import('../plugins/contact')),
};

// Only activate plugins listed in plugins.json
const activeRoutes = pluginConfig.plugins
  .filter(name => allPlugins[name])
  .map(name => ({
    path: name === 'about' ? '/' : `/${name}`,
    Component: allPlugins[name],
  }));

const router = createBrowserRouter([
  {
    Component: AppShell,
    children: activeRoutes,
  },
]);

export default router;