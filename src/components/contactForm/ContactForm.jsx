import React from 'react';
import { Formik} from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { MainForm , Lable, InputField,ErrorMess,Button} from './ContactForm.styled';


// присвоюємо в константи умови для алідації
const patternName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const massageName = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const patternPhone = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
const massagePhone = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";

// створюємо схему валідації для бібліотеки yap 
let schema = yup.object().shape({
    name: yup.string().matches(patternName, massageName).required('Name is required'),
    number: yup.string().matches(patternPhone, massagePhone).required('A phone number is required')
});

//  початкові дані  стейту  для  скидання форми (не враховуємо перманентні дані які введені для тестування)
const initialValues = { name: '', number: '' }
 
export const ContactForm = ({onSubmit}) => {
    const handleSubmit = (values, { resetForm }) => {
        // дані  передаються да допомогую бібліотеки Formik 
         onSubmit(values)
         resetForm()
    }
    return (
        <Formik initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}>
        <MainForm>
        <Lable>
        Name
            <InputField type="text" name="name" />
        </Lable>
            <ErrorMess name="name" component="p" />
        <Lable>
        Number
            <InputField type="tel" name="number" />
        </Lable>
            <ErrorMess name="number" component="p" />
       <Button type="submit">Add contact</Button>
       </MainForm>

        </Formik>
    );
    
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

