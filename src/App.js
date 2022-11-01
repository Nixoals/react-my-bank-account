import Header from './components/Header';
import Accounts from './components/Accounts';
import data from './data.json';
import './App.css';

function App() {
	return (
		<>
			<header>
				<Header></Header>
			</header>
			{data.map((element, index) => {
				return <Accounts key={index} data={element}></Accounts>;
			})}
		</>
	);
}

export default App;
