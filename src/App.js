import * as WebBrowser from 'expo-web-browser';
import {
    onAuthStateChanged
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './auth/firebaseConfig';
import { Home } from './components/pages/Home/Home.page';
import { Loading } from './components/pages/Loading/Loading.page';
import LoginPage from './components/pages/Login';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Listen for authentication state changes
  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  if (loading) {
    <Loading />
  }

  // If the user is logged in, show the Home page
  if (user) {
    return (
      <Home userEmail={user.email} />
    );
  }

  return (
    <div>
      {/* If the user is not logged in, show the Login page */}
      <LoginPage />
    </div>
  );
}
