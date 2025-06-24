import { Button } from '@/components/ui/button'
import { RichText } from '@payloadcms/richtext-lexical/react'
import React from 'react'

const FormBlockRender = ({i, block}:{i:any, block:any}) => {
  return (
  <div
                key={i}
                className="max-w-2xl mx-auto bg-white border border-gray-200 p-6 rounded shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{block.form.title}</h3>
                {block.enableIntro && block.introContent && <RichText data={block.introContent} />}
                <form action="#" method="POST" className="space-y-4">
                  {block.form.fields.map((field: any, idx: number) => {
                    if (field.blockType === 'email')
                      return (
                        <div key={idx}>
                          <label htmlFor={field.name} className="block font-medium">
                            {field.label}
                          </label>
                          <input
                            type="email"
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            className="w-full border border-gray-300 p-2 rounded"
                          />
                        </div>
                      )
                    if (field.blockType === 'number')
                      return (
                        <div key={idx}>
                          <label htmlFor={field.name} className="block font-medium">
                            {field.label}
                          </label>
                          <input
                            type="number"
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            className="w-full border border-gray-300 p-2 rounded"
                          />
                        </div>
                      )
                    if (field.blockType === 'checkbox')
                      return (
                        <div key={idx} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id={field.name}
                            name={field.name}
                            defaultChecked={field.defaultValue}
                            className="h-5 w-5"
                          />
                          <label htmlFor={field.name}>{field.label}</label>
                        </div>
                      )
                    return null
                  })}
                  <Button
                    type="submit"
                    className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  >
                    {block.form.submitButtonLabel}
                  </Button>
                </form>
              </div>
  )
}

export default FormBlockRender