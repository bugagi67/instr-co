export const handleClick = ( id: string ) => {
  console.log( id )
  const el = document.getElementById( id )
  if ( el ) {
    el.scrollIntoView( { behavior: "smooth", block: "start" } )
  }
}