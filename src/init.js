'use strict';

window.onload = () => {
	// set the initial state for your app
	app.state = deepClone(initialState);
	console.log('app:', app);

	// render initial view and attach event listeners
	const todosView = renderTodos(app._stateToday.todos);
	todosView.addEventListener('change', toggleCompletedHandler); // event delegation!
	document.getElementById('placeList').appendChild(todosView);

	// log the initiation
	logger.push({
		initialState,
		app,
		view: todosView,
	});
};
