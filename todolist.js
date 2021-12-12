const Todo_list=[];
let loop=true;
while(loop){
    let input=prompt('What would you like to do?');
    if (input==="new"){
        const todo=prompt('Enter the value you want to push?');
        Todo_list.push(todo);
        console.log('Todo added to list');

    }
    else if(input=="list"){
        console.log("***************");
        Array.from(Todo_list).forEach(function(element){
            console.log(Element)
        })
        console.log("*************");
    }
    else if (input="quit"){
        loop=false;
    }
    else{
        alert("Please enter a defined keyword");
    }
}
console.log("You can quit the application");