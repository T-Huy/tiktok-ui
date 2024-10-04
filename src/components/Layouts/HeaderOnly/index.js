import Header from '~/components/Layouts/components/Header';
import Footer from '~/components/Layouts/components/Footer';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default HeaderOnly;
