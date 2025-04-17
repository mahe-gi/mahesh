export default function Education() {
  return (
    <div>
      <div className="ps-2 my-2 first:mt-0">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          My Education 👨🏼‍🎓
        </h1>
      </div>
      <div className="flex flex-col text-gray-800 dark:text-white">
        <div className="flex gap-x-3 w-full">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300 dark:after:bg-neutral-700">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>
          <div className="w-full pb-8 pt-2">
            <div className="flex gap-4">
              <img
                className="h-12 w-12 rounded object-cover object-center bg-gray-200 dark:bg-neutral-700"
                src="/Nizam-college-logo.png"
                alt="Nizam Logo"
                width={20}
              />
              <div className="text-base font-medium w-full">
                <h3 className="font-medium text-gray-800 dark:text-gray-100">
                  Nizam college, Hyderabad
                </h3>
                <div className="flex flex-col sm:flex-row justify-between font-normal text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    <span>Master of Computer Applications </span>
                  </p>
                  <p>2022 - 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative ">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>
          <div className="w-full pb-8 pt-2">
            <div className="flex gap-4">
              <img
                className="h-12 w-12 rounded object-cover object-center bg-gray-200 dark:bg-neutral-700"
                src="/Mvs-degree-college.png"
                alt="Mvs-degree-college Logo"
              />
              <div className="text-base font-medium w-full">
                <h3 className="font-medium text-gray-800 dark:text-gray-100">
                  Gov't MVS degree & pg college, Mahabubnagar
                </h3>
                <div className="flex flex-col sm:flex-row justify-between font-normal text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    <span>Bachelor of computer science</span>
                  </p>
                  <p>2019 - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Additional Items as needed */}
      </div>
    </div>
  );
}
