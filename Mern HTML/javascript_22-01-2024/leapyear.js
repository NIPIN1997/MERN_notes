function isLeapYear(year)
{
    if(year%4==0 && year%100!=0)
    {
        return true;
    }
    else if(year%100==0 && year%400==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(isLeapYear(2000)); // Should return true
console.log(isLeapYear(2021)); // Should return false
console.log(isLeapYear(2024)); // Should return true
console.log(isLeapYear(2100)); // Should return false