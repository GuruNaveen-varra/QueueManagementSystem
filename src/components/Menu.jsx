import tailwindImage from "../assets/image.png";
const MenuCard = ({ title = "Tailwind" }) => {
  return (
    <div className="w-72 bg-white shadow-lg rounded-2xl p-4 m-2">
      <img className="w-full  rounded-xl" src={tailwindImage} alt="Tech" />

      <h1 className="text-xl font-bold mt-1 text-red-500 ">{title}</h1>

      <p className="text-sm text-gray-600 mt-2">
        Backend JavaScript runtime for scalable apps
      </p>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl">
        View More
      </button>
    </div>
  );
};

export default MenuCard;
