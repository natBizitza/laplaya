type OptionsType = { value: string, label: string };
type PropsType = {options: OptionsType[]};
const Select = ({options}: PropsType)=> {
    return <select>
        <option value="">--Please choose an option--</option>
        {options.map(option => <option value={option.value}>{option.label}</option>)}
    </select>
}

export default Select;