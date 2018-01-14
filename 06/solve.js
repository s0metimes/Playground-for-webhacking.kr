function decodeIt(inputStr) {
    for(i=0;i<20;i++)
{
    inputStr=btoa(inputStr);
}
    inputStr.replace("1","!");
       inputStr.replace("2","@");
       inputStr.replace("3","$");
       inputStr.replace("4","^");
       inputStr.replace("5","&");
       inputStr.replace("6","*");
       inputStr.replace("7","(");
       inputStr.replace("8",")");
    return inputStr;
}
