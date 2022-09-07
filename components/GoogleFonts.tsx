type Font = {family: string, weight?: number[]}

const fontObjectToString = ({family, weight}: Font) => {
  let val = 'family=' + family.replace(/ /g, '+')
  if (weight) {
    val += ':wght@' + weight.join(';')
  }
  return val
}

const GoogleFonts = ({ fonts }: { fonts: Font[] }) => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href={
          'https://fonts.googleapis.com/css2?' +
          fonts.map(fontObjectToString).join('&') +
          '&display=swap'
        }
        rel="stylesheet"
      />
    </>
  )
}

export default GoogleFonts
