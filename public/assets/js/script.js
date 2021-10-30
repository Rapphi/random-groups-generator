/**
 * Create Table Function
 * @param {String} array-array of element to insert in the rows 
 * @param {Number} size- numbers of colums
 */
const createTable=(array,size)=>{ 
    var trg = document.getElementById('table_container')
    var thead = document.createElement('table')
    var tbody = document.createElement("tbody")
    trg.appendChild(thead)
    thead.appendChild(tbody)
    for (let y = 0; y < 2; y++) {
        let row = document.createElement('tr');
        if (y== 0){
            for (elem in array){
            let cell = document.createElement('td');
            cell.innerHTML = ("Name")
            row.appendChild(cell);
            }
        }else{
        for (elem in array) {
            let cell = document.createElement('td');
            cell.innerHTML = (array[elem].firstname)
            row.appendChild(cell);
            } 
        }
        tbody.appendChild(row);
    }
}
const runBtn =document.getElementById("generate")
runBtn.addEventListener("click",()=>{
    //Ask for the database
    fetch('./assets/data/db.json').then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
          // create random groups
        const size =Number(document.getElementById("size").value)
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
            createTable(a)
          }
      }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
})

