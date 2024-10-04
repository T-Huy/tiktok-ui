import Header from './Header';
import Footer from './Footer';

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
