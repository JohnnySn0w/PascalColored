//calcs binomial coefficients
function binomial(n, k) 
{
    if ((typeof n !== 'number') || (typeof k !== 'number')) 
    {
        return false; 
    }
    var coeff = 1;
    for (var x = n-k+1; x <= n; x++) 
    {
        coeff *= x;
    }
    for (x = 1; x <= k; x++)
    {
        coeff /= x;
    }
    return coeff;
}

//adds a space
function space(k, m, thing)
{
    if(k != m)
    {
        thing.append(" ");
    }
}

//does what it says on the tin, highest meaning: highest number I have that the thing can evenly divide by
function colorizeByHighest(newbie)
{
    var coefficients = newbie.innerHTML;
    if(coefficients == 1)
    {
        newbie.style.backgroundColor = "#3c8d0d"
    }
    else if(!(coefficients%7))
    {
        newbie.style.backgroundColor = "#FFFF99"
    }
    else if(!(coefficients%6))
    {
        newbie.style.backgroundColor = "#FFCC99"
    }
    else if(!(coefficients%5))
    {
        newbie.style.backgroundColor = "#d86c70"
    }
    else if(!(coefficients%4))
    {
        newbie.style.backgroundColor = "#7ce0f9"
    }
    else if(!(coefficients%3))
    {
        newbie.style.backgroundColor = "#CCFF33"
    }
    else if(!(coefficients%2))
    {
        newbie.style.backgroundColor = "#FF99CC"
    }
    else 
    { 
        newbie.style.backgroundColor = "#99CCCC" 
    }
}

function nCheck(n)
{
    var body = document.getElementById("editThis");
    if(n>99)
    {
        body.style.fontSize = '1px';
    }
    else if(n>48)
    {
        body.style.fontSize = '2px';
    }
    else if(n>34)
    {
        body.style.fontSize = '4px';
    }
    else if(n>23)
    {
        body.style.fontSize = '8px';
    } 
}

//creates newlines, basically
function newline(thing)
{
        thing.appendChild(document.createElement("br"));
        thing.appendChild(document.createElement("br"));
}

function main()
{
    var thing = document.getElementById("here"); //grabs the div where the triangle goes
    thing.innerHTML = ""; //clears out old triangle
    //console.log("thing is: ", thing); //debug
    //number of rows but also the max n for chooses
    var n = prompt("Hi, how many layers would you like? Note that values beyond "+
        "50 break the visual pattern(but hey, let's see how far beyond it we can go, right?).", '1');
    nCheck(n);
    var coefficients;
    console.log("n is: ", n);
    for(m = 0;m < n;m++)
    {
        for(k = 0;k <= m;k++)
        {
            coefficients = binomial(m, k);
            if((coefficients % 1) != 0)
            {
                coefficients = Math.round(coefficients);
            }
            newbie = thing.appendChild(document.createElement("a"));
            newbie.append(coefficients);
            space(k, m, thing);
            colorizeByHighest(newbie);
        }
        newline(thing);
    }
}




