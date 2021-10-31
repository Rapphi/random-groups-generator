/**
 * Create Table Function
 * @param {String} array-array of element to insert in the rows 
 * @param {Number} size- numbers of colums
 */
const createTable=(array,index)=>{ 
    var trg = document.getElementById('table_container')
    var thead = document.createElement('table')
    var tbody = document.createElement("tbody")
    let title = document.createElement('caption');
    title.innerHTML="Team-"+index
    trg.appendChild(thead)
    thead.appendChild(title)
    thead.appendChild(tbody)
        let row = document.createElement('tr');
        for (elem in array) {
            let cell = document.createElement('td');
            cell.innerHTML = (array[elem].firstname)+" "+(array[elem].lastname)
            row.appendChild(cell);
            } 
        tbody.appendChild(row);
}
// Data Init
const runBtn =document.getElementById("generate")
const resetBtn =document.getElementById("reset")
const sizeinput =document.getElementById("size")
// Input Control
sizeinput.addEventListener("change",(e)=>{
  if((Number(e.target.value)<3) || (Number(e.target.value)>5)) { 
    document.getElementById('generate').disabled = true; 
} else { 
    document.getElementById('generate').disabled = false;
}
})
// Generate Table Button Listener
runBtn.addEventListener("click",()=>{
    //Ask for the database
    fetch('./assets/data/test.json').then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
          // create random groups
        size =Number(document.getElementById("size").value)
          let n_groups=(data.swartz.length)/size
          let temp_array=data.swartz
          let left=data.swartz.length
          for (let i=0; i< n_groups; i++ ){
                let a=[]
              for (let j=0; j<size; j++){
                let randomname=temp_array[Math.floor(Math.random()*left)]
                a.push(randomname)
                temp_array=temp_array.filter(x => !a.includes(x));
                left--
              }
            createTable(a,(i+1))
          }
      }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
})
// Reset Button Listener
resetBtn.addEventListener('click',()=>{
  const myNode = document.getElementById("table_container");
  myNode.innerHTML = '';
})

