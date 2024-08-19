import FormLogin from "@/components/auth/FormLogin/FormLogin";
import Loader from "@/components/common/Loader";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<Loader />}>
        <FormLogin isRegister />
      </Suspense>
    </div>
  );
}
