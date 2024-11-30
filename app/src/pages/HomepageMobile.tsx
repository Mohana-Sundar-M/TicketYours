
import Navbar from '../components/mobileHomePage/Navbar';
import BannerCarousel from '../components/mobileHomePage/BannerCarousel';
import MovieList from '../components/mobileHomePage/MovieList'; // MovieList will handle the API call
import Footer from '../components/mobileHomePage/Footer';
import BottomNavBar from '../components/public/BottomNavBar';



const HomePage: React.FC = () => {
  

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Banner Carousel */}
      <BannerCarousel />

      {/* Movie List or No Movies Illustration */}
      <div className="flex-grow">
        <MovieList /> {/* Pass cityId to MovieList */}
      </div>

      {/* Footer */}
      <Footer />

      {/* Bottom Nav Bar for Mobile */}
      <div className="fixed bottom-0 w-full bg-white shadow-md lg:hidden">
        <BottomNavBar />
      </div>
    </div>
  );
};

export default HomePage;
