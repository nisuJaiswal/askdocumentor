import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
//import { useState } from 'react';
const Register = () => {
  //const [show, setShow] = useState({ password: false, cpassword: false })

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="text"
              name="Username"
              placeholder="Username"
              className={styles.inputfield}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.inputfield}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type="password"
              //type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="password"
              className={styles.inputfield}
            />
            <span
              className="icon flex items-center px-4"
              //</div>onClick={() => setShow({ ...show, password: !show.password})}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
              type="password"
              // type={`${show.cpassword ? "text" : "password"}`}
              name="cpassword"
              placeholder="Confirm Password"
              className={styles.inputfield}
            />
            <span
              className="icon flex items-center px-4"
              //</div>onClick={() => setShow({ ...show, cpassword: !show.cpassword})}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Signup
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          Have an account?{" "}
          <Link href={"/login"}>
            <p className="text-blue-700">Sign In</p>
          </Link>
        </p>
      </section>
    </>
  );
};
export default Register;
