import { Footer, Navbar } from '@components';
import { Hero, YouWillGet, Register } from '@components/LandingPage';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <YouWillGet />
      <Register />
      <Footer />
    </>
  );
}
