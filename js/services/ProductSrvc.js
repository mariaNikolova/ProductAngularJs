'use strict';

app.factory('productSrvc',
  function ($http, $resource, baseSrvcUrl, authSrvc) {
    authSrvc.setAuthHeaders();
    return {
      add: function(productData) {
          return $resource(baseSrvcUrl + 'classes/Product', {
            name:"@name"
            , category:"@category"
            , price: "@price"
            , ACL: "@ACL"
        }).save(productData);
      }
      , getProduct: function(objectId) {
          return $resource(baseSrvcUrl + 'classes/Product' + ((objectId) ? "/" + objectId: "")).get();
       },
    }
  });
