import UserSelect from "../Components/UserSelect/UserSelect";

const Home = () => {
  return (
    <main className="home">
      <h1>Veuillez selectionner un utilisteur</h1>
      <nav className="selector">
        <UserSelect user={12} />
        <UserSelect user={18} />
      </nav>
    </main>
  );
};

export default Home;
