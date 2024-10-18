import SttForm from './_components/SttForm'

const SpeechToText = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <h1 className="text-lg font-semibold p-2 border-b">Speech to Text</h1>
      <SttForm />
    </div>
  )
}

export default SpeechToText 