import { memo } from 'react'

type TitleProps = {
  address: {
    street: string
  }
  handleClickTitle: (value: string) => void
}

function Title(props: TitleProps) {
  console.log(props.address)
  return <h1 className='text-2xl font-extrabold'>To do list typescript</h1>
}

export default memo(Title)
