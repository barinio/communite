// import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { Card, Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";

import DefaultLayout from "@/layouts/default";

const instance = axios.create({
  baseURL: "http://localhost:3003",
});

const postUserLetter = async (data) => {
  const res = await instance.post("/letter", data);

  return res;
};

const phoneRegExp = /^[+]{0,1}380([0-9]{9})$/;
const emailRegExp =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "User name must be at least 2 characters")
    .max(60, "User name must be at most 64 characters")
    .required("User name is required"),
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegExp, "Invalid email address"),
  telephone: Yup.string()
    .required("Phone number is required")
    .matches(phoneRegExp, "+XX (XXX) XXX - XX - XX"),
});

interface FormValues {
  username: string;
  email: string;
  telephone: string;
  comments?: string;
}

export default function ContactUsPage() {
  const { t } = useTranslation();

  const initialValues: FormValues = {
    username: "",
    email: "",
    telephone: "",
    comments: "",
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: any
  ) => {
    console.log("Form submitted:", values);

    try {
      await postUserLetter(values);
    } catch (error) {
      console.log("error:", error);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <DefaultLayout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="flex flex-col items-center w-full h-full">
            <Card className="p-6 w-full mb-12 sm:w-[400px] lg:w-[696px]">
              <div className="mb-7">
                <Field
                  name="username"
                  type="text"
                  placeholder={t("inputName")}
                  className={`w-full  h-11 p-2 rounded-xl bg-[#38383b]/50 border-[#27272A] ${
                    errors.username && touched.username ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-7">
                <Field
                  name="email"
                  type="email"
                  placeholder={t("inputMail")}
                  className={`w-full h-11 p-2 rounded-xl bg-[#38383b]/50 border-[#27272A] ${
                    errors.email && touched.email ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-12">
                <Field
                  name="telephone"
                  type="tel"
                  placeholder={t("inputTel")}
                  className={`w-full h-11 p-2 rounded-xl bg-[#38383b]/50 border-[#27272A] ${
                    errors.telephone && touched.telephone
                      ? "border-red-500"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="telephone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="">
                <Field
                  as="textarea"
                  name="comments"
                  placeholder={t("inputCom")}
                  className={`w-full p-2  bg-[#38383b]/50 border-[#27272A] rounded-xl min-h-44 `}
                />
              </div>
            </Card>
            <Button
              type="submit"
              disabled={isSubmitting}
              className=" min-w-44 mb-11 md:mb-0 text-xl font-bold uppercase text-[#1F1D15] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]"
              size="lg"
            >
              {t("contactBtn1")}
            </Button>
          </Form>
        )}
      </Formik>
    </DefaultLayout>
  );
}

// import React from "react";
// import { useState } from "react";
// import { Input, Card, Button, Textarea } from "@nextui-org/react";
// import { useTranslation } from "react-i18next";

// import DefaultLayout from "@/layouts/default";

// export default function ContactUsPage() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     telephone: "",
//     comments: "",
//   });

//   const { t } = useTranslation();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     setFormData({
//       username: "",
//       email: "",
//       telephone: "",
//       comments: "",
//     });
//     // console.log("formData :>> ", formData);
//   };

//   return (
//     <DefaultLayout>
//       <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//         {/* <h1 className={title()}>contact-us</h1> */}

//         <Card className="p-6 w-full mb-6 md:p-11 lg:w-[696px] mt-16">
//           <form>
//             <Input
//               className="mb-7"
//               fullWidth
//               color="default"
//               size="lg"
//               placeholder={t("inputName")}
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//             />

//             <Input
//               className="mb-7"
//               fullWidth
//               color="default"
//               size="lg"
//               placeholder={t("inputMail")}
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//             />

//             <Input
//               className="mb-12"
//               fullWidth
//               color="default"
//               size="lg"
//               placeholder={t("inputTel")}
//               name="telephone"
//               type="telephone"
//               value={formData.telephone}
//               onChange={handleChange}
//             />

//             <Textarea
//               classNames={{
//                 input: "min-h-32 md:min-h-48 ",
//               }}
//               minRows={6}
//               placeholder={t("inputCom")}
//               name="comments"
//               value={formData.comments}
//               onChange={handleChange}
//             />
//           </form>
//         </Card>
//         <Button
//           className="min-w-44 mb-11 md:mb-0 text-xl font-bold uppercase text-[#1F1D15]  bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]"
//           onPress={handleSubmit}
//           type="submit"
//           size="lg"
//         >
//           {t("contactBtn1")}
//         </Button>
//       </section>
//     </DefaultLayout>
//   );
// }
