const List = (props) => {
	const { items = [] } = props;
	if(!items.length) return null;
	console.log(items);
	return (
		<>
			<ul className = "list">
				{
					items.map(el => {
						<li key = {el}>{el}</li>
					})
				}
			</ul>
			
		</>
	)
}

export default List;