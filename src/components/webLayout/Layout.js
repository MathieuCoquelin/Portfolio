import '../../styles/webLayout/Layout.css';
import Card from './Card'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

function Layout (){ return (
    <div>
        <body className="body">
            <Header/>
            <main className="main">
                <Sidebar/>
                <Card/>
                <Sidebar/>
            </main>
            <Footer/>
        </body>
    </div>
)}

export default Layout