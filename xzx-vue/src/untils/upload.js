import Vue from 'vue'
const v = new Vue()

export default function beforeUpload (file, arr = [], mssage) {
  const typeList = [...arr]
  const fileName = file.name
  const extension = fileName.substr(fileName.lastIndexOf('.') + 1)
  const isRT = typeList.includes(extension)
  if (!isRT) {
    v.$message.error(mssage)
  }
  return isRT
}
