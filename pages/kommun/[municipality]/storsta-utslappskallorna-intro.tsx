import loadMunicipalities from '../../../utils/_load_municipality'

export default function Page() {
  return <h1>Storsta utslappskalloprna intro</h1>
}

export const getServerSideProps = loadMunicipalities
