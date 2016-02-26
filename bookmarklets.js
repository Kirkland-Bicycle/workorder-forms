//Bookmarklets

//Test template

javascript:(function () {
  var workorderForm = document.createElement('script');
  workorderForm.type = 'text/javascript';
  workorderForm.src = 'https://github.com/Kirkland-Bicycle/workorder-forms/blob/master/mountain.js';
  document.getElementsByTagName('body')[0].appendChild(workorderForm);


  var insertForm = document.createElement('script');
  insertForm.type = 'text/javascript';
  insertForm.src = 'https://github.com/Kirkland-Bicycle/workorder-forms/blob/master/insertForm.js';
  document.getElementsByTagName('body')[0].appendChild(insertForm);
  }
})();


javascript:

function(){
var s=document.createElement("script");
s.src="https://github.com/Kirkland-Bicycle/workorder-forms/blob/master/mountain.js";
s.type="text/javascript";
document.getElementsByTagName("body")[0].appendChild(s);};

function(){
	insertForm()
};



javascript:var s=document.createElement("script");s.src="https://github.com/Kirkland-Bicycle/workorder-forms/blob/master/mountain.js";s.type="text/javascript";document.getElementsByTagName("body")[0].appendChild(s);


function runScript() {
    insertForm();
};
javascript:var s=document.createElement("script");s.src="https://github.com/Kirkland-Bicycle/workorder-forms/blob/master/mountain.js";s.type="text/javascript";document.getElementsByTagName("body")[0].appendChild(s);


if(runScript) runScript();


javascript:(function(){function runScript(){insertForm()};var s=document.createElement("script");s.src="https://github.com/Kirkland-Bicycle/workorder-forms/blob/master/mountain.js";s.type="text/javascript";document.getElementsByTagName("body")[0].appendChild(s);})();


var addScript=function(filename,callback){
            var e=document.createElement('script');
            e.type = 'text/javascript';
            e.src = filename;
            if(callback){
                e.onloadDone=false;//for Opera
                e.onload=function(){e.onloadDone=true;callback();};
                e.onReadystatechange=function(){
                    if(e.readyState==='loaded'&& !e.onloadDone){
                        e.onloadDone=true;callback();
                    }
                }
            }
        if(typeof(e)!=='undefined'){
            document.getElementsByTagName('head')[0].appendChild(e);
        }
    }
addScript('https://github.com/Kirkland-Bicycle/workorder-forms/blob/master/mountain.js',function(){insertForm();});