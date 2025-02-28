'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Formik, Form, Field } from "formik";
import EastIcon from '@mui/icons-material/East';
import { useRouter } from "next/navigation"
import * as yup from "yup";
import Aos from 'aos'
import { Button, TextInput } from '@alyment-testkaique/react'

import { HOME_PATH } from '@/routes/routes';
import { FieldSelect } from '@/components/FieldSelect/FieldSelect';
import { optionsTypeAccount } from './utils/loginUtils';

import { submitLoginData } from './types/loginTypes';

import 'aos/dist/aos.css'
import { withAuthScreen } from '../../../hocs/withAuthScreen';

function LoginPage() {
  const router = useRouter();
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const validationSchema = yup.object().shape({
    userName: yup.string().required("Usuário obrigatório"),
    password: yup.string().required("Senha obrigatório"),
    selectedOptionAdminOrUser: yup.string().required("Selecione uma opção")
  });

  const handleSubmitLogin = (values: submitLoginData) => {
    setLoadingSubmit(true);

    if (!values) {
      setLoadingSubmit(false)
      return;
    }

    setTimeout(() => {
      sessionStorage.setItem('accountType', values.selectedOptionAdminOrUser);
      sessionStorage.setItem('userName', values.userName);
      document.cookie = `accountType=${values.selectedOptionAdminOrUser}; path=/`;
      router.push(HOME_PATH);
      setLoadingSubmit(false);
    }, 1000);

  }

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='w-full h-[calc(100vh-64px)] relative'>
      <div className=" flex h-full items-center justify-center gap-40">
        <div
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="900"
          className='hidden md:block'
        >
          <Image
            src="/login/alyment_app.png"
            alt='Imagem do app alyment sendo mostrado em um iphone'
            width={340}
            height={433}
            quality={100}
          />
        </div>

        <Formik
          initialValues={{ userName: '', password: '', selectedOptionAdminOrUser: '' }}
          onSubmit={(values) => handleSubmitLogin(values)}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={validationSchema}
        >
          {
            ({ errors }) => (
              <Form
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
                autoComplete='off'
              >
                <div className="w-screen md:w-[400px] px-2 md:px-0 flex flex-col gap-8">

                  <div className="flex flex-col gap-12">
                    <TextInput
                      name="userName"
                      title='Usuário'
                    />

                    <TextInput
                      type='password'
                      name="password"
                      title='Senha'
                    />
                  </div>

                  <Field
                    name="selectedOptionAdminOrUser"
                    as={FieldSelect}
                    label="Selecione tipo de conta"
                    placeholder="Escolha..."
                    options={optionsTypeAccount}
                    errors={errors.selectedOptionAdminOrUser}
                  />

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
                </div>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  );
}

export default withAuthScreen(LoginPage);