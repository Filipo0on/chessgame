// tslint:disable:no-console
// tslint:disable:no-var-requires
const axios = require('axios');

export default () =>{
return axios.get('/MockData.json')
  .then((response: any) => {
    // handle success
    return response.data.CreatedGames
  })
  .catch((err: any) => {
    // handle error
    console.log('error', err);
  })
}