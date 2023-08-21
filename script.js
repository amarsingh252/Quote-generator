const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a8306add9emsh373f5995748f434p12dccdjsn8569acb481d6',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then((response) => {
        console.log(response);
        console.log(response.content);
        container.innerHTML = response.content;
    })
	.catch(err => console.error(err));