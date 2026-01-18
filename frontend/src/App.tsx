import { type FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Layout from "./components/layout";
import Protected from "./components/protected";
import Detail from "./pages/detail";
import Create from "./pages/cretate";
import Edit from "./pages/edit";

const App: FC = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route
              path="/dashboard"
              element={
                <Protected allowedRoles={["admin"]}>
                  <Dashboard />
                </Protected>
              }
            />
            <Route
              path="/dashboard/create"
              element={
                <Protected allowedRoles={["admin"]}>
                  <Create />
                </Protected>
              }
            />
            <Route
              path="/dashboard/edit/:id"
              element={
                <Protected allowedRoles={["admin"]}>
                  <Edit />
                </Protected>
              }
            />
            <Route
              path="/shoe/:id"
              element={
                <Protected allowedRoles={["user", "admin"]}>
                  <Detail />
                </Protected>
              }
            ></Route>
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
