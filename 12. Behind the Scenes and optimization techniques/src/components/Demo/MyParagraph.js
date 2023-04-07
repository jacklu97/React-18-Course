const MyParagraph = ({show}) => {
  console.log("MyParagraph RUNNING")
  return ( <p>{show ? 'This is new!' : ''}</p> );
}
 
export default MyParagraph;