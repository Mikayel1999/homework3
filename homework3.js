const summetion=function(arg1,arg2,arg3) {
return (arg1+arg2+arg3);
};
const apple=function(){
return ('fruit');
};
const func = function (a,b) {
a*b*(b-a)
};
const fullName=function(first_name,last_name){	
return (first_name + " " + last_name);
};
const String = function(str1, str2, str3) {

    if (str1.length > str2.length) {
        const longer = str1;
    } else
        const longer = str2;
    if (longer > str3.length) return longer;
    else return str3;
};
const compare = function(num1, num2) {
    if (num1 === num2) return 0;

    else if (num1 > num2) return 1;

    else if (num2 > num1) return -1;

};
const Truthy = function(a, b, c) {
    return a || b || c;
};