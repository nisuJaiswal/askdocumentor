import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  const styles = {
    background: "url('../Assets/img1.jpg')",
    backgroundRepeat: "no-repeat",
    Position: "absolute",
    inset: 0,
    width: "100%",
    height: "90%",
    size: "cover",
    borderRadius: "50px",
    backgroundPosition: "45%",
    zIndex: 1,
  };
  return (
    <div className="flex h-screen bg-blue-400">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className="relative overflow-hidden">
          {/* <div className={styles.cartoonimg}></div> */}
          <img src="/img1.jpg" alt="image" style={styles} />
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
