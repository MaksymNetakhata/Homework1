document.getElementById('oneHundred').addEventListener('click', function(event){
    var amount = document.getElementById('amount');
    var sum = parseFloat(amount.textContent);
    var input = document.getElementById('moneyInput');
    var sub = document.getElementById('errorSub');
    if(isNaN(sum))

    {
        amount.textContent = 100;
        
    }
    else
    {
        sum+=100;
        amount.textContent = sum;
    }
    input.style.opacity=1;
    amount.style.color = 'black';
    sub.textContent = ''
});
document.getElementById('fiveHundred').addEventListener('click', function(event){
    var amount = document.getElementById('amount');
    var input = document.getElementById('moneyInput');
    var sub = document.getElementById('errorSub');
    var sum = parseFloat(amount.textContent);
    if(isNaN(sum))

    {
        amount.textContent = 500;
        
    }
    else
    {
        sum+=500;
        amount.textContent = sum;
    }
    input.style.opacity=1;
    amount.style.color = 'black';
    sub.textContent = ''
});
document.getElementById('oneThousand').addEventListener('click', function(event){
    var amount = document.getElementById('amount');
    var input = document.getElementById('moneyInput');
    var sub = document.getElementById('errorSub');
    var sum = parseFloat(amount.textContent);
    if(isNaN(sum))

    {
        amount.textContent = 1000;
        
    }
    else
    {
        sum+=1000;
        amount.textContent = sum;
    }
    input.style.opacity=1;
    amount.style.color = 'black';
    sub.textContent = ''
});



document.getElementById('amount').addEventListener('input', function(event) {
    var moneyInputBlock = event.target.closest('.money-input-block');
    var inputText = event.target.textContent;
    
    var filteredText = inputText.replace(/\D/g, '');
    var sub = document.getElementById('errorSub');

 

    if(inputText < 10)
    {
        moneyInputBlock.style.opacity = '0.5';
        event.target.style.color = 'red';
        sub.textContent = 'Сума повинна бути від 10 ₴ до 29 999 ₴'
    }
    else
    {
        event.target.style.color = 'black';
        moneyInputBlock.style.opacity = '1';
        sub.textContent = ''
    }
    if(inputText > 29999)
    {
        filteredText = "29999";
        sub.textContent = 'Сума повинна бути від 10 ₴ до 29 999 ₴'
    }
    event.target.textContent = filteredText;
});

document.getElementById('monopay').addEventListener('click', function() {
    document.getElementById('amount');
    if(amount.style.color == 'black')
    {
        count();
    }
});
document.getElementById('gpay').addEventListener('click', function(){
    if(amount.style.color == 'black')
    {
        count();
    }
});


function count() {
    var inputSum = document.getElementById('datavalue');
    var inputBlock = document.getElementById('moneyInput');
    var sum = parseFloat(inputSum.textContent);
    var amount = document.getElementById('amount');
    var name = document.getElementById('cardHolder');
    var comment = document.getElementById('comment');
    var input = parseFloat(amount.textContent);
    sum += input;
    inputSum.textContent = sum + ' ₴';
    console.log(name.value);
    console.log(comment.value);
    name.value = '';
    comment.value = '';
    amount.textContent = '0';
    inputBlock.style.opacity = '.5';
}