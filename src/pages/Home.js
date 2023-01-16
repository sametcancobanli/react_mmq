

function Home() {

    const isLoggedIn = localStorage.getItem('demoToken');
    if (isLoggedIn == null) {
        window.location.href = '/login';
    }
    return ( 
    <div className="home">
        Welcome!
    </div>
     );
}

export default Home;