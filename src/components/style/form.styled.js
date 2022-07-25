import styled from "styled-components";

const FormST = styled.form`
    width: 100%;
    max-width: 500px;
    margin: auto;
`
const FormInputContST = styled.div`
    display: flex;
    flex-direction: ${(props) => props.line === 'vertical' ? 'column' : 'row'};  
    padding: 5px;
    border: 1px solid #000;
    border-radius:7px;
    margin-bottom: 20px;
`

const FormInlineContST = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`
const FormInputContGST = styled.div`
    width: 100%;
    margin-bottom: 10px;
   &:first-child {
    margin-right: 10px;
   }
`

const FormLabelST = styled.label`
    display: inline-block;
  padding-bottom: 10px;
`

const FormInputST = styled.input`
    width: ${(props) => props.space ? props.space : '100%'};
    border: none;
    outline: none;
    padding: 5px;
`

const FormSelectST = styled.select`
    width: ${(props) => props.space ? props.space : '100%'};
    padding: 10px;
    border-radius:7px;
    border: none;
    outline:none;
`

const FormOptionST = styled.option`
    width: ${(props) => props.space ? props.space : '100%'};
`

export const FormTS = ({ children }) => {
    return (
        <FormST>{children}</FormST>
    )
}

export const FormLabelTS = ({ children }) => {
    return (
        <FormLabelST>{children}</FormLabelST>
    )
}

export const FormInlineContTS = ({ children }) => {
    return (
        <FormInlineContST>{children}</FormInlineContST>
    )
}

export const FormInputTS = ({ type, space, icon, placeholder, onChange }) => {
    return (
        <>
            <FormInlineContST>
                {icon}
                <FormInputST onChange={onChange} space={space} type={type} placeholder={placeholder} />
            </FormInlineContST>
        </>
    )
}

export const FormSelectTS = ({ children, icon, value, onChange }) => {
    return (
        <FormInputContST>
            <FormInlineContST>
                {icon}
                <FormSelectST onChange={onChange} value={value}>{children}</FormSelectST>
            </FormInlineContST>
        </FormInputContST>
    )
}

export const FormOptionTS = ({ children, value }) => {
    return (
        <FormOptionST value={value}>{children}</FormOptionST>
    )
}

export const FormInputContTS = ({ children, line }) => {
    return (
        <FormInputContST line={line}>{children}</FormInputContST>
    )
}

export const FormInputContGTS = ({ children, line }) => {
    return (
        <FormInputContGST line={line}>{children}</FormInputContGST>
    )
}

