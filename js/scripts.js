/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    // Create a map object.
var myMap = L.map("map", {
    center: [42.09, -95.71],
    zoom: 4
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // Define a markerSize() function that will give each city a different radius based on its population.
  function markerSize(rev) {
    return rev*1000;
  }
  
  // Each comps object contains the company's name, sector, location, and revenue.
  var comps = [
    {
      name: "The Sherwin-Williams",
      sector: "Basic Material",
      location: [41.4993, -81.6944],
      rev: 20
    },
    {
        name: "Netflix",
        sector: "Communication",
        location: [37.2358, -121.9624],
        rev: 30
    },
    {
        name: "Amazon",
        sector: "Consumer Cyclical ",
        location: [47.6062, -122.3321],
        rev: 470
    },
    {
        name: "Costco",
        sector: "Consumer defensive",
        location: [47.5301, -122.0326],
        rev: 141
    }, 
    {
        name: "Marathon Oil Corporation",
        sector: "Oil & Gas",
        location: [29.7604, -95.3698],
        rev: 5.5
      },
      {
          name: "Bank of America",
          sector: "Financial Services",
          location: [35.2271, -80.8431],
          rev: 94
      },
      {
          name: "United Healthcare group",
          sector: "Healthcare",
          location: [44.9212, -93.4687],
          rev: 288
      },
      {
          name: "FedEx",
          sector: "Industrials",
          location: [35.1495, -90.0490],
          rev: 84
      },
    {
        name: "American Tower Corp A",
        sector: "Real Estate",
        location: [42.3601, -71.0589],
        rev: 9
    },
    {
        name: "Apple",
        sector: "Technology",
        location: [37.3346, -122.0090],
        rev: 378
    },
    {
        name: "DTE Energy Company",
        sector: "Utilities",
        location: [42.3314, -83.0458],
        rev: 1
    }
  ];
  
  // Loop through the cities array, and create one marker for each city object.
  for (var i = 0; i < comps.length; i++) {
    var color = "";
    if (comps[i].rev > 100) {
        color = "Orange";
    }
    else if (comps[i].rev > 75) {
        color = "Red";
    }
    else {
        color = "Black";
    }

    L.circle(comps[i].location, {
        fillOpacity: 0.75,
        color: "808080",
        fillColor: color,
      // Setting our circle's radius to equal the output of our markerSize() function:
      // This will make our marker's size proportionate to its population.
      radius: markerSize(comps[i].rev)
    }).bindPopup(`<h6>${comps[i].sector}</h6> 
                
                <h7>${comps[i].name}</h7>
                
                <h9>Revenue: ${comps[i].rev.toLocaleString()}</h9>`).addTo(myMap);
  }
  

});
