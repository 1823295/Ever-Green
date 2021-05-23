let sample
let counter = 1
let className

function handleClick(n, elm) {
    sample = n
    console.log(sample);
    var childDivs = document.getElementById('test').getElementsByTagName('div');
    for( i=0; i< childDivs.length; i++ )
    {
        var childDiv = childDivs[i];
        if(childDiv.classList.contains("focus-blue")){
            childDiv.classList.remove("focus-blue")
        }
        console.log(childDiv);
    }
    console.log(elm);
    elm.classList.add("focus-blue")
}
function generateMeal(params) {
    className = `${sample}-${counter}`
    let target = document.getElementById("target")
    let destination = document.getElementById('destination')
    let piChart = document.getElementById('pi')
    piChart.className= "fa fa-pie-chart"
    destination.innerHTML = target.value + "        Calories"
    console.log(target.value);
    console.log(destination);
   
    if(sample === "paleo"){
        console.log('paleo is called');
       
        let default1 = document.getElementById("anything-1");
        let default2 = document.getElementById("anything-2");
        let element1 = document.getElementById("paleo-1");
        let element2 = document.getElementById("paleo-2");
        if(!default1.classList.contains("d-none")){
            default1.classList.add("d-none")
        }
        if(!default2.classList.contains("d-none")){
            default2.classList.add("d-none")
        }
        if(counter%2 != 0){
            if(!element2.classList.contains("d-none")){
                element2.classList.add("d-none"); 
            }
            element1.classList.remove("d-none");
        }
        else if(counter%2===0){
            
            element2.classList.remove("d-none");
            element1.classList.add("d-none");
        }
        counter++
    }
    else if(sample === "vegetarian"){
        console.log('vegetarian is called');
        
        let element1 = document.getElementById("vegetarian-1");
        let element2 = document.getElementById("vegetarian-2");
        let default1 = document.getElementById("paleo-1");
        let default2 = document.getElementById("paleo-2");
        let default3 = document.getElementById("anything-1");
        let default4 = document.getElementById("anything-2");
        if(!default1.classList.contains("d-none")){
            default1.classList.add("d-none")
        }
        if(!default2.classList.contains("d-none")){
            default2.classList.add("d-none")
        }
        if(!default3.classList.contains("d-none")){
            default3.classList.add("d-none")
        }
        if(!default4.classList.contains("d-none")){
            default4.classList.add("d-none")
        }
        if(counter%2 != 0){
            if(!element2.classList.contains("d-none")){
                element2.classList.add("d-none"); 
            }
            element1.classList.remove("d-none");
        }
        else if(counter%2===0){
            
            element2.classList.remove("d-none");
            element1.classList.add("d-none");
        }
        counter++
    }
    else{
        
        let element1 = document.getElementById("anything-1");
        let element2 = document.getElementById("anything-2");
        let default1 = document.getElementById("paleo-1");
        let default2 = document.getElementById("paleo-2");
        let default3 = document.getElementById("vegetarian-1");
        let default4 = document.getElementById("vegetarian-2");
        if(!default1.classList.contains("d-none")){
            default1.classList.add("d-none")
        }
        if(!default2.classList.contains("d-none")){
            default2.classList.add("d-none")
        }
        if(!default3.classList.contains("d-none")){
            default1.classList.add("d-none")
        }
        if(!default4.classList.contains("d-none")){
            default4.classList.add("d-none")
        }
        if(counter%2 != 0){
        
            element1.classList.add("d-none");
            element2.classList.remove("d-none");
        }
        else if(counter%2===0){
            element2.classList.add("d-none");
            element1.classList.remove("d-none");
        }
        counter++
    }
    
   
   console.log(counter);
}
// document.getElementById("submit").addEventListener("click", function(event){
//     event.preventDefault()
//     let form = document.getElementById("form")
//     form[0].value = "Sobuj Hossain"
//     console.log("submited");
//   });
function handleSubmit(event) {
    event.preventDefault()
    let form = document.getElementById("form")
    form[0].value = "Sobuj Hossain"
    form[1].value = "sobujhossain@gmail.com"
    form[2].value = "Sobuj"
    form[3].value = "Hossain"
    console.log("submited");
    console.log(form);
}
function myClick(event) {
    event.preventDefault()
    let form = document.getElementById("form-1")
    form[0].value = "Mahallah Faruq, Block E, IIUM"
    form[1].value = "Gombak"
    form[2].value = "Malaysia"
    console.log("submited");
    
}
function addGoal(params) {
    let goals = document.getElementById("goals")
    childNodes = goals.innerHTML
    var txt;
    var goal = prompt("Please enter your Goal Name:", "");
    if (goal == null || goal == "") {
        txt = null;
     } else {
        txt = goal;
    }
//   document.getElementById("demo").innerHTML = txt;
    if(txt != null){
        let newChildNodes = `
        
        ${childNodes}
        <h4 class="small font-weight-bold">${txt}<span class="float-right">1%</span></h4>
        <div class="progress progress-sm mb-3">
            <div class="progress-bar bg-danger" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100" style="width: 1%;"></div>
        </div>
      `
      goals.innerHTML = newChildNodes
    }
    
    console.log(goals);
    
    console.log("I am add goal");
}
function changeImage(params) {
    let file = document.getElementById("file-input")
    fileChosen.textContent = "No file chosen"
    document.getElementById("myImg").src = "./assets/img/test.jpeg";
    document.getElementById("myImg").classList.add("scaled")
    document.getElementById("myImg-1").src = "./assets/img/test.jpeg";
   
    console.log(file);
    
}
let actualBtn = document.getElementById('file-input');

let fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})

// actualBtn.addEventListener('change', function(){
//   fileChosen.textContent = this.files[0].name
// })
function changeImage1(params) {
    let file = document.getElementById("file-input")
    fileChosen.textContent = "No file chosen"
    document.getElementById("myImg").src = "./assets/img/ferdousVai.jpeg";
    document.getElementById("myImg").classList.add("scaled")
    document.getElementById("myImg-1").src = "./assets/img/ferdousVai.jpeg";
   
    console.log(file);
    
}
function handleSubmit1(event) {
    event.preventDefault()
    let form = document.getElementById("form")
    form[0].value = "Ferdouz Ahmed"
    form[1].value = "ferdouzahmed@gmail.com"
    form[2].value = "Ferdouz"
    form[3].value = "Ahmed"
    console.log("submited");
    console.log(form);
}
function myClick1(event) {
    event.preventDefault()
    let form = document.getElementById("form-1")
    form[0].value = "Mahallah Ali, Block B, IIUM"
    form[1].value = "Gombak"
    form[2].value = "Malaysia"
    console.log("submited");
    
}