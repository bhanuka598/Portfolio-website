import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../core-services/ui/Navbar';
import Footer from '../core-services/ui/Footer';
import ScrollToTop from '../core-services/ui/ScrollToTop';
import Spinner from '../core-services/ui/Spinner';

const AppShell = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default AppShell;