/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
  'use strict'

  // Load demo images from flickr:
  $.ajax({
    // Flickr API is SSL only:
    // https://code.flickr.net/2014/04/30/flickr-api-going-ssl-only-on-june-27th-2014/
    url: 'https://api.flickr.com/services/rest/',
    data: {
      format: 'json',
      method: 'flickr.interestingness.getList',
      api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
    },
    dataType: 'jsonp',
    jsonp: 'jsoncallback'
  }).done(function (result) {
    var carouselLinks = []
    var linksContainer = $('#links')
    var baseUrl
    // Add the demo images as links with thumbnails to the page:
    $.each(result.photos.photo, function (index, photo) {
      baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
      photo.server + '/' + photo.id + '_' + photo.secret
      $('<a/>')
        .append($('<img>').prop('src', baseUrl + '_s.jpg'))
        .prop('href', baseUrl + '_b.jpg')
        .prop('title', photo.title)
        .attr('data-gallery', '')
        .appendTo(linksContainer)
      carouselLinks.push({
        href: baseUrl + '_c.jpg',
        title: photo.title
      })
    })
    // Initialize the Gallery as image carousel:
    blueimp.Gallery(carouselLinks, {
      container: '#blueimp-image-carousel',
      carousel: true
    })
  })

  // Initialize the Gallery as video carousel:
  blueimp.Gallery([
        {
      title: 'Fishy moves by IceJFish',
      type: 'text/html',
      youtube: 'iq_d8VSM0nw',
      poster : 'http://img.youtube.com/vi/iq_d8VSM0nw/maxresdefault.jpg'
    },{
      title: 'Swag vali Topi - ma Shat!!',
      type: 'text/html',
      youtube: 'vFaFUsHPpCE',
      poster: 'http://img.youtube.com/vi/GroxDoccw20/maxresdefault.jpg'
    },
    {
      title: 'I Very Very Love You, I mean What ?',
      type: 'text/html',
      youtube: 'pVFwax9iRSA',
      poster: 'http://img.youtube.com/vi/pVFwax9iRSA/hqdefault.jpg'
    },
    {
      title: 'Gujjar Biradari - Lolwa',
      type: 'text/html',
      youtube: 'L6QMKONeXsQ',
      poster: 'http://img.youtube.com/vi/L6QMKONeXsQ/maxresdefault.jpg'
    },
    {
      title: 'Eye to eye - Taher Shat',
      type: 'text/html',
      youtube: 'f8uK_mWnbr4',
      poster: 'http://img.youtube.com/vi/f8uK_mWnbr4/maxresdefault.jpg'
    }
    
  ], {
    container: '#blueimp-video-carousel',
    carousel: true
  })
})
