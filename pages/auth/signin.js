import { Button } from "components/buttons";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import * as yup from "yup";

export default function Signin() {
  const router = useRouter();

  const {
    query: { error, callbackUrl },
  } = router;

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: yup.object().shape({
      password: yup
        .string()
        .required("Bitte gib das Passwort von deiner Karte ein."),
    }),
    onSubmit: async (values, { setErrors }) => {
      const res = await signIn("credentials", { ...values, redirect: false });
      if (res.error) {
        setErrors({
          password:
            "Das Passwort war leider nicht korrekt. Bitte versuch es noch einmal.",
        });
      }
      if (res.status === 200) {
        router.push(callbackUrl ?? "/");
      }
    },
  });

  return (
    <div className="h-screen grid place-items-center p-4">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex gap-4 flex-col bg-green-50 p-2 md:w-1/2"
      >
        <p className="my-2">
          Ihr solltet von F&F eine Karte bekommen haben. Auf dieser findet ihr
          ein Passwort, welches ihr hier eingeben müsst.
        </p>
        <div className="flex flex-col gap-1">
          <label className="text-sm" id="password-label" htmlFor="password">
            Passwort
          </label>
          <input
            value={formik.values.password}
            autoFocus
            className="shadow-md py-1 px-2 text-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
            type="text"
            name="password"
            id="password"
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <label className="text-xs text-error">
              {formik.errors.password}
            </label>
          )}
          {formik.touched.password && error && (
            <label className="text-xs text-error">
              Das Passwort stimmt leider nicht.
            </label>
          )}
        </div>

        <Button disabled={formik.isSubmitting} className="w-full" type="submit">
          Ok
        </Button>
      </form>
    </div>
  );
}

Signin.anon = true;
