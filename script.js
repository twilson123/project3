jQuery(document).ready(function ($) {

    jQuery('#fetch-books').on('click', function () {
        $('#book-data').html('loading...');
        axios.get('http://csc225.mockable.io/books').then(function (response) {
            var bookData = response.data;
            var htmlOutput = '';
            bookData.forEach(function(item){
                var authorData = ', author by ' + item.author;
                htmlOutput = htmlOutput + '<p>' + item.title + authorData + '</p>'; 
            });
            $('#book-data').html(htmlOutput);
        });
    });

});

jQuery(document).ready(function ($) {

    jQuery('#fetch-id1').on('click', function () {
        /*$('#book-info').html('loading...');*/
        axios.get('http://csc225.mockable.io/books/1').then(function (response){

            var bookInfo = response.data
            var htmlOutput = '';
            bookInfo.forEach(function(item){
                var authorData = ', author ' + item.author;
                var countryData = ', country ' + item.country;
                var languageData = ', language ' + item.language;
                var linkData = ', link ' + item.link;
                var pagesData = ', pages ' + item.pages;
                var titleData = ', title ' + item.title;
                var yearData = ', year ' + item.year;
                var cover = ', cover ' + item.cover; 
                htmlOutput = htmlOutput + '<p>' + item.author + item.country + item.language + item.link + item.pages + item.title + item.year + item.cover + '</p>';
            });
            $('#book-info').html(htmlOutput);
        });
    });
});