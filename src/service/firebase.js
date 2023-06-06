import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5NvLvapX5GS015E0bg5IW2nuzIVTLpyo",
  authDomain: "venda-bem-solucoes.firebaseapp.com",
  projectId: "venda-bem-solucoes",
  storageBucket: "venda-bem-solucoes.appspot.com",
  messagingSenderId: "11778309922",
  appId: "1:11778309922:web:c8585fa7dfae32a4acaf7b",
  measurementId: "G-B2F3959E54",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";

// firebase.initializeApp({
//   apiKey: "AIzaSyD5NvLvapX5GS015E0bg5IW2nuzIVTLpyo",
//   authDomain: "venda-bem-solucoes.firebaseapp.com",
//   projectId: "venda-bem-solucoes",
//   storageBucket: "venda-bem-solucoes.appspot.com",
//   messagingSenderId: "11778309922",
//   appId: "1:11778309922:web:c8585fa7dfae32a4acaf7b",
//   measurementId: "G-B2F3959E54",
// });

// console.log(firebase, "ashgdhja");

// export default firebase;
