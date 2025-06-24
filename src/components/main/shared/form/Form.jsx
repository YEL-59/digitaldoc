import { Form as ShadCnForm } from "@/components/ui/form";

const Form = ({ form, mutate, children }) => {
  return (
    <ShadCnForm {...form}>
      <form onSubmit={form.handleSubmit(mutate)}>{children}</form>
    </ShadCnForm>
  );
};

export default Form;
