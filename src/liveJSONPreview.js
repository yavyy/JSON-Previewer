export const previewJSON = (fields) => {
  const result = {}
  fields.forEach((field) => {
    if(!field.name) return

    if(field.type === "nested") {
     result[field.name] = previewJSON(field.children) 
    } else {
      result[field.name] = field.type + (field.required ? " (required)" : "")
    }
  })
  return result
}