import SignUpForm from "@/components/Forms/SignUpForm";
import { Toaster } from "@/components/ui/toaster";
//import { useState } from 'react';
const Register = () => {
  //const [show, setShow] = useState({ password: false, cpassword: false })

  return (
    <>
      <SignUpForm />
      <Toaster/>
    </>
  );
};
export default Register;
