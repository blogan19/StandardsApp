//function to create the logo and attach it to the class 'logo'
function logo(){

  var logo = document.getElementsByClassName("logo");

  for(var i = 0; i< logo.length; i++){

  logo[i].innerHTML= '<svg height="280" width="300" id="logo"><circle cx="150" cy="150" r="100" fill="white"></circle><rect x="70" y="130"  width="160" height="40" rx="10" ry="10" fill="#0f9b0f"/><rect x="130" y="70" width="40" height="160" rx="10" ry="10" fill="#0f9b0f"/><rect x="145" y="70"  width="10" height ="160" fill="rgb(255,255,255")/><rect x="70" y="145"  width="160" height="10" fill="rgb(255,255,255)"/><line x1="120" y1="120" x2="145" y2="145" style="stroke:rgb(255,255,255); stroke-width:4"/><line x1="120" y1="180" x2="145" y2="155" style="stroke:rgb(255,255,255); stroke-width:4"/><line x1="180" y1="120" x2="155" y2="145" style="stroke:rgb(255,255,255); stroke-width:4"/><line x1="180" y1="180" x2="155" y2="155" style="stroke:rgb(255,255,255); stroke-width:4"/></svg>';
  }
} 
logo(); 


function lineBreak(){


var lineBreak = document.getElementsByClassName("lineBreak");

for(var i=0; i < lineBreak.length; i++){
  lineBreak[i].innerHTML = '<svg height="20" width="100%"><line x1="0" y1="7.5" x2="47.5%" y2="7.5" style="stroke: #56ab2f; stroke-width:0.5"/><line x1="52.5%" y1="7.5" x2="100%" y2="7.5" style="stroke: #56ab2f;stroke-width:0.5"/><line x1="0" y1="10" x2="47.5%" y2="10" style="stroke: #56ab2f;stroke-width:0.5"/><line x1="52.5%" y1="10" x2="100%" y2="10" style="stroke: #56ab2f;stroke-width:0.5"/><rect x="48.25%" y="7.5" width="3.5%" height="2.5" rx="2" ry="2" style="fill:#56ab2f; opacity: 0.2"/><rect x="49.5%" y="3.75" width="1%" height="10" rx="2" ry="2" style="fill:#56ab2f; opacity: 0.2"/></svg>';
  }
}
lineBreak();

function reload(){
  var a = confirm('Are you sure you want to reset data entry?');

  if(a == true){
    location.reload();
  }
}

  function showWelcomebtn(){
    var wBtn = document.getElementById('welcomeBtn');
    var load = document.getElementById('loader');

    wBtn.style.display = 'block';
    load.style.display = 'none';
  }
  window.onload = setTimeout(showWelcomebtn, 2000);


//creates the checkboxes and exit btns within each standard pop up
function createChk(){
  
   for(var i = 1; i < 77; i++){

      var div = document.getElementById("p"+i);
    
      div.innerHTML =
      '<label for="chk'+i+'">Mark Complete:</label><input type="checkbox" id="chk'+i+'" onclick="save('+i+');completed();stats()"><hr>';
      div.insertAdjacentHTML('beforebegin',  '<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a>');
    }
}
createChk();
 
function save(value){
  var checkbox = document.getElementById('chk'+value);
  localStorage.setItem("checkbox"+value, checkbox.checked);
}

function load(){
  for(var i = 1; i < 77; i++){
    var checked = JSON.parse(localStorage.getItem("checkbox"+i));
      document.getElementById("chk"+i).checked = checked;
    }
}
load();

function completed(){
  var checkedCount =0;
  for(var i = 1; i < 77; i++){    
    var chk = document.getElementById('chk'+i);
    var standard = document.getElementById('s'+i);
    if(chk.checked == true){
      standard.style.backgroundColor = '#a8e063';
      standard.style.opacity = 0.2;  
      standard.style.fontSize = '12px';
      checkedCount = checkedCount +1;
    }
    if(chk.checked == false){
      standard.style.backgroundColor = '';
      standard.style.opacity = 1;   
      standard.style.fontSize = ''; 
    }
  }
  return checkedCount;
}
completed();


function stringStandards(){
    var standardsArray = [];
    for(var i =1; i<77; i++){

      var a = document.getElementById('c'+i);
      if(a.checked == true){
       standardsArray.push(a.value);
    }
    }
    var arrayString = standardsArray.toString();
    return arrayString;
  }

function showStandards(){
   var standards = stringStandards();
   var disp = document.getElementById('standardsmetDisp');
   disp.style.display = "block";
   disp.innerHTML = standards;
}

function get_todos() {
    var todos = new Array;

    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
function getDesc(){
    var desc = new Array;

    var desc_str = localStorage.getItem('descrip');
    if (desc_str  !== null) {
        desc = JSON.parse(desc_str ); 
    }
    return desc;
}
function getDate(){
	var date = new Array;

	var date_str = localStorage.getItem('storedDate');
	if(date_str != null){
		date = JSON.parse(date_str);
	}
	return date;
}
function getStandards(){
  var standards = new Array;

  var standards_str = localStorage.getItem('storedStandards');
  if(standards_str != null){
    standards = JSON.parse(standards_str);
  }
  return standards;
}

 
function add() {
    var task = document.getElementById('task').value;
    var desc = document.getElementById('description').value;
    var date = document.getElementById('dateEntry').value;
    var standards = stringStandards();

    var todos = get_todos();
    var description = getDesc();
    var dateArray = getDate();
    var standardsArray = getStandards();

    if(task == "" || task == null){
      alert("Enter Note Description")
    } else{
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    description.push(desc);
    localStorage.setItem('descrip', JSON.stringify(description));

    dateArray.push(date);
    localStorage.setItem('storedDate', JSON.stringify(dateArray));
    
    standardsArray.push(standards);
    localStorage.setItem('storedStandards', JSON.stringify(standardsArray));


    task.value="";
    desc.value="";
    date.value="";
  }
    show();
   location.reload();

    return false;
}
 
function remove() {

    var confirmBtn = confirm("Are you sure you want to delete this note?");

    if(confirmBtn == true){
      var id = this.getAttribute('id');
      var todos = get_todos();
      var descArray = getDesc();
      var dateArray = getDate();
      var standardsArray = getStandards();


      todos.splice(id, 1);
      localStorage.setItem('todo', JSON.stringify(todos));

      descArray.splice(id, 1);
      localStorage.setItem('descrip', JSON.stringify(descArray));

      dateArray.splice(id, 1);
      localStorage.setItem('storedDate', JSON.stringify(dateArray));

      standardsArray.splice(id, 1);
      localStorage.setItem('storedStandards', JSON.stringify(standardsArray));

    location.reload();
      show();

    } 
    return false;
}
 
function show() {
    var todos = get_todos();
    var desc = getDesc();
    
    var html = '<ul data-role="listview" data-inset="true" class="wordWrap">';
    for(var i=0; i<todos.length; i++) {
        html +=  '<li><a href="#page4" class="links " onclick="displayDesc('+ i +')">' + todos[i] +  '</a>' +  '<a href=""class="remove" id="' + i  + '" data-icon="delete"> delete</a> </li>' ;

    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };

}



function displayDesc(id){

    var desc = getDesc();
    var title = get_todos();
    var date = getDate();
    var standards = getStandards();


    var titleDesc = document.getElementById('titleDisp');
    var displayDesc = document.getElementById('descDisp');
    var dateDisp = document.getElementById('dateDisp');
    var standardsDisp = document.getElementById('standardsDisplay');

    titleDesc.innerHTML = title[id];
    displayDesc.innerHTML = desc[id];
    dateDisp.innerHTML = date[id];
    standardsDisp.innerHTML = standards[id];
    document.getElementById('evidenceDisplay');
}

function showAll(){
	var desc = getDesc();
    var title = get_todos();
    var date = getDate();
    var standards = getStandards();

    for(var i = 0; i < desc.length; i++){
    	var container = document.getElementById('allContainer');
    	var div = document.createElement('div');
    	div.className="viewallDiv wordWrap ui-body ui-body-a ui-corner-all";
    	div.innerHTML =  '<h4>' + title[i] + '</h4><p>' + desc[i] + '</p><p>' + date[i] + '</p><p>'  + standards[i] + '</p>';
    	container.appendChild(div);

    }

}
showAll();




function clearData(){

  var clear = confirm("Are you sure you want to delete all data(this will remove all records from the app)?");
  if(clear == true){
      localStorage.clear();
      location.reload();
  }
}



function stats(){


  var complete = completed(); 
  var completeDisp= document.getElementById('standards');
  completeDisp.innerHTML = complete;

  var perc = ((complete/76)*100).toFixed(1);
  var percDisp = document.getElementById('percComplete');
  percDisp.innerHTML = perc+"%";

  var noRemain = document.getElementById('remainingStandards');
  noRemain.innerHTML = 76 - complete;

  var progress = document.getElementById('progress');
  progress.style.width = perc +'%';

  if(complete == 76){
    alert('conratulations');
  }
}
stats();



document.getElementById('add').addEventListener('click', add);

show();