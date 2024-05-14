import { RotatingLines } from "react-loader-spinner";

export default function LoaderSpinner ({show}) {
  
  return <div style={{position: 'absolute', width: '100%', height: '100%', display: show ? 'flex' : 'none', 
      justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(40, 40, 40, .5)', zIndex: 100}}>
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="40"
      visible={true}
    />
  </div>
}