var products_on_page=  $('.products-onload');
var next_url = products_on_page.data('next-url');
var load_more_btn = $('.load-more-btn');
var load_more_snipper = $('.load-more-snipper');
function loadMoreProducts(){
$.ajax({
url: next_url, 
type: 'GET',
dataType: 'html',
beforeSend: function(){
    load_more_btn.hide();
    load_more_snipper.show();
}
}).done(function(next_page) {
    load_more_snipper.hide();
var new_products = $(next_page).find('.products-onload');
var new_url = new_products.data('next-url');
next_url =new_url;
if(new_url){
    load_more_btn.show();
}
products_on_page.append(new_products.html());
 })
}