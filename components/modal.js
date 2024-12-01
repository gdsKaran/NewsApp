import classes from "./modal.module.css";
export default function Modal({ children }) {
  return (
    <>
      <div className={classes.modalBackDrop} />
      <dialog open className={classes.modalContent}>
        {children}
      </dialog>
    </>
  );
}
