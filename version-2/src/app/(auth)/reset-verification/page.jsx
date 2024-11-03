export default function ResetVerification() {
  return (
    <div className="bg-white flex flex-col items-center gap-10 rounded-lg md:shadow-md w-full md:w-2/3 lg:w-1/3 px-12 py-10">
      <div className="space-y-3">
        <h1 className="text-[#226ffe] font-bold text-3xl">
          Reset Verification
        </h1>

        <p className="w-full text-sm text-center">
          Enter the four digit verification code
        </p>
      </div>

      <form className="space-y-6 w-full h-full">
        

        <div>
          <button
            type="submit"
            className="bg-[#226ffe] text-white w-full p-1 font-medium rounded-lg hover:bg-[#324cf3] text-lg"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
}
