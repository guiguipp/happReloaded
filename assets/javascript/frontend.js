$(document).ready(function() {

	console.log("ready")

    //event handler on heart icon when events are generated
    $(document).on("click", "#favorite-event", function() {

        //copies event row
        var favIcon = $(this).parent();
        var favRow = $(this).parent().siblings();
        var heartStatus = $(this).attr("heart");

        //appends to favorites list
        if (heartStatus === "empty") {

            $(this).text("favorite"); 

            console.log(favRow)

            $(this).attr("heart", "full")

            var row = $("<tr>");
            favIcon.clone().appendTo(row)
            favRow.clone().appendTo(row)
            row.appendTo("#favorite-list");
        
        // removes from favorites list
        } else if (heartStatus === "full") {

            $(this).attr("heart", "empty")

            $(this).text("favorite_border")

            favIcon.replaceWith("")
            favRow.replaceWith("")
        }
    });
});

