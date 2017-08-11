$(document).ready(function () {
    $("#hideRecipe").hide();
    

    //Jquery(selector ---class, id, elements).action-click(run a function)
    $("#findButton").click(function () {
        //set variable = select (element).method to get information
        var searchTerm = $("#veggieInput").val();
        var listItems = $("li");
        $("li").removeClass('bg-danger');


        listItems.each(function () {
            //check to see if there is a match(includes)/ or not (includes) a match -- 
            // current list item.returns text().does in include (users input)
            if (!$(this).text().toLowerCase().includes(searchTerm.toLowerCase())) {
                $(this).hide("slow");
            }
            else {
                $(this).text().toLowerCase().includes(searchTerm)
                $(this).addClass('bg-danger');
            }

        });

        if (!$("li").text().toLowerCase().includes(searchTerm)) {
            alert("Your recipe is not in here");
            var addRecipeAnswer = prompt("Would you like to add a recipe", "");
            if (addRecipeAnswer.toLowerCase().includes("yes")) {
                $("#hideIfRecAdd").hide();
                $("#hideRecipe").show();
            }
        }

    });
    $("#viewAllButton").click(function () {


        $("li").show("slow");

    });


    $("#addRecipeButton").click(function () {
        $("#hideIfRecAdd").show();
        $("#hideRecipe").hide();
        var counter = 0;
        var listItems = $("li");


        listItems.each(function () {
 
            if ($(this).text().toLowerCase() == ($("#addRecipe").val().toLowerCase())) {
                alert("The recipe exists.")
                $(this).show().val().attr("class","bg-danger");
                counter += 1;
              
            }
        });
        if (counter == 0) {

            $("ul").append('<li class="list-group-item">' + $("#addRecipe").val() + '</li>');
        }
    });
  
});