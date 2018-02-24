var reward = 1; // 1 penny
 var infinity= 1.7976931348623157E+10308;
for (var i= 1 ; i< infinity ; i++)
{
  // if (reward < 100)
  //   console.log("reward = " + Math.floor(reward)+ " pennies");
  // else
  // console.log(("reward = " + Math.floor(reward/100)) + " dollars");

  if ((Math.floor(reward/100)) ==  10000) {
    console.log( "It took " + i + " days to reach $10,000");
  }
  if (i == 30)  {
  console.log("After 30 days the reward will be $" + (Math.floor(reward/100))+ " dollars");
  }
 if ((Math.floor(reward/100)) >= 1000000000){
   console.log( "It took " +  i + " days to reach One billion dollars");
   break;
 }
  reward= reward * 2;
}
