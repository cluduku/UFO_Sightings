// from data.js
var tableData = data;
tableData.forEach(element => {
    console.log(element.city)
});

// YOUR CODE HERE!
//Creator: Chike Uduku
//Created: 06/08/2019
//Desc: This function handles a change event for the value property of the input field
function HandleChange()
{
    //Let's prevent the page from refreshing
    d3.event.preventDefault();

    //let's get value property of input
    var inptVal = d3.event.target.value;
    
    //Now that we have value property of input, let's filter based on this value
    filteredRslt = tableData.filter(record => record.datetime === inptVal);

    //Let's populate table with filtered results
    tabBody = d3.select("tbody"); //get table body element

    //Clear previous results from table if necessary
    tabBody.text("");
    
    //Now that we have filtered results, let's fill out data for each column
    if(filteredRslt.length > 0) //actual data was returned
    {
        filteredRslt.forEach(function(objctRcrd){
        //Date Column
        var row = tabBody.append("tr");
        row.append("td").text(objctRcrd.datetime);
        //City Column
        row.append("td").text(objctRcrd.city);
        //state Column
        row.append("td").text(objctRcrd.state);
        //country Column
        row.append("td").text(objctRcrd.country);
        //shape Column
        row.append("td").text(objctRcrd.shape);
        //Duration Column
        row.append("td").text(objctRcrd.durationMinutes);
        //comments Column
        row.append("td").text(objctRcrd.comments);

        });
    }
}
//Let's get input element on browser
var inpt = d3.select("#datetime");

//Now that we have input element, let's listen for a change event
inpt.on("change",HandleChange);