
function descriptionBuilder(selectedData) {
	return selectedData;
}

function htmlElementBuilder({
	fieldName,
	filter,
	setFilter,
}{
	const list = document.createElement('ul');
	list.className = 'inline-scroller mx-n2 px-2';

	const userStauts = ['Active','Inactive'];
	
	const userStatusRadios = [];
	userStauts.forEach(function(status){
		const listElement = document.createElement('li');
		listElement.className = 'pb-1 pt-1';
		const wrapperElement = document.createElement('div');
		wrapperElement.className = 'custom-control custom-checkbox custom-control-outside';
		const labelElement = document.createElement('label');
		const inputElement = document.createElement('input');
		inputElement.name = 'user-status';
		inputElement.id = status;
		inputElement.className = 'custom-control-input';
		inputElement.ariaLabel = status;
		inputElement.value = status;
		inputElement.type = 'radio';
		const spanElement =  document.createElement('span');
		spanElement.className = 'custom-control-label';
		spanElement.innerText = status;

		list.appendChild(listElement);
		listElement.appendChild(wrapperElement);
		wrapperElement.appendChild(labelElement);
		labelElement.appendChild(inputElement);
		labelElement.appendChild(spanElement);

		userStatusRadios.push(inputElement);
	})

	
	const button = document.createElement('button');

	button.className = 'btn btn-block btn-secondary btn-sm mt-2';
	button.innerText = 'Add Filter';
	button.onclick = () =>{
		const status = userStatusRadios[0].checked ? 0:5;
		setFilter({
			selectedData: `status eq ${status}`,
		});
	}

	const div = document.createElement('div');

	div.className = 'dropdown-item';

	div.appendChild(list);
	div.appendChild(button);

	return div;
}

function oDataQueryBuilder(selectedData) {
	return selectedData;
}

const fdsFilter = {
	descriptionBuilder,
	htmlElementBuilder,
	oDataQueryBuilder,
};

export default fdsFilter;
