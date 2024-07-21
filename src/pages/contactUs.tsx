import React from "react";
import { useState } from "react";
import { Input, Card, Button, Textarea } from "@nextui-org/react";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    telephone: "",
    comments: "",
  });

  // const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setFormData({
      username: "",
      email: "",
      telephone: "",
      comments: "",
    });
    console.log("formData :>> ", formData);
    // setShowThankPage(true);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className={title()}>contact-us</h1>

        <Card className="p-6 w-full mb-6 md:p-11 lg:w-[696px]">
          <form>
            <Input
              className="mb-7"
              fullWidth
              color="default"
              size="lg"
              // placeholder={t("inputName")}
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {/* <Image alt="" src="" width={20} /> */}

            <Input
              className="mb-7"
              fullWidth
              color="default"
              size="lg"
              // placeholder={t("inputMail")}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              className="mb-12"
              fullWidth
              color="default"
              size="lg"
              // placeholder={t("inputTel")}
              name="telephone"
              type="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />

            <Textarea
              classNames={{
                input: "min-h-32 md:min-h-48",
              }}
              minRows={6}
              // placeholder={t("inputCom")}
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            />
          </form>
        </Card>
        <Button
          className="min-w-44 mb-11 md:mb-0"
          onPress={handleSubmit}
          type="submit"
          size="lg"
          style={{ backgroundColor: "#AD8E20" }}
        >
          Send
          {/* {t("contactBtn1")} */}
        </Button>
      </section>
    </DefaultLayout>
  );
}
