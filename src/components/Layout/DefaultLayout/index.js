import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import Footer from '~/components/Layout/components/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
