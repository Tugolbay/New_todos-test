import { Poppins } from "next/font/google";
import HomePage from "~/components/Home";

export const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${poppins.className}`}>
      <div className="block">
        <h1
          className={`text-center text-white text-[700] text-[3rem] mt-4 ${poppins.className}`}
        >
          Todo List
        </h1>

        <HomePage />
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
