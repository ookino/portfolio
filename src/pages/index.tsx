import { NextPageWithLayout } from '@/components/common/layout';
import { getLayout } from '@/components/common/layout';
import { HomePage } from '@/components/pages/home';

const Home: NextPageWithLayout = () => {
  return <HomePage />;
};

Home.getLayout = getLayout;
export default Home;
