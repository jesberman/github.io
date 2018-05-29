
// Global Variables
var chosenAttack = 0;

var enemyAttack = 0;

var attack = 0;

var obwAttack = 23;
var lsAttack = 5;
var dmAttack = 39;
var dsAttack = 40;

var obwHp = 130;
var lsHp = 230;
var dmHp = 100;
var dsHp = 99;

var obwEnemyHp = 130;
var lsEnemyHp = 230;
var dmEnemyHp = 100;
var dsEnemyHp = 99;

var x = 0;





 //If else statement that tells the code that the general attack value should now be equal to the attack value of the corresponding selected character

if (    $("#obw-select").click()) {
     attack = obwAttack;
    console.log(x);
}

else if (    $("#ls-select").click()) {
    attack = lsAttack;
    console.log(x);

}

else if (    $("#dm-select").click()) {
     attack = dmAttack;
    console.log(x);

}


else if (    $("#ds-select").click()) {
     attack = dsAttack;
    console.log(x);

}

//Commands for Clicking the Obiwan picture

$("#obw-select").click(function() {
    //tells the code to hide all of the character select divs
    $("#obw-select").hide();
    $("#ls-select").hide();
    $("#ds-select").hide();
    $("#dm-select").hide();
    $("#select-char").hide();

    //tells the code to show the "your character" heading and the appropriate chosen div
    $("#your-char").show();

    $("#obw-chosen").show();


    //Tells the code to remove and delete the other hero options from the "Chosen" div from the code
    $("#ls-chosen").remove();
    $("#dm-chosen").remove();
    $("#ds-chosen").remove();



    //Tells the code to show the "select enemy" heading and the available enemy options 
    $("#select-enemy-char").show();

    $("#ls-enemy").show();
    $("#dm-enemy").show();
    $("#ds-enemy").show();

    //Tells the code to delete the enemy div that matches the chosen div selected by the player
    $("#obw-enemy").remove();

    x = 1;
    console.log(x);

    //Tells the code that the attack variable is now equal to the attack value of the selected character
    attack = obwAttack;
    console.log(attack);

});


//Commands for Clicking the Luke Skywalker picture

$("#ls-select").click(function() {

     //tells the code to hide all of the character select divs
    $("#obw-select").hide();
    $("#ls-select").hide();
    $("#ds-select").hide();
    $("#dm-select").hide();
    $("#select-char").hide();

    //tells the code to show the "your character" heading and the appropriate chosen div
    $("#your-char").show();

    $("#ls-chosen").show();

    //Tells the code to remove and delete the other hero options from the "Chosen" div from the code
    $("#obw-chosen").remove();
    $("#dm-chosen").remove();
    $("#ds-chosen").remove();



    //Tells the code to show the "select enemy" heading and the available enemy options 
    $("#select-enemy-char").show();

    $("#obw-enemy").show();
    $("#dm-enemy").show();
    $("#ds-enemy").show();

    //Tells the code to delete the enemy div that matches the chosen div selected by the player
    $("#ls-enemy").remove();

    x = 2;

    console.log(x);

  //Tells the code that the attack variable is now equal to the attack value of the selected character
    attack = lsAttack;
    console.log(attack);
});


//Commands for Clicking the Darth Maul picture

$("#dm-select").click(function() {

     //tells the code to hide all of the character select divs
    $("#obw-select").hide();
    $("#ls-select").hide();
    $("#ds-select").hide();
    $("#dm-select").hide();
    $("#select-char").hide();

    //tells the code to show the "your character" heading and the appropriate chosen div
    $("#your-char").show();

    $("#dm-chosen").show();

    //Tells the code to remove and delete the other hero options from the "Chosen" div from the code
    $("#ls-chosen").remove();
    $("#obw-chosen").remove();
    $("#ds-chosen").remove();



    //Tells the code to show the "select enemy" heading and the available enemy options 
    $("#select-enemy-char").show();

    $("#obw-enemy").show();
    $("#ls-enemy").show();
    $("#ds-enemy").show();

    //Tells the code to delete the enemy div that matches the chosen div selected by the player
    $("#dm-enemy").remove();

    x = 3;

    console.log(x);

     //Tells the code that the attack variable is now equal to the attack value of the selected character
    attack = dmAttack;
    console.log(attack);

});


//Commands for Clicking the Darth Sidious picture

$("#ds-select").click(function() {

     //tells the code to hide all of the character select divs
    $("#obw-select").hide();
    $("#ls-select").hide();
    $("#ds-select").hide();
    $("#dm-select").hide();
    $("#select-char").hide();

    //tells the code to show the "your character" heading and the appropriate chosen div
    $("#your-char").show();

    $("#ds-chosen").show();

    //Tells the code to remove and delete the other hero options from the "Chosen" div from the code
    $("#ls-chosen").remove();
    $("#dm-chosen").remove();
    $("#obw-chosen").remove();


     //Tells the code to show the "select enemy" heading and the available enemy options 
    $("#select-enemy-char").show();

    $("#obw-enemy").show();
    $("#dm-enemy").show();
    $("#ls-enemy").show();

    //Tells the code to delete the enemy div that matches the chosen div selected by the player
    $("#ds-enemy").remove();

    x = 4;

    console.log(x);

    //Tells the code that the attack variable is now equal to the attack value of the selected character
    attack = dsAttack;
    console.log(attack);

});






//Commands for Clicking the Obiwan Kenobi Enemy picture

$("#obw-enemy").click(function() {

    //Hides all of the "enemy select divs" from view
    $("#ls-enemy").hide();
    $("#obw-enemy").hide();
    $("#ds-enemy").hide();
    $("#dm-enemy").hide();

    //Displays the attack button for the selected enemy
    $("#obw-attack").show();

    //Displays the battle div of the selected enemy
    $("#obw-battle").show();

    //Replaces the Select Enemy heading with the Your Enemy heading
    $("#your-enemy").show();
    $("#select-enemy-char").hide();



});




//Commands for Clicking the Luke Skywalker Enemy picture

$("#ls-enemy").click(function() {

    //Hides all of the "enemy select divs" from view
    $("#ls-enemy").hide();
    $("#obw-enemy").hide();
    $("#ds-enemy").hide();
    $("#dm-enemy").hide();


    //Displays the attack button for the selected enemy
    $("#ls-attack").show();

    //Displays the battle div of the selected enemy    
    $("#ls-battle").show();

    //Replaces the Select Enemy heading with the Your Enemy heading    
    $("#your-enemy").show();
    $("#select-enemy-char").hide();



});


//Commands for Clicking the Darth Maul Enemy picture

$("#dm-enemy").click(function() {

    //Hides all of the "enemy select divs" from view
    $("#ls-enemy").hide();
    $("#obw-enemy").hide();
    $("#ds-enemy").hide();
    $("#dm-enemy").hide();

    //Displays the attack button for the selected enemy
    $("#dm-attack").show();

    //Displays the battle div of the selected enemy    
    $("#dm-battle").show();

    //Replaces the Select Enemy heading with the Your Enemy heading    
    $("#your-enemy").show();
    $("#select-enemy-char").hide();



});



//Commands for Clicking the Darth Sidious Enemy picture

$("#ds-enemy").click(function() {

    //Hides all of the "enemy select divs" from view
    $("#ls-enemy").hide();
    $("#obw-enemy").hide();
    $("#ds-enemy").hide();
    $("#dm-enemy").hide();

    //Displays the attack button for the selected enemy
    $("#ds-attack").show();

    //Displays the battle div of the selected enemy    
    $("#ds-battle").show();

    //Replaces the Select Enemy heading with the Your Enemy heading    
    $("#your-enemy").show();
    $("#select-enemy-char").hide();



});


//Commands for clikcing the attack button of the selected enemy

$("#ls-attack").click(function() {




    console.log(lsAttack);


    //The health points of all the possible chosen characters is decreased by the value of the selected enemy's attack
    obwHp = obwHp - lsAttack;
    dmHp = dmHp - lsAttack;
    dsHp = dsHp - lsAttack;

    //The selected enemy's HP is decreased by the value of the attack variable
    lsEnemyHp = lsEnemyHp - attack;

    //The HTML is altered to inform the user how much HP the enemy character still has
    $("#ls-enemy-hp").html("HP: " + (lsEnemyHp));

    //The HTML is altered to inform the user how much HP their charcter still has
    $("#obw-hp").html("HP: " + (obwHp));
    $("#dm-hp").html("HP: " + (dmHp));
    $("#ds-hp").html("HP: " + (dsHp));


    //The HTML of the tracker div is altered to display how much damage the user and the selected enemy have dealt to each other after each round
    $("#tracker").html("You dealt " + (attack) + " damage!");
    $("#tracker-enemy").html("Your opponent dealt " + (lsAttack) + " damage!");

    //Displays the tracker div so that the user can now see it on screen
    $("#tracker").show();
    $("#tracker-enemy").show();
    $("#tracker-background").show();



    //Mutiplies the attack variable by 2, so that it doubles with each press of the appropriate attack button
    attack=attack * 2;

    console.log (attack);




    //If statement that activates when the selected enemy fall below 1 health point
    if(lsEnemyHp < 1) {

        //Deletes both the enemy select div and the battle div of the corresponding character
        $("#ls-enemy").remove();
        $("#ls-battle").remove();


       //Hides the attack button of the defeated enemy
       $("#ls-attack").hide();

       //Displays again the enemy select divs that have not yet been deleted
       $("#obw-enemy").show();
       $("#ls-enemy").show();
       $("#ds-enemy").show();
       $("#dm-enemy").show();

   
       //Replaces the Your Enemy div with the Select Enemy div
       $("#your-enemy").hide();
       $("#select-enemy-char").show();


     }


});



//Commands for clikcing the attack button of the selected enemy

$("#obw-attack").click(function() {

    console.log(attack);

    //The selected enemy's HP is decreased by the value of the attack variable
    obwEnemyHp = obwEnemyHp - attack;

    //The health points of all the possible chosen characters is decreased by the value of the selected enemy's attack
    lsHp = lsHp - obwAttack;
    dmHp = dmHp - obwAttack;
    dsHp = dsHp - obwAttack;

    //The HTML is altered to inform the user how much HP the enemy character still has
    $("#obw-enemy-hp").html("HP: " + (obwEnemyHp));

    //The HTML is altered to inform the user how much HP their charcter still has    
    $("#ls-hp").html("HP: " + (lsHp));
    $("#dm-hp").html("HP: " + (dmHp));
    $("#ds-hp").html("HP: " + (dsHp));

    //The HTML of the tracker div is altered to display how much damage the user and the selected enemy have dealt to each other after each round
    $("#tracker").html("You dealt " + (attack) + " damage!");
    $("#tracker-enemy").html("Your opponent dealt " + (obwAttack) + " damage!");

    //Displays the tracker div so that the user can now see it on screen
    $("#tracker").show();
    $("#tracker-enemy").show();
    $("#tracker-background").show();

    //Mutiplies the attack variable by 2, so that it doubles with each press of the appropriate attack button
    attack=attack * 2;


    //If statement that activates when the selected enemy fall below 1 health point
    if(obwEnemyHp < 1 ) {

        //Deletes both the enemy select div and the battle div of the corresponding character
        $("#obw-enemy").remove();
        $("#obw-battle").remove();





        //Hides the attack button of the defeated enemy
       $("#obw-attack").hide();


       //Displays again the enemy select divs that have not yet been deleted
       $("#obw-enemy").show();
       $("#ls-enemy").show();
       $("#ds-enemy").show();
       $("#dm-enemy").show();


        //Replaces the Your Enemy div with the Select Enemy div
       $("#your-enemy").hide();
       $("#select-enemy-char").show();




    }



});


//Commands for clikcing the attack button of the selected enemy

$("#dm-attack").click(function() {

    console.log(dmAttack);

    //The selected enemy's HP is decreased by the value of the attack variable
    dmEnemyHp = dmEnemyHp - attack;

    //The health points of all the possible chosen characters is decreased by the value of the selected enemy's attack
    lsHp = lsHp - dmAttack;
    obwHp = obwHp - dmAttack;
    dsHp = dsHp - dmAttack;

    //The HTML is altered to inform the user how much HP the enemy character still has
    $("#dm-enemy-hp").html("HP: " + (dmEnemyHp));

    //The HTML is altered to inform the user how much HP their charcter still has    
    $("#ls-hp").html("HP: " + (lsHp));
    $("#obw-hp").html("HP: " + (obwHp));
    $("#ds-hp").html("HP: " + (dsHp));


    //The HTML of the tracker div is altered to display how much damage the user and the selected enemy have dealt to each other after each round
    $("#tracker").html("You dealt " + (attack) + " damage!");
    $("#tracker-enemy").html("Your opponent dealt " + (dmAttack) + " damage!");

    //Displays the tracker div so that the user can now see it on screen    
    $("#tracker").show();
    $("#tracker-enemy").show();
    $("#tracker-background").show();


    //Mutiplies the attack variable by 2, so that it doubles with each press of the appropriate attack button
    attack=attack * 2;


    //If statement that activates when the selected enemy fall below 1 health point
    if(dmEnemyHp < 1 ) {

        //Deletes both the enemy select div and the battle div of the corresponding character
        $("#dm-enemy").remove();
        $("#dm-battle").remove();





        //Hides the attack button of the defeated enemy
       $("#dm-attack").hide();

       //Displays again the enemy select divs that have not yet been deleted
       $("#obw-enemy").show();
       $("#ls-enemy").show();
       $("#ds-enemy").show();
       $("#dm-enemy").show();


   
       
        //Replaces the Your Enemy div with the Select Enemy div
       $("#your-enemy").hide();
       $("#select-enemy-char").show();



    }




});


//Commands for clikcing the attack button of the selected enemy

$("#ds-attack").click(function() {

    console.log(dsAttack);

    //The selected enemy's HP is decreased by the value of the attack variable
    dsEnemyHp = dsEnemyHp - attack;

    //The health points of all the possible chosen characters is decreased by the value of the selected enemy's attack    
    lsHp = lsHp - dsAttack;
    obwHp = obwHp - dsAttack;
    dmHp = dmHp - dsAttack;

    //The HTML is altered to inform the user how much HP the enemy character still has    
    $("#ds-enemy-hp").html("HP: " + (dsEnemyHp));

    //The HTML is altered to inform the user how much HP their charcter still has    
    $("#ls-hp").html("HP: " + (lsHp));
    $("#obw-hp").html("HP: " + (obwHp));
    $("#dm-hp").html("HP: " + (dmHp));

    //The HTML of the tracker div is altered to display how much damage the user and the selected enemy have dealt to each other after each round
    $("#tracker").html("You dealt " + (attack) + " damage!");
    $("#tracker-enemy").html("Your opponent dealt " + (dsAttack) + " damage!");

    //Displays the tracker div so that the user can now see it on screen    
    $("#tracker").show();
    $("#tracker-enemy").show();
    $("#tracker-background").show();

    //Mutiplies the attack variable by 2, so that it doubles with each press of the appropriate attack button
    attack=attack * 2;


    //If statement that activates when the selected enemy fall below 1 health point
    if(dsEnemyHp < 1 ) {

        //Deletes both the enemy select div and the battle div of the corresponding character
        $("#ds-enemy").remove();
        $("#ds-battle").remove();






        //Hides the attack button of the defeated enemy
       $("#ds-attack").hide();

       //Displays again the enemy select divs that have not yet been deleted
       $("#obw-enemy").show();
       $("#ls-enemy").show();
       $("#ds-enemy").show();
       $("#dm-enemy").show();



       

        //Replaces the Your Enemy div with the Select Enemy div
       $("#your-enemy").hide();
       $("#select-enemy-char").show();




 

    }

  




});



