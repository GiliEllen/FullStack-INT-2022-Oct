
const questionMsg= prompt ("Enter the method you want to interpretate your message:", "enter encrypt or decrypt");
if (questionMsg== "encrypt"){
    const msgEncpt= prompt ("Enter the message you want to encrypt:");
    if (!msgEncpt){
        console.log(`you don't enter a value`);
    } else {
        const msgEncrypt= encrypt(msgEncpt);
        if (msgEncrypt!=false){
          console.log(`your encrypted message is: ${msgEncrypt}`);
        } else {
            console.log(`We can't encrypt your message :(`);
        }
    }
}

function encrypt (msg:string):string | false{
    try { 
        msg= msg.toUpperCase();
        let encryptMsg;
        for (let i=0;i< msg.length ;i++){
            switch (msg.charAt(i)){
                case "a":
                    encryptMsg+="1 ";
                    break;
                case "b":
                    encryptMsg+="2 ";
                    break; 
                case "c":
                    encryptMsg+="3 ";
                    break;   
                case "d":
                    encryptMsg+="4 ";
                    break; 
                case "e":
                    encryptMsg+="5 ";
                    break;
                case "f":
                    encryptMsg+="6 ";
                    break; 
                case "g":
                    encryptMsg+="7 ";
                    break;
                case "h":
                    encryptMsg+="8 ";
                    break;
                case "i":
                    encryptMsg+="9 ";
                    break;   
                case "j":
                    encryptMsg+="10 ";
                    break;
                case "k":
                    encryptMsg+="11 ";
                    break;    
                case "l":
                    encryptMsg+="12 ";
                    break; 
                case "m":
                    encryptMsg+="13 ";
                    break;   
                case "n":
                    encryptMsg+="14 ";
                    break; 
                case "o":
                    encryptMsg+="15 ";
                    break;
                case "p":
                    encryptMsg+="16 ";
                    break; 
                case "q":
                    encryptMsg+="17 ";
                    break;
                case "r":
                    encryptMsg+="18 ";
                    break;
                case "s":
                    encryptMsg+="19 ";
                    break;   
                case "t":
                    encryptMsg+="20 ";
                    break;    
                case "u":
                    encryptMsg+="21 ";
                    break;    
                case "v":
                    encryptMsg+="22 ";
                    break; 
                case "w":
                    encryptMsg+="23 ";
                    break;   
                case "x":
                    encryptMsg+="24 ";
                    break; 
                case "y":
                    encryptMsg+="25 ";
                    break;
                case "z":
                    encryptMsg+="26 ";
                    break;  
                case " ":
                    encryptMsg+= " ";  
                    break;  
                case ".":
                    encryptMsg+= ".";  
                    break;
                case ",":
                    encryptMsg+= ",";  
                    break;
                case "!":  
                    encryptMsg+= "!";  
                    break;                     
                case "?":
                    encryptMsg+= "?";  
                    break;
                default:
                    throw new Error('your message can not be encrypt because of an unknow value');                
            }
        } 
        return encryptMsg;
    } catch (error) {
        console.error('your message can not be encrypt because of an unknow value');
        return false;
    }
}

/*
function 
variable=0
while variable<= msg.length     1 4 22 5,  14 26 2 1 26!
  while (variable != space or . or ! or ? or ,)
    add the char to a variable
  switch (variable)
      case fo each number
   add the variable to the result+ a space char
return result*/   

function decrypt(msg:string){
let msgChar;
let i=0;
while (i<= msg.length){
    while (msg.charAt(i) != " " || msg.charAt(i) != "." || msg.charAt(i) != "," || msg.charAt(i) != "?" || msg.charAt(i) != "!" ){
        msgChar+=msgChar(i);
    }
    switch(msgChar){

    }
}

}