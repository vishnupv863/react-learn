function Food(){
    const food1='orange';
    const food2='banana';
    return(
        <ul>
            <li>apple</li>
            <li>{food1}</li>
            <li>{food2.toLocaleUpperCase()}</li>
        </ul>
    );
}

export default Food;