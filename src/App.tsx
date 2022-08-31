import { Dashboard } from "./pages/Dashboard";
import { GlobalStyles } from "./styles";
import { CityProvider } from "./pages/Dashboard/WeatherContext";
const App = () => {
	return (
		<CityProvider>
			<GlobalStyles />
			<Dashboard />
		</CityProvider>
	);
};

export default App;
