var section = document.querySelector('section');
var container = document.getElementsByClassName('container');
    var requestURL = 'http://design.propcom.co.uk/buildtest/accordion-data.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var Sections = request.response;
      displaySections(Sections);
    }
    
    function displaySections(jsonObj) {
      var info = jsonObj['blocks'];
      for(var i = 0; i < info.length; i++) {
        //var sectionDiv = document.createElement('div');
        var sectionHead = document.createElement('h2');
        var sectionDivContent = document.createElement('div');
        var sectionContent = document.createElement('p');
        sectionHead.classList.add("accordian");
        sectionDivContent.classList.add("panel");
        sectionHead.textContent = info[i].heading;
        sectionContent.textContent = info[i].content;
        
        //changed sectionHead from SectionDiv
        section.appendChild(sectionHead);
        //sectionDiv.appendChild(sectionHead);
        section.appendChild(sectionDivContent);
        sectionDivContent.appendChild(sectionContent);

        
      } 
        var a = document.getElementsByClassName("accordian");
        var b = document.getElementsByClassName("panel");
        var i;
        for (i = 0; i < a.length; i++) {
        a[i].addEventListener("click", function() {
        this.classList.toggle("active");
        
        b = this.nextElementSibling;
            if (b.style.display === "block") {
          b.style.display = "none";
            }
            else {
           b.style.display = "block";
            }
        });
    }
    }

