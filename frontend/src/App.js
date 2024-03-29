import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import { useEffect } from "react";
import AdminPanel from "./components/Admin/AdminPanel";
import Timeline from "./components/Admin/TimeLine";
import Loader from "./components/Loader/Loader";

function App() {
	const dispatch = useDispatch();

	const { isAuthenticated } = useSelector((state) => state.login);
	const { loading, user } = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(getUser());
		dispatch(loadUser());
	}, [dispatch]);

	return (
		<Router>
			{loading ? (
				<Loader />
			) : (
				<>
					<Header />
					<Routes>
						<Route
							path="/"
							element={
								<Home
									timelines={user.timeline}
									skills={user.skills}
								/>
							}
						/>
						<Route
							path="/about"
							element={<About about={user.about} />}
						/>
						<Route
							path="/account"
							element={
								isAuthenticated ? <AdminPanel /> : <Login />
							}
						/>
						<Route
							path="/admin/timeline"
							element={isAuthenticated ? <Timeline /> : <Login />}
						/>
					</Routes>
					<Footer />
				</>
			)}
		</Router>
	);
}

export default App;
