// export default function ToDo ({task, isDone}) {
//     return (
//         <li>Task : {task}</li>
//     )
// }

// 1
// export default function ToDo ({task, isDone}) {
//    if (isDone === true) {
//     return <li>Done : {task}</li>
//    }
//    else {
//     return <li>Pending : {task}</li>
//    }
// }

// 2
// export default function ToDo ({task, isDone, time = 0}) {
//    if (isDone === true) {
//     return <li>Done : {task} Duration : {time}</li>
//    }
//   return <li>To be done : {task}</li>
// }

// 3 conditional rendering : ternary operator
// export default function ToDo ({task, isDone, time = 0}) {
   
//     return isDone === true 
//     ? <li>Done : {task} Duration : {time}</li>
//     : <li>To be done : {task}</li>
// }

// 4 conditional rendering : &&
// export default function ToDo ({task, isDone, time = 0}) {
   
//     return isDone && <li>Done : {task} Duration : {time}</li>
// }

// 5 conditional rendering : ||
// export default function ToDo ({task, isDone, time = 0}) {
   
//     return isDone || <li> Not Done : {task} Duration : {time}</li>
// }

// 6 conditional rendering : null
// export default function ToDo ({task, isDone, time = 0}) {
   
//     if (isDone) {
//       return null;
//     }
//     else {
//       return <li>To be pending {task}</li>
//     }
// }

// 7 conditional rendering : variable
export default function ToDo ({task, isDone, time}) {
  let displayTime = time ? time : 100; 
  let listItem ;
   if (isDone === true) {
    listItem = <li>Done : {task} Duration : {displayTime}</li>
   }
   else {
    listItem = <li>To be done : {task}</li>
   }
   return listItem; 
}