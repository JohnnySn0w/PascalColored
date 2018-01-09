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

function main()
{
    var thing = document.getElementById("here");
    console.log("thing is: ", thing);
    //number of rows but also the max n for chooses
    var n = prompt("Hi, how many layers would you like? Note that values beyond "+
        "50 break the visual pattern(but hey, let's see how far beyond it we can go, right?).", '1');
    if(n>99)
    {
        document.getElementsByTagName("body")[0].style.fontSize = '1px';
    }
    else if(n>48)
    {
        document.getElementsByTagName("body")[0].style.fontSize = '2px';
    }
    else if(n>34)
    {
        document.getElementsByTagName("body")[0].style.fontSize = '4px';
    }
    else if(n>23)
    {
        document.getElementsByTagName("body")[0].style.fontSize = '8px';
    }
    var coefficients;
    console.log("n is: ", n);
    for(m = 0;m < n;m++)
    {
        for(k = 0;k <= m;k++)
        {
            coefficients = binomial(m, k);
            console.log("coefficients is: ", coefficients);
            if((coefficients % 1) != 0)
            {
                coefficients = Math.round(coefficients);
            }
            newbie = thing.appendChild(document.createElement("a"));
            newbie.append(coefficients);
            if(k != m)
            {
                thing.append(" ");
            }
            if(newbie.innerHTML == 1)
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
        //creates newlines, basically
        thing.appendChild(document.createElement("br"));
        thing.appendChild(document.createElement("br"));
    }
}




