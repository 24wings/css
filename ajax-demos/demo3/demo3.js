function callback() {
    console.log('callback');
};


$.ajax({
    url: "http://localhost:4000/test",

    // The name of the callback parameter, as specified by the YQL service
    jsonp: "callback",
    jsonpCallback: callback,
    // Tell jQuery we're expecting JSONP
    dataType: "jsonp",

    // Tell YQL what we want and that we want JSON
    data: {
        q: "select title,abstract,url from search.news where query=\"cat\"",
        format: "json"
    },

    // Work with the response
    success: function() {
        // console.log(response); // server response
    }
});