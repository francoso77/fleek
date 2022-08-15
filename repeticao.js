for (i = 100; i >= 0; i--)
{
    console.log(i);
}

var x = 0;
do
{
    console.log(x);
    x +=2;
}
while (x <= 100);

var y = 2;
while (y <= 20)
{
    console.log("Tabuada do: ", y);
    for(i = 0; i <= 10; i++)
    {
        console.log(y, " x ", i, " = ", y*i);
    }
    
    y++;
}