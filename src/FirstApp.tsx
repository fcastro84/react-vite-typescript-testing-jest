

const FirstApp = ({ title, subTitle= 'Testing with Jest', name = 'React 18'}: {
    title: string,
    subTitle?: string,
    name?: string
}) => {
  return (
    <>
      <h1 data-testid="test-title">{ title }</h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}

export default FirstApp
