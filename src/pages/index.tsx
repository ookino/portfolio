import { NextPageWithLayout } from '../components/global/layout';
import { getLayout } from '../components/global/layout';
import { HomePage } from '../components/pages/home';
const Home: NextPageWithLayout = () => {
  return <HomePage />;
};

Home.getLayout = getLayout;

export default Home;
