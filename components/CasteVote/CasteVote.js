import Image from "next/image";
import Books from "../../public/books.jpg";
import Earth from "../../public/earth.jpg";
import Pencil from "../../public/pencil.jpg";
import Sun from "../../public/sun.jpg";

function stringToHex(str) {
  let hex = "";

  for (let i = 0; i < str.length; i++) {
    hex += str.charCodeAt(i).toString(16);
  }

  return hex.slice(0, 32);
}

const Vote = () => {
  const candidates = [
    {
      name: "John Doe",
      address: `0x${stringToHex("John Doe")}`,
      img: Earth,
    },
    {
      name: "Jane Doe",
      address: `0x${stringToHex("Jane Doe")}`,
      img: Pencil,
    },
    {
      name: "Rachel Rane",
      address: `0x${stringToHex("Rachel Rane")}`,
      img: Sun,
    },
    {
      name: "Rose Taylor ",
      address: `0x${stringToHex("Rose Taylor")}`,
      img: Books,
    },
  ];
  return (
    <main className="pt-24 px-10 py-3 flex justify-center items-center flex-col">
      <h1 className="text-purple-700 text-3xl">Caste Your vote </h1>

      <div className="min-h-full p-2 m-1 mt-10 w-full flex flex-row flex-wrap gap-4 items-center justify-center">
        {candidates.map((candidate, ind) => (
          <div
            className="h-[400px] p-1 my-10 shadow-lg rounded-md w-full flex flex-col items-center gap-10 md:w-[400px]"
            key={ind}
          >
            <h2 className="text-xl my-5">
              Name:&nbsp;
              <span className="text-2xl text-purple-800">{candidate.name}</span>
            </h2>
            <Image
              src={candidate.img}
              alt={candidate.name}
              width={50}
              height={50}
              className="mix-blend-color-burn min-h-[50px] object-contain"
            />
            <h4 className="text-sm w-[80%] text-center my-4 text-gray-700 border border-gray-700 p-2">
              Pub add : {candidate.address}
            </h4>
            <div class="flex items-center pl-3">
              <input
                id={`horizontal-list-radio-${candidate.address}`}
                type="radio"
                value=""
                name="list-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for={`horizontal-list-radio-${candidate.address}`}
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Select candidate
              </label>
            </div>
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="text-white w-1/3 bg-purple-700 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800"
      >
        Vote
      </button>
    </main>
  );
};

export default Vote;
