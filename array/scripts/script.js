var item = ['Mouse', "ebolt", 19.90];
item.push('usb');
//var item = {nome:'mouse', marca:'ebolt', preco:19.90};

document.getElementById("demo").innerHTML = item

var text, fLen, i;

fLen = item.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + item[i] + "</li>";
}

console.log(item);

//alert(item);
    