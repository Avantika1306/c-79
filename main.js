people_array=[];
 function submit(){
var name1=document.getElementById("person_1").value;
var name2=document.getElementById("person_2").value;
var name3=document.getElementById("person_3").value;
var name4=document.getElementById("person_4").value;
people_array.push(name1);
people_array.push(name2);
people_array.push(name3);
people_array.push(name4);
document.getElementById("name").innerHTML = people_array;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    people_array.sort();
    document.getElementById("name").innerHTML = people_array;
}