import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 
			'Client-ID ba10db23334c60749aa08accc077ab56c1063b86221e977ce8c3cbd9b90adbcb'
	}
});

