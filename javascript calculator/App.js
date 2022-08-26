const display1 = document.querySelector('.display-1')
const display2 = document.querySelector('.display-2')
const display3 = document.querySelector('.display-3')
const clear = document.querySelector('.clear')
const last = document.querySelector('.last')
const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal')


let play2 = ''
let play1 = ''
let result = null
let lastOperation = ''
let haveDot = false

number.forEach(num=>{
    num.addEventListener('click', (e)=>{
        if(e.target.innerText ==='.' && !haveDot){
            haveDot =true
        }
        else if(e.target.innerText === '.' && haveDot){
            return;
        }
        play1 += e.target.innerText
        display2.innerText = play1
    })
})

operator.forEach(operate=>{
    operate.addEventListener('click',(e)=>{
        if(!play1) return
        haveDot = false
        const operationName = e.target.innerText
        if(display1 && display2 && lastOperation){
            mathOperation()
        }
        else{
            result = parseFloat(play1)
        }
        clearVar(operationName)
        lastOperation = operationName
        console.log(result)
    })
})

function clearVar(name = ''){
     play2 += play1+ ' ' + name + ' '
     display1.innerText = play2
     display2.innerText = ''
     play1 = ''
     display3.innerText=result
}
const mathOperation = ()=>{
    if(lastOperation === 'x'){
        result = parseFloat(result) * parseFloat(play1)
    }
    else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(play1)
    }
    else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(play1)
    }
    else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(play1)
    }
    else if(lastOperation === '%'){
        result = parseFloat(result) % parseFloat(play1)
    }
}

equal.addEventListener('click', (e)=>{
    if( !play1 || !play2)return
    haveDot =  false
    mathOperation()
    clearVar()
    display2.innerText = result
    display3.innerText=""
    play1 = result
    play2=''

})

clear.addEventListener('click', ()=>{
    display1.innerText = '0'
    display2.innerText = '0'
    display3.innerText = '0'
    play2 = ''
    play1 = ''
    result = ""
})

last.addEventListener('click', ()=>{
    display2.innerText = ''
    play1 =''
})
window.addEventListener('keydown', (e)=>{
    if(
       e.key === '0' ||
       e.key === '1' ||
       e.key === '2' ||
       e.key === '3' ||
       e.key === '4' ||
       e.key === '5' ||
       e.key === '6' ||
       e.key === '7' ||
       e.key === '8' ||
       e.key === '9' 
    ){
        clickButton(e.key)
    }
    else if(e.key == 'Enter' || e.key ==='='){
        clickEqual()
    }
    else if(
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%' ||
        e.key === '/' ||
        e.key === 'x'
    ){
        clickOperation(e.key)
    }
})
const clickButton =(key)=>{
    number.forEach(button=>{
        if(button.innerText === key){
            button.click()
        }
    })
}

const clickOperation = (key)=>{
    operator.forEach(button=>{
        if(button.innerText === key ){
            button.click()
        }
    })
}

const clickEqual = ()=>{
    equal.click()
}