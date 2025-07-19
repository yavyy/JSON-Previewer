import { useState } from 'react'
import InputFieldsList from './components/InputFieldsList'
import { previewJSON } from './liveJSONPreview'

function App() {

  const [fields, setFields] = useState([])

  return (
    <>
      <div className='m-5 flex gap-10'>
        <InputFieldsList
          fields={fields}
          setFields={setFields}
        />
        <div className='bg-gray-100 border border-gray-300 w-2/5 h-fit py-2 px-3'>
          <pre className='text-gray-500 text-sm'>{JSON.stringify(previewJSON(fields), null, 2)}</pre>
        </div>
      </div>
      <button className='bg-white border border-gray-400 rounded py-1 px-3 text-sm m-5' onClick={() => console.log(previewJSON(fields))}>Submit</button>
    </>
  )
}

export default App