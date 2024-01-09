const IdPage = ({
  params
}: {
  params: {
    id: string | number
  }
}) => {
  const { id } = params
  return <div>my ID: {id}</div>
}
export default IdPage
