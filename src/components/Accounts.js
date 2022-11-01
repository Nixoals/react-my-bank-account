const Operation = (props) => {
	const { date, description, amount } = props.operation;
	let newAmount = amount.toFixed(2);

	return (
		<>
			<div className="operation">
				<div>{date}</div>
				<div>{description}</div>
				<div>{newAmount.toLocaleString()} €</div>
			</div>
		</>
	);
};

const Accounts = (props) => {
	const { name, balance, color, operations } = props.data;
	let newBalance = balance.toFixed(2);
	return (
		<>
			<section className="account-container">
				<div className={`account-balance `} style={{ backgroundColor: `${color}` }}>
					<div>{name}</div>
					<div>{newBalance.toLocaleString()} €</div>
				</div>

				<div className="operations-container">
					{operations.map((element, index) => {
						return <Operation key={index} operation={element}></Operation>;
					})}
					<button>SEE MORE</button>
				</div>
				<div className="button-last"></div>
			</section>
		</>
	);
};

export default Accounts;
