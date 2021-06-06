function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  }
  
  function() {
    $('.filtering-button a').removeClass('active');
    $(this).addClass('active');
  }
  
  function(a) {
    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
  }
  