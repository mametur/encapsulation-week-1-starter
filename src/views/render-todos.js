const renderTodos = (todosArr) => {
	const Tbody = document.createElement('tbody');

	for (const todo of todosArr) {
		const trEl = document.createElement('tr');
		trEl.className = 'today-row';
		const DivEl = document.createElement('div');
		DivEl.className = 'row';
		const divElSecond = document.createElement('div');
		divElSecond.className = 'col-1';

		const TdEl = document.createElement('td');
		const checkBoxEl = document.createElement('input');
		checkBoxEl.type = 'checkbox';

		checkBoxEl.id = todosArr.indexOf(todo);
		TdEl.appendChild(checkBoxEl);
		divElSecond.appendChild(TdEl);

		const divElThird = document.createElement('div');
		divElThird.dataset.index = todosArr.indexOf(todo);
		divElThird.className = 'col-10';
		const tdElSecond = document.createElement('td');
		tdElSecond.innerHTML = todo.text;
		tdElSecond.id = 'modify';
		tdElSecond.dataset.index = todosArr.indexOf(todo);
		divElThird.appendChild(tdElSecond);

		if (todo.completed) {
			checkBoxEl.setAttribute('checked', true);
			tdElSecond.className = 'line-through';
		}

		const divElFourth = document.createElement('div');
		divElFourth.className = 'col-1 p-0';

		const tdElLast = document.createElement('td');
		const iEl = document.createElement('i');
		iEl.className = 'fa fa-times';
		iEl.dataset.index = todosArr.indexOf(todo);
		tdElLast.appendChild(iEl);
		divElFourth.appendChild(tdElLast);

		DivEl.appendChild(divElSecond);
		DivEl.appendChild(divElThird);
		DivEl.appendChild(divElFourth);

		trEl.appendChild(DivEl);
		Tbody.appendChild(trEl);
	}

	return Tbody;
};

describe(
	'renderTodos: renders a list of todos',
	() => {
		const expect = chai.expect;

		describe('renders no todos', () => {
			const singleTodo = renderTodos([]);
			it('has tagName: "TBODY"', () => {
				expect(singleTodo).to.have.tagName('TBODY');
			});
			it('has childElementCount: 0', () => {
				expect(singleTodo).to.have.property('childElementCount', 0);
			});
		});

		describe('renders a single todo', () => {
			const singleTodo = renderTodos([{ text: 'hello', completed: false }]);
			it('has tagName: "TBODY"', () => {
				expect(singleTodo).to.have.tagName('TBODY');
			});
			it('has childElementCount: 1', () => {
				expect(singleTodo).to.have.property('childElementCount', 1);
			});
			describe('.children[0]', () => {
				const childElement = singleTodo.children[0];
				it('has tagName: "TR"', () => {
					expect(childElement).to.have.tagName('TR');
				});
				it('has text: "hello"', () => {
					expect(childElement).to.have.text('hello');
				});
				it('has childElementCount: 1', () => {
					expect(childElement).to.have.property('childElementCount', 1);
				});
				describe('.children[0]', () => {
					const childChildElement = childElement.children[0];
					it('has tagName: "DIV"', () => {
						expect(childChildElement).to.have.tagName('DIV');
					});
					it('is has class name:"row"', () => {
						expect(childChildElement).to.have.property('className', 'row');
					});
				});
			});
		});

		describe('renders 2 todos', () => {
			const doubleTodo = renderTodos([
				{ text: 'hello', completed: false },
				{ text: 'bye', completed: true },
			]);
			it('has tagName: "TBODY"', () => {
				expect(doubleTodo).to.have.tagName('TBODY');
			});
			it('has childElementCount: 2', () => {
				expect(doubleTodo).to.have.property('childElementCount', 2);
			});
			describe('.children[0]', () => {
				const childElement = doubleTodo.children[0];
				it('has tagName: "TR"', () => {
					expect(childElement).to.have.tagName('TR');
				});
				it('has text: "hello"', () => {
					expect(childElement).to.have.text('hello');
				});
				it('has childElementCount: 1', () => {
					expect(childElement).to.have.property('childElementCount', 1);
				});
				describe('.children[0]', () => {
					const childChildElement = childElement.children[0];
					it('has tagName: "INPUT"', () => {
						expect(childChildElement).to.have.tagName('DIV');
					});
					it('has childElementCount:3 ', () => {
						expect(childChildElement).to.have.property('childElementCount', 3);
					});
				});
			});
			describe('.children[1]', () => {
				const childElement = doubleTodo.children[1];
				it('has tagName: "TR"', () => {
					expect(childElement).to.have.tagName('TR');
				});
				it('has text: "hello"', () => {
					expect(childElement).to.have.text('bye');
				});
				it('has childElementCount: 1', () => {
					expect(childElement).to.have.property('childElementCount', 1);
				});
				describe('.children[0]', () => {
					const childChildElement = childElement.children[0];
					it('has tagName: "DIV"', () => {
						expect(childChildElement).to.have.tagName('DIV');
					});
					it('Has childElementCount: 3', () => {
						expect(childChildElement).to.have.property('childElementCount', 3);
					});
				});
			});
		});
	},
	true
);
