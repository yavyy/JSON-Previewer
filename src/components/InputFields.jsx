import React from 'react'

function InputFields({ field, onChange, onRemove }) {
  return (
    <div className='flex items-center gap-5 mb-2'>
      <input
        className='bg-auto border border-gray-300 rounded-sm text-sm px-2 py-1 text-gray-600'
        type="text"
        placeholder="Field Name"
        value={field.name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <select
        className='bg-auto border border-gray-200 rounded-sm text-sm px-5 py-1 text-gray-600 overflow-hidden'
        value={field.type}
        onChange={(e) => onChange("type", e.target.value)}
      >
        <option value="">Field Type</option>
        <option value="string">string</option>
        <option value="number">number</option>
        <option value="nested">nested</option>
        <option value="boolean">boolean</option>
        <option value="boolean">float</option>
      </select>
      <label className='text-sm flex items-center gap-1 cursor-pointer'>
        <input
          className='size-5'
          type="checkbox"
          checked={field.required}
          onChange={(e) => {
            onChange("required", e.target.checked)
            console.log(e.target.checked);
          }}
        />
        Required
      </label>
      <button className='font-bold bg-gray-300 px-2 py-1 text-xs rounded-sm cursor-pointer text-black' onClick={onRemove}>&#10006;</button>
    </div>
  )
}

export default InputFields