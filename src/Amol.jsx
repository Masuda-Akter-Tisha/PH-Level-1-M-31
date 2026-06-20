export default function Amol ({amol, isDone}) {
    const prophet = 'Muhammed (Dorud)';
    if (isDone) {
        return <li style={{fontStyle : 'italic', listStyle : 'none'}}>Allah and {prophet} will be happy for : {amol}</li>
    }
    return <li style={{fontStyle : 'italic', listStyle : 'none'}}>to be pending : {amol}</li>
}