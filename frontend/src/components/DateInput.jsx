export default function DateInput({
  labelDescription = 'Descrição do label',
  inputValue = '2022-09-23',
  onInputChange = null,
  id = 'id_do_input_date',
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <label className="ml-1" htmlFor={id}>
      {labelDescription}
      <input
        autoFocus={autoFocus}
        id={id}
        className="ml-3 my-2 border-2 border-black"
        type="date"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </label>
  );
}

/**/
