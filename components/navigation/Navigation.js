import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="border-b-2 border-indigo-500 mb-5">
      <ul className="flex justify-around px-4 py-4 bg-grey-300">
        <li className="px-4 py-2 font-bold text-white bg-blue-700 rounded-full hover:bg-blue-700">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="px-4 py-2 font-bold text-white bg-blue-700 rounded-full hover:bg-blue-700">
          <Link href={"/add-blog"}>Add Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
