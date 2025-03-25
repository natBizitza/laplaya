import Select from "@/app/components/Select";

const  SearchPart = async()=> {
    const data = await fetch('https://platges.interior.gencat.cat/api/platges')
    const beaches = await data.json();
    const beachesNamesOnly = beaches.map(beach => beach['Platja']);


    return(<ul>{beaches[0]}</ul>/*<Select options={[{value: 'Test', label: 'Test'}]} />*/)
}

export default SearchPart;