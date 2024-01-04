
const Responses = require ('../common/API_Response');

exports.handler = async event => {
      console.log('event', event)

      if(!event.pathParameters || !event.pathParameters.ID){
        //failed without passing ID
        return Responses._400({message: 'missing ID from path'})
      }

      let ID = event.pathParameters.ID;

      if(data[ID]){
        //return data
        return Responses._200(data[ID])
      }

      //failed because id is not present in data
      return Responses._400({message: 'Id not present in data'})

}

const data = {
    1: { name:'Radha', age: 23},
    2: { name:'Sathya', age: 23},
    3: { name:'Sarath', age: 19},
    4: { name:'Radha', age: 23}
}