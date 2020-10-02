'use strict';
var express = require('express');
const { request, response } = require('express');
//defining options for user for different operations.
let options = ['add', 'subtract', 'multiply', 'divide'];

//function begins here used switch case so if one case is not then it executes the other 
//or its throws us default so try again ?? 
let Calculator = (method, x, y) => {
    switch (method) {
        case 'add':
            return { result: x + y, operator: '+' };
        case 'subtract':
            return { result: x - y, operator: '-' };
        case 'multiply':
            return { result: x * y, operator: '*' };
        case 'divide':
            return { result: x / y, operator: '/' };
        default:
            return 'Error:This is not a valid option try again!';
    }
}
//for the request and response and assigning x and y to integers so it takes only numbers.
let userrequest = (request, response) => {
    request.query.x = parseInt(request.query.x);
    request.query.y = parseInt(request.query.y);
    let query = request.query;
    let x = parseInt(query.x);
    let y = parseInt(query.y);
    let method = query.method;

    //as we are taking only intergers true if the given value is NaN; otherwise, false
    if (isNaN(x) || isNaN(y)) {
        return response.send('As weare taking integers they must be only numbers for x and y:');
    }
    //else if the condition is not satisfied use the valid method operation
    else if (!method) {
        return response.send(`choose the method: ${validOptions.join(',')}`);
    }
    //formating output in a prober format for the method and throws us the output.
    let { operator, result } = Calculator(method ,x, y, );
    response.send(`your result is : ${x} ${operator} ${y} = ${result}`);
    
}
//finally calling function.
module.exports = userrequest;