// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import Slide from "@mui/material/Slide";
// import { TransitionProps } from "@mui/material/transitions";
// import { TextField } from "@material-ui/core";

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<any, any>;
//   },
//   ref: React.Ref<unknown>
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function EditTodoDialog({
//   open,
//   dialogHandler,
//   name,
//   editTodo,
// }) {
//   const [editedText, setEditedText] = React.useState(name);

//   const textHandler = () => {
//     editTodo(name, editedText);
//     dialogHandler();
//   };

//   return (
//     <div>
//       <Dialog
//         open={open}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={dialogHandler}
//         aria-describedby="alert-dialog-slide-description"
//         fullWidth
//       >
//         <DialogTitle>{"Editando Tarefa"}</DialogTitle>
//         <DialogContent>
//           <TextField
//             defaultValue={editedText}
//             fullWidth
//             onChange={(e) => setEditedText(e.target.value)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={dialogHandler}>Cancelar</Button>
//           <Button onClick={textHandler}>Salvar</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

<></>