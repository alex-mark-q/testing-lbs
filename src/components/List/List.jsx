const List = (props) => {
	const { items = [] } = props;
	if(!items.length) return null;
	return (
		<>
			<ul className = "list">
				{
					items.map(el => {
						<li key = {el}>{el}</li>
					})
				}
			</ul>
			<span>html</span>
		</>
	)
}

export default List;