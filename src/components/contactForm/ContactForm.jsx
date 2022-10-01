// import React , {Component} from "react";
 import React from 'react';
 import { Formik, Form, Field , ErrorMessage} from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';


const patternName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const massageName = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const patternPhone = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
const massagePhone = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";


let schema = yup.object().shape({
    name: yup.string().matches(patternName, massageName).required('Name is required'),
    number: yup.string().matches(patternPhone, massagePhone).required('A phone number is required')
});

const initialValues = { name: '', number: '' }
 
export const ContactForm = ({onSubmit}) => {
    const handleSubmit = (values, {resetForm}) => {
         onSubmit(values)
        resetForm()
    }
    return (
        <Formik initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}>
        <Form>
        <label>
        Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
        </label>
        <label>
        Number
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="div" />
        </label>
    <button type="submit">Add contact</button>
    </Form>

        </Formik>
    );
    
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

// ================================================

// export class ContactForm extends Component {
//     state = {
//     name: '',
//     number: ''
//     }

//     handleChange = e => { 
//     const {name,value} = e.currentTarget 
//     this.setState(
//       { [name]: value, })
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//       this.props.onSubmit(this.state);
//       this.reset();
//     }

//     reset = () => {
//         this.setState ({name: '', number: ''})
//     }
//     render() {
//         return (
//         <form  onSubmit={this.handleSubmit}>
//         <label>
//         Name
//         <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//         />
//         </label>
//         <label>
//         Number
//         <input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//         />
//         </label>
//     <button type="submit">Add contact</button>
//     </form>
//     );
//     }
// }
