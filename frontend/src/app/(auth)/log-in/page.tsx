import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import Image from "next/image";
//import { useState } from "react";

export default function Login() {
  //const [show, setShow] = useState(false)
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
        </div>
        <div className="form">
          <form className="flex flex-col gap-5">
            <div className={styles.input_group}>
              <input
                type="email"
                name="email"
                placeholder="email"
                className={styles.inputfield}
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25} />
              </span>
            </div>
            <div className={styles.input_group}>
              <input
                type="password"
                //                       type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="password"
                className={styles.inputfield}
              />

              <span className="icon flex items-center px-4">
                <HiFingerPrint size={25} />
              </span>
            </div>
            <div className="input-button">
              <button type="submit" className={styles.button}>
                Login
              </button>
            </div>
            <div className="input-button">
              <button type="button" className={styles.button_custom}>
                Sign in with Google
                <Image
                  src={"/google.jpg"}
                  alt="Google Imagae"
                  width="20"
                  height={20}
                ></Image>
              </button>
            </div>
            <div className="input-button">
              <button type="button" className={styles.button_custom}>
                Sign in with Github
                <Image
                  src="/github.jpg"
                  alt="git image"
                  width="20"
                  height={20}
                ></Image>
              </button>
            </div>
          </form>
        </div>
        <div className="bottom">
          <p className="text-center text-gray-400">
            dont have an account yet?{" "}
            <Link href={"/register"}>
              <p className="text-blue-700">Click here</p>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
