

global.helper = {
  pages_fn: function (count, page) {
    var pages;
    if(count > 5){
      var next_page = count - page ;
      next_page = next_page > 2 ? 3 : next_page + 1;

      if(page>3){
        pages = _.range(page - (5 - next_page), parseInt(page) + next_page);
      }else{
        pages = _.range(1, 6);
      }
    }else {
      pages = _.range(1, count + 1);
    }
    return {pages: pages, count: count}
  },

}