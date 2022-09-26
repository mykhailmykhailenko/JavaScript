this.currentSpeed = 0;

    this.run = function () {
        // return this.model + ' is running with ' + this.currentSpeed + ' km/h';
        return `${this.model} is running with ${this.currentSpeed} km/h`;
    }
    this.stop = function() {
        this.currentSpeed = 0;
	
    this.firstName = firstName;
    this.lastName = lastName;
    if(rate < 0) {
       this.rate = 0;
    } else {
        this.rate = rate; 
    }
    return this; // primitive will be ignored, this will be returned
 }

const wrkr = new Worker('Black', 'Widow', 100500, 10);

 /*
Шаблонні рядки
 */

const str = 'say: \n "hello"'; 
//alert('2234234234+2234234234='+(2234234234+2234234234));

const templateString = `2+2
${wrkr.getSalary()}
=4`;

console.log(templateString);



//////////////////

const protocol = 'http';
const domain = 'www.example.com';
const port = 80;
const path = 'path/to/myfile.html';

const query = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
}


function createURL(protocol, domain, port, path, queryParams) {
    let url = `${protocol}://${domain}:${port}/${path}?`;
    for (const key in queryParams) {
       url += `${key}=${queryParams[key]}&`;
    }

    return url;
}