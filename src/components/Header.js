import logo from '../images/logoBit.png';

const Logo = () => {
	return (
		<>
			<div className="bank-logo">
				<img src={logo} alt="logo Bank"></img>
			</div>
		</>
	);
};

const User = (props) => {
	return (
		<>
			<div className="user-container">
				<div>{props.username}</div>
				<ion-icon name="person-outline"></ion-icon>
			</div>
		</>
	);
};

const Header = () => {
	return (
		<>
			<div className="header-container">
				<Logo></Logo>
				<User username={'Nixoals'}></User>
			</div>
		</>
	);
};

export default Header;
