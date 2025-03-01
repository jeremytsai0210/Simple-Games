import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import HomePage from '../components/HomePage';
import TicTacToe from '../components/TicTacToe';
import ConnectFour from '../components/ConnectFour';
import Snake from '../components/Snake';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "tic-tac-toe",
        element: <TicTacToe />,
      },
      {
        path: "connect-four",
        element: <ConnectFour />,
      },
      {
        path: "snake",
        element: <Snake />,
      },
    ],
  },
]);