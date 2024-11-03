import ForgotPasswordForm from "@/components/Forms/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <div className="bg-white flex flex-col items-center gap-12 rounded-lg md:shadow-md w-full md:w-2/3 lg:w-1/3 px-12 py-10">
      <h1 className="text-[#226ffe] font-bold text-3xl">Forgot Password</h1>
      <ForgotPasswordForm />
    </div>
  );
}
