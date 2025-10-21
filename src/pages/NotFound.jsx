import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center py-10 px-2">
      <div className="text-center">
        <h1 className="mb-10 text-5xl">This Page Does not exist</h1>

        <button
          onClick={() => navigate("/")}
          className="py-1.5 px-4 inline-block cursor-pointer rounded-b-sm bg-amber-600 text-white"
        >
          Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
