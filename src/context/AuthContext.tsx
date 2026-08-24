import React, { useEffect, useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  type User 
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from '../firebase.ts';
import { AuthContext } from './AuthContextDefinition.ts';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(() => Boolean(auth));
  const isConfigured = isFirebaseConfigured();

  useEffect(() => {
    if (!auth) {
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, pass: string) => {
    if (!auth) {
      throw new Error('Firebase is not configured yet. Please add your Firebase credentials in the .env file.');
    }
    await signInWithEmailAndPassword(auth, email, pass);
  };

  const logout = async () => {
    if (!auth) return;
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, isConfigured, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
