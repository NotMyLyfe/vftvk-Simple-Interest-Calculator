function compute() // Function for computing interest and displaying it to user
{
    var principal = document.getElementById("principal").value; // Gets interest of user
    // Validating input is positive
    if(principal <= 0){
        alert("Enter a positive number"); // Tells user to input a positive number
        document.getElementById("principal").focus(); // Sets focus back to prinicpal input
        return; // Returns from function, preventing continuation of function
    }
    // Gets remaining values of rate, years
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // Calculates interest from prinicipal * years of interest * interest rate
    var interest = principal * years * rate / 100;
    // Finds when you'll receive the interest
    var year = new Date().getFullYear()+parseInt(years);
    // Displays it to the user on the "results" span
    document.getElementById("result").innerHTML=`If you deposit <span class="highlight">${principal}</span>,\<br\>at an interest rate of <span class="highlight">${rate}%</span>.\<br\>You will receive an amount of <span class="highlight">${interest}</span>,\<br\> in the year <span class="highlight">${year}</span>\<br\>`
}

// Updates the interest rate as the user slides
function updateRate()
{
    // Gets the interest rate the user has selected
    var rateval = document.getElementById("rate").value;
    // Updates the rate_val span with the interest rate
    document.getElementById("rate_val").innerText=`${rateval}%`;
}
        