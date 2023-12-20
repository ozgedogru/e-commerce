const PageButton = () => {
  return (
    <div className="max-w-96 h-20 bg-white   justify-center items-center inline-flex text-sm font-bold ">
      <div className="justify-start inline-flex border border-slim rounded-md">
        <button className="bg-lightgrey sm:p-6 p-2 items-center flex text-pricegrey rounded-md">
          First
        </button>
        <button className="px-5 py-6 bg-white items-center flex text-primary">
          1
        </button>
        <button className="bg-primary px-5 py-6 bg-sky-500 items-center flex text-white">
          2
        </button>
        <button className="px-5 py-6 bg-white items-center flex text-primary">
          3
        </button>
        <button className="sm:p-6 p-2 bg-white items-center flex text-primary rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};
export default PageButton;
