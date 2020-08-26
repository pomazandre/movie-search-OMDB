const URL = 'http://www.omdbapi.com/?apikey=b6b0ae6d';


export class Service {

  get(search, page) {
    if (typeof page !== 'string') {
      page = '1';
    }
    return fetch(URL + '&s=' + search + '&page=' + page);
  }
}

const service = new Service();
export default service;

