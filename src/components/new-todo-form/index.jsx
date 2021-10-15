import { useForm } from 'react-hook-form';
import { Input } from '../Input-field';

import "./styles.css"

export const NewTodoForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();
    
    const onSubmit = (date) => {
        console.log()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Add input fields */}
            <Input
                type="text"
                name="title"
                label="Todo (e.g do laundry)"
                errors={errors}
                register={register}
                validationSchema={
                    {
                        required: "Todo text is required",
                        minLength: {
                            value: 3,
                            message: "Please enter at least 3 characters"
                        }
                    }
                }
                required
            />

            <Input
                type="date"
                name="date"
                label="Due Date"
                errors={errors}
                register={register}
                validationSchema={
                    {
                        required: "Todo deadline is required",
                    }
                }
                required
            />

            <input type="submit" />
        </form>
    )
}