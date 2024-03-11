import Link from "next/link";
const SuccessMessage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-color-bg_primary-500">
      <div className="mx-auto w-full max-w-lg text-center">
        <h2 className="my-4 text-center text-h2Size font-bold">
          Password Changed successfullly
        </h2>
        <Link
          href="/login"
          className="hover:text-underline text-sm text-color-primary"
        >
          Go back to Login
        </Link>
      </div>
    </div>
  );
};

export default SuccessMessage;
