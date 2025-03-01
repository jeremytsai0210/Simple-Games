
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <div className="home-page-content">
                <h2>Featured Games</h2>
                <ul className="game-list">
                    <li>
                        <a href="/tic-tac-toe">Tic-Tac-Toe</a>
                    </li>
                    <li>
                        <a href="/connect-four">Connect Four</a>
                    </li>
                    <li>
                        <a href="/snake">Snake</a>
                    </li>
                </ul>
                <h2>About Us</h2>
                <p>Learn more about our games and the team behind them.</p>
                <h2>Contact Us</h2>
                <p>Have questions? Reach out to us!</p>
            </div>
        </div>
    );
}

export default HomePage;