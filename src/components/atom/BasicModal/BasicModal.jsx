import Button from '@mui/joy/Button';
import TextField from '@mui/joy/TextField';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import React, { useState } from 'react';
import useEstimate from '../../../hooks/useEstimate';
import { useDispatch } from 'react-redux';
import { foodActions } from '../../../store/nutrition-slice';

const BasicModal = ({
    open,
    inputTitle,
    setOpen,
    setFoodList,
    selected,
    inputCompletedFood,
}) => {
    const [amount, setAmount] = useState(1);
    const calculatedNutrition = useEstimate(inputCompletedFood, amount);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Modal open={open}>
                <ModalDialog
                    aria-labelledby='basic-modal-dialog-title'
                    aria-describedby='basic-modal-dialog-description'
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                        backgroundColor: 'white',
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            marginBottom: 20,
                        }}
                    >
                        <span
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={() => setOpen(false)}
                            className='material-symbols-outlined'
                        >
                            close
                        </span>
                    </div>
                    <Typography
                        id='basic-modal-dialog-title'
                        component='h2'
                        level='inherit'
                        fontSize='1.25em'
                        mb='0.25em'
                    >
                        {inputTitle}
                    </Typography>
                    <Typography
                        id='basic-modal-dialog-description'
                        mt={0.5}
                        mb={2}
                        textColor='text.tertiary'
                    >
                        g 또는 ml을 입력해주세요.
                    </Typography>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            for (let key in selected) {
                                if (selected[key]) {
                                    setFoodList((prev) => {
                                        return {
                                            ...prev,
                                            [key]: [
                                                ...prev[key],
                                                [
                                                    inputTitle,
                                                    amount,
                                                    inputCompletedFood.category,
                                                ],
                                            ],
                                        };
                                    });
                                }
                            }
                            dispatch(foodActions.add(calculatedNutrition));
                            setOpen(false);
                        }}
                    >
                        <Stack spacing={2}>
                            <TextField
                                onChange={(e) => setAmount(e.target.value)}
                                label='섭취 중량'
                                autoFocus
                                required
                            />
                            <Button type='submit'>Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
};
export default BasicModal;
