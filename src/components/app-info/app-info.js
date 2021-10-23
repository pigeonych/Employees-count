import './app-info.css';

const AppInfo = (props) => {
	const {allNum, incrNum} = props;
	return (
		<div className="app-info">
			<h1>Учёт сотрудников в компании N</h1>
			<h2>Общее число сотрудников: {allNum}</h2>
			<h2>Премию получат: {incrNum} </h2>
		</div>
	);
}

export default AppInfo;