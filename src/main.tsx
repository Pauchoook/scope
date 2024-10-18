import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from './shared/config/firebase/index.ts';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const fireStore = getFirestore();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
