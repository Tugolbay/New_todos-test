import Link from "next/link";

interface header {
  title: string;
}

export const Header = ({ title }: header) => {
  return (
    <header className="task fixed top-0 w-[100%] h-[10vh] flex items-center justify-between px-[2rem]">
      <h2 className="text-[1.5rem] text-[600] text-white flex items-center">
        {title}
      </h2>
      <Link
        href="/"
        className="text-white cursor-pointer transition-colors duration-700 hover:text-[red]"
      >
        HOME
      </Link>
    </header>
  );
};
