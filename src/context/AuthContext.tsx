// import { createContext, useState } from 'react';
// import type { ReactNode } from 'react';
// import Cookies from 'js-cookie';
// import Router from 'next/router';

// import { AuthRepository } from '../repositories/AuthRepository';
// import { LoginData } from '../interfaces/LoginData';
// import { GetUser } from '../interfaces/User';
// import { Api } from '../services/Api';
// import { UserRepository } from '../repositories/UserRepository';


// type AuthContextType = {
//   isAuthenticated: boolean;
//   user: GetUser;
//   signIn: (data: LoginData) => Promise<boolean>;
//   logOut: () => void;
//   autoLogin: () => Promise<boolean>;
// };

// type AuthProvider = {
//   children: ReactNode;
// };

// // [] Arrumar o contexto para mudar o tema do site
// export const AuthContext = createContext({} as AuthContextType);

// export function AuthProvider({ children }: AuthProvider) {
//   const [user, setUser] = useState<GetUser | null>(null);

//   const [isAuthenticated, setAuthenticated] = useState(false);

//   const signIn = async ({ email, password }: LoginData) => {
//     const { token } = await AuthRepository.login(email, password);

//     if (token) {
//       Cookies.set('token', token);
//       const { data } = await AuthRepository.decodeToken();
//       const getUser = await UserRepository.getUsersById(
//         data.data.attributes.id,
//       );
//       setUser(getUser.data.attributes);
//       setAuthenticated(true);

//       return true;
//     }
//     return false;
//   };

//   const logOut = async () => {
//     const token = Cookies.get('token');

//     await AuthRepository.logout(token);
//     setUser(null);
//     setAuthenticated(false);
//     Cookies.remove('token');
//     Router.push('/login');
//     localStorage.removeItem('rowsDataReceived');
//   };

//   const autoLogin = async () => {
//     const token = Cookies.get('token');
//     if (token) {
//       const { data } = await AuthRepository.decodeToken();
//       if (data) {
//         const getUser = await UserRepository.getUsersById(
//           data.data.attributes.id,
//         );
//         setUser(getUser.data?.attributes);
//         setAuthenticated(true);
//         Api.defaults.headers.common.Authorization = `Bearer ${token}`;

//         return true;
//       }
//     }

//     return false;
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated,
//         signIn,
//         user,
//         logOut,
//         autoLogin,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }
