'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [uploadFile, setUploadFile] = useState<File | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (!file) return

    setUploadFile(file)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        name="coverUrl"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
      />

      {uploadFile && (
        // eslint-disable-next-line
        <img
          src={URL.createObjectURL(uploadFile)}
          alt={uploadFile.name}
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
