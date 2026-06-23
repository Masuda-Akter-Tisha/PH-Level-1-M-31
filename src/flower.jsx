import './App.css'
// export default function Flower ({flower}){
//     return <li>flower name : {flower}</li>
// }

export default function Employee ({employee}) {
    console.log(employee);
    
return (
    <div className='employee'>
        <h2>Employee id: {employee.id}</h2>
        <h3>Employee name: {employee.name} </h3>
        <p>Employee age: {employee.age} </p>
        <p>Employee job: {employee.job} </p>
    </div>
)
}