// login button event handler
const loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById("login-area") ;
    loginArea.style.display = "none"
    const transactionArea = document.getElementById("transaction-area")
    transactionArea.style.display = "block"
})

function getInput(id){
    const inputAmount = document.getElementById(id).value
    const inputNumber = parseFloat(inputAmount)
    return inputNumber
}

// deposit button event handler
const depositBtn = document.getElementById('addDeposit') 
depositBtn.addEventListener('click', function(){

    const depositAmount = getInput("depositAmount") 
    document.getElementById('depositAmount').value = ""

    deposit("currentDeposit", depositAmount)
    deposit("currentBalance", depositAmount)

    function deposit(id, depositNumber){
        const currentStr = document.getElementById(id).innerHTML
        const currentNumber = parseFloat(currentStr)
        const total = currentNumber + depositNumber
        document.getElementById(id).innerHTML = total
    }
})

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw")
withdrawBtn.addEventListener('click', function(){

    const withdrawAmount = getInput("withdrawAmount")
    document.getElementById('withdrawAmount').value = ""

    const currentWithdrawStr = document.getElementById("currentWithdraw").innerHTML
    const currentWithdrawNumber = parseFloat(currentWithdrawStr)
    const totalWithdraw = currentWithdrawNumber + withdrawAmount
    document.getElementById("currentWithdraw").innerHTML = totalWithdraw

    const currentBalanceStr = document.getElementById("currentBalance").innerHTML
    const currentBalanceNumber = parseFloat(currentBalanceStr)
    const totalBalance = currentBalanceNumber - withdrawAmount
    document.getElementById("currentBalance").innerHTML = totalBalance   
})