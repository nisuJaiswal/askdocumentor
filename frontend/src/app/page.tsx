"use client";
import { useSession } from "next-auth/react";
import Home from "../components/Home/Home";
import { useRouter } from "next/navigation";
function App() {
  const { data: session } = useSession();

  const router = useRouter();
  console.log(session);
  if (!session) router.push("/register");
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
