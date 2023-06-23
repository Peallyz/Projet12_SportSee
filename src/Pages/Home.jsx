import UserSelect from "../Components/UserSelect/UserSelect";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="home">
        <h1>Veuillez selectionner un utilisteur</h1>
        <nav className="selector">
          <UserSelect user={12} />
          <UserSelect user={18} />
        </nav>
      </main>
    </>
  );
};

export default Home;
