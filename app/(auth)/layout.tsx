import { HardHatIcon } from "lucide-react";
import Image from "next/image";
import React, { Suspense } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">
      <div className="m-auto w-full max-w-md">
        <div className="rounded-xl bg-white shadow-xl overflow-hidden">
          <div className="relative h-48">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D12AQFE8WK_g4oa7w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706192196893?e=2147483647&v=beta&t=4iot-jVKI84eVp3PzFkgQQeke8iQUs_TNS337YnGBOE"
              alt="Smart Helmet"
              layout="fill"
              objectFit="cover"
              className="brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <HardHatIcon className="mx-auto h-16 w-16 mb-2" />
                <h1 className="text-3xl font-bold">SMC</h1>
                <p className="text-xl">Secure Motorcycle Companion</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-6">
            <Suspense
              fallback={
                <div className="text-center flex-center-center">Loading...</div>
              }
            >
              {children}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
