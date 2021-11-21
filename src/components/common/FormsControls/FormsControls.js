import React from "react";
import style from "./FormsControlsm.module.css";



export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ style.formControl + " " + (hasError ? style.error : "") }>
            <Element {...input} {...props} />
            { hasError && <span> { meta.error } </span> }
        </div>
    );
};




// НИЖЕ НАПИСАН ГОВНОКОД ДУБЛИРОВАННЫЙ


// const ControlForm = ({input, meta, child, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={style.formControl + " " + (hasError ? style.error : "")}>
//             {hasError && <span> {meta.error}</span>}
//             <div>
//                 {props.children}
//             </div>
//         </div>
//
//     )
// }
// //*************************************************************************
//
// export const TextArea = ({input, meta, ...props}) => {
//     return <ControlForm {...props}>
//         <textarea {...input} {...props} />
//     </ControlForm>
// }
// //*************************************************************************
//
// export const InputArea = ({input, meta, ...props}) => {
//     return <ControlForm {...props}>
//         <TextareaAutosize className={style.textareaAutosize}
//                           {...input} {...props}
//                           aria-label="minimum height"
//                           type="submit" rowsMin={3}
//                           placeholder="by Eremin:)"/>
//     </ControlForm>
//
// }
// //*************************************************************************
//
// export const Input = ({input, meta, ...props}) => {
//     return <ControlForm {...props}> <input {...input} {...props} /></ControlForm>
// }