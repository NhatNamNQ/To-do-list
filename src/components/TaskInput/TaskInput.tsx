export default function TaskInput() {
  return (
    <div className='flex gap-4'>
      <input
        className='w-full border border-gray-400 rounded-lg p-1 text-sm focus:outline-none focus:border-black'
        placeholder='caption goes here'
      />
      <button type='submit' className='border border-gray-400 rounded-lg w-[20%]'>
        ➕
      </button>
    </div>
  )
}
