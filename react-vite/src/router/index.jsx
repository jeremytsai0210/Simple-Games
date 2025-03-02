import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../components/HomePage";
import LoginFormPage from "../components/LoginFormPage";
import SignupFormPage from "../components/SignupFormPage";
import { games } from "../gamesData";

// Import game components manually
import TicTacToe from "../games/TicTacToe";
import ConnectFour from "../games/ConnectFour";
import Snake from "../games/Snake";

// Map the imported components to the corresponding game paths
const gameComponents = {
  "tic-tac-toe": TicTacToe,
  "connect-four": ConnectFour,
  snake: Snake,
};

// Dynamically create routes for games
const gameRoutes = games.map((game) => ({
  path: `/${game.path}`,
  element: `${gameComponents[game.path]} ? <${gameComponents[game.path]} /> : null,`
}));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginFormPage /> },
      { path: "/signup", element: <SignupFormPage /> },
      ...gameRoutes, // Automatically register game routes
    ],
  },
]);
