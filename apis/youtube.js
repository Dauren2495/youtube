import axios from 'axios'

const KEY = 'AIzaSyDKKzQ2JqBIt3-0MAxwtTC5GZ22z2snUws';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3', 
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	}
});