import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

const FailedPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="bg-green-100 p-3 rounded-full mb-5">
            <X className="size-40 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Payment Failed
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Sorry! Your payment has been processed Failed.
          </p>

          <Link href="/products" legacyBehavior>
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FailedPage;
