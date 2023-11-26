import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

  return (
    <div>
      <div>Hola Usuarios</div>
      {user.email !== null ? (
        <div>Usuario logueado: {user.email}</div>
      ) : (
        <div>Usuario no logueado</div>
      )}
    </div>
  );
};

export default Page;
