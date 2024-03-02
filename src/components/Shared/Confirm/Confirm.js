import { Confirm as ConfirmSu } from "semantic-ui-react";
// componente del modal de confirmacion

export function Confirm(props) {
 const { ...rest } = props;

 return <ConfirmSu className="confirm" size="mini" {...rest}/>
}
