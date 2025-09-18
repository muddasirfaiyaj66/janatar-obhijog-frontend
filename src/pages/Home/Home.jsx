import { Translator } from "../../Components/tans";

const Home = () => {



  return (
    <div>
      <div className="min-h-screen bg-gray-100 font-sans">
        <main className="container mx-auto p-8 pt-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-tight">
            Welcome to the Digital Complaint Box
          </h1>
          <p className="mt-4 text-lg text-center text-gray-600 max-w-2xl mx-auto">
            This is a placeholder for your main application content. The
            responsive navbar above is ready to be used.
          </p>
        </main>
        {/* // experimenting the react-i18n */}
        <div>
          <Translator></Translator>
        </div>
      </div>
    </div>
  );
};

export default Home;
