import {useState} from "react"
import {Icon} from "../common/Icon"
import {IconList, IconSize} from "../types"

interface FileUploadProps {
  /**
   * Message for users, containing for example information about required file types
   */
  preUploadMessage?: string

  onChange: (
    name: string,
    type: string,
    size: number,
    file: ArrayBuffer
  ) => void
}

export function FileUpload({
  preUploadMessage = "PNG, JPG up to 10MB",
  onChange,
}: FileUploadProps) {
  const [file, setFile] = useState({} as ArrayBuffer)
  const [fileName, setFileName] = useState("")
  const [fileType, setFileType] = useState("")

  const onHandleFileSelected = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    const value = event.currentTarget.files
    if (value && value.length > 0) {
      let reader = new FileReader()
      reader.readAsArrayBuffer(value[0])
      reader.onload = function () {
        if (reader.result instanceof ArrayBuffer) {
          onChange(value[0].name, value[0].type, value[0].size, reader.result)
          setFile(reader.result)
          setFileName(value[0].name)
          setFileType(value[0].type)
        }
      }
      reader.onerror = function () {
        console.log(reader.error)
      }
    }
  }

  const displayImage = () => {
    if (file instanceof ArrayBuffer && file) {
      return (
        <img
          width="250px"
          height="250px"
          src={"data:image/jpeg;base64," + arrayBufferToBase64(file)}
        />
      )
    } else {
      return "No Files"
    }
  }

  const download = () => {
    if (file instanceof ArrayBuffer && file) {
      return (
        <a
          className="text-xs text-gray-500 dark:text-gray-400 hover:cursor-pointer"
          onClick={() => {
            downloadFile(file, fileName, fileType)
          }}
        >
          {" "}
          Download
        </a>
      )
    } else {
      return <></>
    }
  }

  return (
    <>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded">
        <div className="space-y-1 text-center flex flex-col items-center">
          <Icon icon={IconList.PICTURE} size={IconSize.Large} />
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative text-primary dark:text-dark-primary cursor-pointer rounded font-bold brightness-100 hover:brightness-90 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={onHandleFileSelected}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {preUploadMessage}
          </p>
        </div>
      </div>
      <div className="container">
        {displayImage()}
        {download()}
      </div>
    </>
  )
}

const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  var binary = ""
  var bytes = new Uint8Array(buffer)
  var len = bytes.byteLength
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}

const downloadFile = (
  arrayBuffer: ArrayBuffer,
  name: string,
  type = "application/octet-stream"
) => {
  const blob = new Blob([arrayBuffer], {type: type})
  let link = document.createElement("a")
  link.download = name
  link.type = type
  link.href = URL.createObjectURL(blob)
  link.click()
  link.remove()
}
