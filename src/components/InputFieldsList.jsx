import InputFields from './InputFields'

function InputFieldsList({ fields, setFields }) {

  const addInputFields = () => {
    setFields([...fields, {name: "", type: "", required: false, children: []}])
    console.log(fields)
  }

  const removeFields = (index) => {
    const updated = [...fields]
    updated.splice(index, 1)
    setFields(updated)
  }

  const updateInputField = (index, key, value) => {
    const updated = [...fields]
    updated[index][key] = value

    if(key === "type" && value != "nested") {
      updated[index].children = []
    }

    setFields(updated)
  }

  return (
    <div>
      {
        fields.map((field, index) => (
          <div key={index}>
            <InputFields
              field={field}
              onChange={(key, value) => updateInputField(index, key, value)}
              onRemove={() => removeFields(index)}
            />
            {
              field.type === "nested" && (
                <div className='ml-5 border w-fit border-gray-200 p-4 rounded'>
                  <InputFieldsList
                    fields={field.children}
                    setFields={(newChildren) => {
                      const updated = [...fields]
                      updated[index].children = newChildren
                      setFields(updated)
                    }}
                  />
                </div>
              )
            }
          </div>
        ))
      }
      <button className='bg-blue-600 text-white px-3 py-1 rounded my-2 text-sm' onClick={addInputFields}>+ Add Field</button>
    </div>
  )
}

export default InputFieldsList