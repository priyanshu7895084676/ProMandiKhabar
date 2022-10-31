

const fb = {
   



    fullName: function () {
        axios
        .get("http://localhost:3000/data/mohammadabad")
        .then(response => {
            const data = response.data;
            

        })
        .catch(error => console.error(error));
        return response.data;
    }
}

// This will return "John Doe":

/*axios
    .get("http://localhost:3000/data/mohammadabad")
    .then(response => {
        const data = response.data;
        console.log(data);
        var $ = window.jsrender;
        var tmpl = $.templates("#tab");
        // Define data
        var html = tmpl.render(data);       // Render template using data - as HTML string
        document.getElementById("conbox").innerHTML = html;

    })
    .catch(error => console.error(error));*/



