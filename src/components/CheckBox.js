import React, {useState} from 'react';

function CheckBox(props) {
    const {label} = props;
    const [value, setValue] = useState("")

    const handleChange = () => {};

    return (
        <div>
            <form>
                <div style={{width: 300}}>{label}</div>
                <select style={{width: 300}} value={value} label={label} onChange={handleChange}>
                    <option value={value}>Option1</option>
                    <option value={value}>Option2</option>
                    <option value={value}>Option3</option>
                </select>
            </form>
        </div>
    );
}

export default CheckBox;