/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex justify-around mt-[10rem]">
      <section>
        <Link
          href="/todo"
          className="relative z-50 group transition-all duration-700 ease-in-out"
        >
          <div className="w-[30vw] h-[30vh] relative rounded-lg shadow-md overflow-hidden">
            <img
              className="w-[30vw] h-[30vh]"
              src="https://www.tastingtable.com/img/gallery/plan-your-grocery-list-to-make-your-shopping-trip-more-efficient/make-a-list-and-keep-it-organized-1658437408.jpg"
              alt="Shopping list"
            />
            <div className="absolute inset-0 rounded-lg bg-[#5cb0e9] opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-500">
              <h3 className="text-white">Shopping list</h3>
            </div>
          </div>
        </Link>
      </section>

      <section>
        <Link
          href="/task"
          className="relative z-50 group transition-all duration-700 ease-in-out"
        >
          <div className="w-[30vw] h-[30vh] relative rounded-lg shadow-md overflow-hidden">
            <img
              className="w-[30vw] h-[30vh]"
              src="https://www.evolvetogrow.com.au/wp-content/uploads/2022/11/front-view-open-copybook-with-colorful-pencils-scaled.jpg"
              alt="Daily Routine"
            />
            <div className="absolute inset-0 rounded-lg bg-[#d95ee9] opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-500">
              <h3 className="text-white">Daily Routine</h3>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
