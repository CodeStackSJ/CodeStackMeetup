function getAPI() {
	console.log('getting local users');
	requestDocument = {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
	}
	fetch('http://localhost:62237/api/users', requestDocument)
		.then(response => {
			console.log(response);
			response.json().then(
				data => {
					console.log(data);
					let display = document.getElementById('get-data-API');
					display.innerText = JSON.stringify(data);
				}
			)
		});
}

function putAPI() {
	console.log('updating local user');
	const data = {
		FirstName: 'Spider',
		LastName: 'Man',
		Email: 'web.slinger@marvel.com',
		Title: 'Super Hero',
		Department: 'Marvel Movies',
		Phone: '827-398-0293',
		Role: null
	}

	requestDocument = {
		method: 'PUT', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}

	fetch('http://localhost:62237/api/users/1002', requestDocument)
		.then(response => {
			console.log(response);
			response.json().then(
				data => {
					console.log(data);
					let display = document.getElementById('put-response-API');
					display.innerText = JSON.stringify(data);
				}
			)
		});
}


function postAPI() {
	console.log('posting new event');
	const data = {
		title: "Christmas Toy drive",
		description: "Need help organizing and Delivering Toys",
		startDate: "2018-01-19T00:00:00-08:00",
		endDate: "2018-01-19T00:00:00-11:00",
		contactName: "Santa Clause",
		contactEmail: "sclause@northpole.com",
		numOfVolunteers: "100",
		registerBy: "2018-01-19T00:00:00-10:00",
		requirements: "Super long requirements with lots to say about lots of things. Fox in socks. Knox in box. Knock on box on fox in socks. Fox in socks on knox in box.",
		eventTypeId: "2",
		location: "East Maple St, Stockton, CA",
		userId: "1"
	}
	requestDocument = {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}
	fetch('http://localhost:62237/api/events', requestDocument)
		.then(response => {
			console.log(response);
			response.json().then(data => {
				console.log(data);
				let display = document.getElementById('post-response-API');
				display.innerText = JSON.stringify(data);
			})
		});
}

function deleteAPI() {
	console.log('Deleting user');
	requestDocument = {
		method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
	}
	fetch('http://localhost:62237/api/users/1003', requestDocument)
		.then(response => {
			console.log(response);
			response.json().then(
				data => {
					console.log(data);
					let display = document.getElementById('delete-response-API');
					display.innerText = JSON.stringify(data);
				}
			)
		});
}
