import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'
import config from '../config/config'
import { useSelector } from 'react-redux'

function RTE({name, control, label, defaultValue = ''}) {

    const darkMode = useSelector((state) => state.themeMode.darkMode)

  return (
    <div className={`${darkMode ? 'text-white' : 'text-gray-600'} w-full`}>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
        <Controller
            name={name || 'content'}
            // Control sent by parent
            control={control}
            render={({field:{onChange}}) => (
                <Editor
                    apiKey={config.tinyMCE_API_KEY}
                    initialValue={defaultValue}
                    init={{
                        initialValue: defaultValue,
                        height: 500,
                        menubar: true,
                        plugins: [
                            "image",
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                            "anchor",
                        ],
                        toolbar:
                        "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }}
                    onEditorChange={onChange}
                />
            )}
        />
    </div>
  )
}

export default RTE