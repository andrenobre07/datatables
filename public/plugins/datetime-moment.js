// datetime-moment.js
jQuery.extend( jQuery.fn.dataTable.defaults, {
    dom: 'lfrtip'
});

jQuery.fn.dataTable.moment = function ( format, locale ) {
    var types = jQuery.fn.dataTable.ext.type;

    // Add type detection
    types.detect.unshift( function ( d ) {
        return moment( d, format, locale, true ).isValid() ?
            'moment-'+format :
            null;
    } );

    // Add sorting method - ascending
    types.order[ 'moment-'+format+'-asc' ] = function ( a, b ) {
        return moment( a, format, locale, true ).unix() - moment( b, format, locale, true ).unix();
    };

    // Descending
    types.order[ 'moment-'+format+'-desc' ] = function ( a, b ) {
        return moment( b, format, locale, true ).unix() - moment( a, format, locale, true ).unix();
    };
};
