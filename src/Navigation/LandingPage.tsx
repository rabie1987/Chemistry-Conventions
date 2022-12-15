import DefaultLayout from "../Page Layouts/Default";

const Landing: React.FC = () => {
  return (
    <DefaultLayout title="About the project">
      <div className="text-standard bg-standard mx-auto w-1/2 rounded-lg p-4 text-center text-lg">
      An interactive website for learning the many naming conventions and formula of chemistry.
      </div>
    </DefaultLayout>
  );
};

export default Landing;
