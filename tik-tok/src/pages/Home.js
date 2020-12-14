import FollowerColumn from '../components/FollowersColumn'

const Home = () => {
    return (
        <div className="container">
            <h1>Home</h1>
            <FollowerColumn />
            <div className="feed">
                <h1>Home</h1>
            </div>
            <div className="suggested-box"></div>
        </div>
    );
}

export default Home;
