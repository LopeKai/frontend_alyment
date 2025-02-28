import { Button, TextInput } from "@alyment-testkaique/react";
import { FormModalCrudProps } from "./types/formModalCrudTypes";

import EastIcon from '@mui/icons-material/East';
import { useField } from "formik";

export function FormModalCrud(props: FormModalCrudProps) {
    const { loadingSubmit } = props;

    const [createdAtField] = useField('createdAt');
    const [nameField] = useField('name');
    const [countryField] = useField('country');
    const [cityField] = useField('city');
    const [companyField] = useField('company');
    const [jobField] = useField('job');
    const [motherField] = useField('mother');

    return (
        <div className="w-full flex flex-col gap-6 md:gap-10">
            <div className="grid grid-cols-2 gap-8 md:gap-10">
                <TextInput
                    type="date"
                    name="createdAt"
                    title='Data de Criação'
                    value={createdAtField.value}
                    onChange={createdAtField.onChange}
                />
                <TextInput
                    name="name"
                    title='Nome'
                    value={nameField.value}
                    onChange={nameField.onChange}
                />
                <TextInput
                    name="country"
                    title='País'
                    value={countryField.value}
                    onChange={countryField.onChange}
                />
                <TextInput
                    name="city"
                    title='Cidade'
                    value={cityField.value}
                    onChange={cityField.onChange}
                />
                <TextInput
                    name="company"
                    title='Empresa'
                    value={companyField.value}
                    onChange={companyField.onChange}
                />
                <TextInput
                    name="job"
                    title='Cargo'
                    value={jobField.value}
                    onChange={jobField.onChange}
                />
                <TextInput
                    name="mother"
                    title='Mãe'
                    value={motherField.value}
                    onChange={motherField.onChange}
                />
            </div>

            <Button
                type="submit"
                size="full"
                disabled={loadingSubmit}
            >
                {
                    loadingSubmit ?
                        <>
                            Carregando...
                        </>
                        :
                        <>
                            Entrar
                            <EastIcon />
                        </>
                }
            </Button>
        </div >
    )
}