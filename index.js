const userInfo = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.think({
    text: `Hi, my name is ${userInfo.name} and I'm from ${userInfo.campus} Wild Code School Campus!`,
}));