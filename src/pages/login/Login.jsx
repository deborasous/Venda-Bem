import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../service/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import ButtonForm from "../../components/buttons/largeButton/LargeButton";
import imageLogin from "../../assets/general/imageLogin.svg";
import "./Login.sass";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return console.log(user, "ggg");
  }

  return (
    <main id="login" className="containerBlock containerInline">
      <div className="content">
        <div>
          <img
            src={imageLogin}
            className="login-image"
            alt="Imagem ilustrativa em svg, mulher ao lado de um computador"
          />
        </div>
        <div className="form">
          <form className="form-group">
            <input
              className="form-input"
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-input"
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonForm type="submit" name="Enviar" onClick={handleSignIn}>
              Entrar
            </ButtonForm>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;

// const inicialState = {
//   email: "",
//   password: "",
// };

// const Login = ({ setActive }) => {
//   const { register, handleSubmit } = useForm();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   // if (error) {
//   //   return (
//   //     <div>
//   //       <p>Error: {error.message}</p>
//   //     </div>
//   //   );
//   // }
//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }

//   const onSubmit = () => {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         console.log("Usuário autenticado com sucesso: ", userCredential.user);
//       })
//       .catch((error) => {
//         console.error("Erro ao autenticar usuário: ", error);
//       });
//   };

//   // const handlerAuth = async (e) => {
//   //   e.preventDefault();
//   //   if (!signUp) {
//   //     if (email && password) {
//   //       const { user } = await signInWithEmailAndPassword(
//   //         auth,
//   //         email,
//   //         password
//   //       );
//   //       setActive("/cadastrar-produto");
//   //     }
//   //   } else {
//   //     return toast.error("Email ou senha inválidos");
//   //   }
//   //   navigate("/cadastrar-produto");
//   // };

//   return (
//     <>
//       <main id="login" className="containerBlock containerInline">
//         <div className="content">
//           <div>
//             <img
//               src={imageLogin}
//               className="login-image"
//               alt="Imagem ilustrativa em svg, mulher ao lado de um computador"
//             />
//           </div>

//           <div className="form">
//             <div className="text">
//               <h2 className="textSign">Login</h2>
//               <p>Somente para Administradores do site.</p>
//               <hr />
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)} className="form-group">
//               <div>
//                 <label htmlFor={"loginEmail"} className="sr-only">
//                   Email
//                 </label>
//                 <input
//                   className="form-input"
//                   placeholder="Email"
//                   required
//                   type="email"
//                   {...register("email")}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label htmlFor={"loginPassword"} className="sr-only">
//                   Senha
//                 </label>
//                 <input
//                   name="password"
//                   id="loginPassword"
//                   className="form-input"
//                   placeholder="Senha"
//                   autoComplete="off"
//                   required
//                   type="password"
//                   {...register("password")}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>

//               <ButtonForm type="submit" size="large" className="btn">
//                 Entrar
//               </ButtonForm>
//             </form>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Login;
