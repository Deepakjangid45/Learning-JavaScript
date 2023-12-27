let url = `https://jsonplaceholder.typicode.com/users`
let array=[]
let parent = document.getElementById('parent')


const fetchData = async () => {
    await fetch(url).then(async (data) => {
        result= await data.json();
        result.map((e)=>array.push(e.name))
        display(array)
    })
        .catch((err) => {
            console.log(err);
        })
}
fetchData()

function search (e){
    const searchValue = e.value
    // console.log(searchValue)
    
    let newArr = array.filter((e)=> e.includes(searchValue))
    // console.log(`newArr`,newArr)
    if (newArr.length === 0){
        display(array)
    }
    else{display(newArr)}
}
function display(data){
    console.log(data)
    document.getElementById('parent').innerHTML=""
    data.forEach(element => {
        
        let name = document.createElement('h1')
        name.innerText=element
        parent.append(name)
        
    });
}