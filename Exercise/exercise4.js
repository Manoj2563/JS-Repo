var sum=0;
for(x=0; x<=10;x++)
{
    if(x%3===0 || x%5===0)
    {
        sum+=x;
    }
}
document.write(sum);