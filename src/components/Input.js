const Input = ({id,text,value,onChangeHandle}) => {
    return (
        <>
            <label htmlFor={id} className="">{text}</label>
            <input type='text' id={id}  value={value} onChange={onChangeHandle}/>
        </>
    )
}
export default Input;